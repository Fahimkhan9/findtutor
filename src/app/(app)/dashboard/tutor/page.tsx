// CustomProfilePage.tsx
'use client'
import { useUser } from "@clerk/clerk-react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";
import axios from "axios";
import { Slide, toast } from "react-toastify";
import { sub } from "framer-motion/m";

type FormData = {
  institution: string;
  subjects: string;
  year: string;
  location: string;
  sampleTeachingVideo: FileList;
  subjectToTeach: string;
};

export default function CustomProfilePage() {
  const { user } = useUser();
  const [subjects, setSubjects] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const { register, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
    },
  });

 
  const onSubmit:SubmitHandler<FormData> = async (data: FormData) => {
    if (!user) return;

    setIsSaving(true);
    setSuccess(false);

    try {
      const formData = new FormData();
      formData.append("institution", data.institution);
      formData.append("subjects", data.subjects);
      formData.append("year", data.year);
      formData.append("location", data.location);
      formData.append("sampleTeachingVideo", data.sampleTeachingVideo[0]);
      formData.append("subjectToTeach", subjects.join(","));
      formData.append("name", user.username);
      formData.append("email", user.emailAddresses[0].emailAddress);
      formData.append("subjectToTeach", subjects.join(","));
      
      const res=await axios.post('/api/tutor/create',formData)
      console.log(res.data);
      if(res.data.success){
        setSuccess(true);
        setInputValue('');
        setSubjects([]);
        toast.success('Tutor info updated successfully!', {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "colored",
          transition: Slide,
          });
       
      }
     
    } catch (err) {
      console.error("Update failed:", err);
      toast.error('Error while updating tutor info', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Slide,
        });
    } finally {
      setIsSaving(false);
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      const trimmed = inputValue.trim();
      if (trimmed && !subjects.includes(trimmed)) {
        setSubjects([...subjects, trimmed]);
      }
      setInputValue('');
    }
  };

  const removeSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-base-200 p-6 space-y-4">
      
        <ProfileSidebar/>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-2xl mx-auto card bg-base-100 shadow-xl p-6 space-y-6">
          <h2 className="text-xl font-semibold text-center">Set your Tutor Profile</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            
           < h2 className="text-lg font-semibold">Academics Information</h2>
            <div className="form-control">
              <label className="label text-sm">Current Institution</label>
              <br />
              <input
              {...register("institution", { required: true })}
                type="text"
                placeholder="Enter your current institution"
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label text-sm">Subject</label>
              <br />

              <input
              {...register("subjects", { required: true })}

                type="text"
                placeholder="Enter your subject(ex: CSE,EEE,BBA etc )"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label text-sm">Current year</label>
              <br />

              <input
                {...register("year", { required: true })}
                type="text"
                placeholder="Enter your current year"
                className="input input-bordered"
              />
            </div>
             
           < h2 className="text-lg font-semibold">Preferred Subjects </h2>
           <div className="form-control">
              <label className="label text-sm">Subject you want to teach</label>
              <br />
            <div className="flex flex-wrap items-center gap-2 border border-base-300 rounded p-2 bg-base-100 focus-within:ring ring-primary">
            {subjects.map((subject, index) => (
          <div
            key={index}
            className="badge badge-accent rounded-lg gap-2"
          >
            {subject}
            <button
              onClick={() => removeSubject(index)}
              className="ml-1 text-white hover:text-red-300"
              type="button"
            >
              ✕
            </button>
          </div>
        ))}
              
             
            </div>
            <input
  {...register("subjectToTeach", { required: subjects.length<=0 })}
              type="text"
          id="subjectsToTeach"
          name="subjectsToTeach"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Type and press Enter to add"
           className="input input-bordered my-2"
        />
            </div>
            < h2 className="text-lg font-semibold">Others </h2>
           <div className="form-control">
              <label className="label text-sm">Location</label>
              <br />

              <input
                {...register("location", { required: true })}
                type="text"
                placeholder="Enter your location"
                className="input input-bordered"
              />
            </div>
            <div className="form-control">
              <label className="label text-sm">Enter a sample video for your teaching</label>
              <br />

              <input
                {...register("sampleTeachingVideo", { required: true })}
                type="file"
               
                className="input input-bordered"
              />
            </div>
            <button type="submit" className="btn btn-primary w-full" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Changes"}
            </button>

            {success && (
              <div className="text-success text-center">
                Profile updated successfully!
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
