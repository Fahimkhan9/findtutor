// CustomProfilePage.tsx
'use client'
import { useUser } from "@clerk/clerk-react";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";
import axios from "axios";
import { Slide, toast } from "react-toastify";
import { CldVideoPlayer } from 'next-cloudinary';
import 'next-cloudinary/dist/cld-video-player.css';
import { useRouter } from "next/navigation";

type FormData = {
  institution: string;
  subjects: string;
  year: string;
  location: string;
  sampleTeachingVideo: FileList;
  subjectToTeach: string;
};

export default function TutorProfilePage() {
  const { user } = useUser();
  const [subjects, setSubjects] = useState([]);
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [tutorInfo, setTutorInfo] = useState(null);
  const [isTutorInfoLoading, setIsTutorInfoLoading] = useState(false);
  const [tuitionApplications,setTuitionApplications]=useState([])
  const [isCreatingConversation,setISCreatingConversation]=useState(false)
  const { register, handleSubmit,reset,control } = useForm<FormData>();
  
  useEffect(() => {
    const fetchTutorInfo = async () => {
      try {
        setIsTutorInfoLoading(true);
        const res = await axios.get('/api/tutor/get')
        const tuitions=await axios.get(`/api/tuition-application/getbytutor?tutorId=${res.data.tutor?.id}`)
        console.log(tuitions.data);
        setTuitionApplications(tuitions.data.applications)
        setTutorInfo(res.data.tutor)
        
        res.data.tutor.subjectToTeach.split(',').map(i=>setSubjects((prev)=>[...prev,i]))
        reset({
          institution:res.data.tutor.institution,
          location:res.data.tutor.location,
          sampleTeachingVideo:res.data.tutor.sampleTeachingVideo,
          subjects:res.data.tutor.subjects,
          year:res.data.tutor.year,
          // subjectToTeach:res.data.tutor.subjectToTeach.split(',')
        })
      } catch (error) {
        console.log(error);

      } finally {
        setIsTutorInfoLoading(false);

      }
    }
    fetchTutorInfo()

  }, [reset])
const router=useRouter()


  const onSubmit: SubmitHandler<FormData> = async (data: FormData) => {
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

      const res = await axios.post('/api/tutor/create', formData)
     
      res.data.tutor.subjectToTeach.split(',').map(i=>setSubjects((prev)=>[...prev,i]))
      reset({
        institution:res.data.tutor.institution,
        location:res.data.tutor.location,
        sampleTeachingVideo:res.data.tutor.sampleTeachingVideo,
        subjects:res.data.tutor.subjects,
        year:res.data.tutor.year,
        // subjectToTeach:res.data.tutor.subjectToTeach.split(',')
      })
      if (res.data.success) {
        setSuccess(true);
        setInputValue('');
        setSubjects([]);
        router.push('/')
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
      const trimmed = inputValue.trim().toLocaleUpperCase();
      if (trimmed && !subjects.includes(trimmed)) {
        setSubjects([...subjects, trimmed]);
      }
      setInputValue('');
    }
  };

  const removeSubject = (index) => {
    setSubjects(subjects.filter((_, i) => i !== index));
  };
  const handleConversationCreate=async (teacherUserid:any)=>{
    try {
        setISCreatingConversation(true)
        const data={
            otherUserId:teacherUserid
        }
        
        
        const res=await axios.post('/api/chat/conversations/create',data)
        console.log(res.data);
        router.push('/chat')
    } catch (error) {
        console.log(error);
        
    }finally{
setISCreatingConversation(false)
    }
}
  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-base-200 p-6 space-y-4">

        <ProfileSidebar />
      </aside>
    
      {
        isTutorInfoLoading ? <div className="  flex flex-row min-h-screen justfiy-center items-center"><span className= "loading loading-bars loading-xl"></span></div>
          : <main className="flex-1  p-6 my-5">
            <div className="card my-5 w-full max-w-2xl mx-auto card bg-base-100 shadow-xl p-6 space-y-6">
              <div className="card-body ">
                <div className="card-title text-2xl text-center font-bold">All your application</div>
                <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        
        <th>Message sent</th>
        <th>Status</th>
        <th>Tuition Description</th>
        <th>Student Email</th>
        <th>Message student</th>

      </tr>
    </thead>
    <tbody>
   
   
      {
        tuitionApplications?.length>0 && tuitionApplications.map(i=>(<tr key={i?.id} className="hover:bg-base-300">
        
          <td>{i?.message}</td>
          <td>{i?.status}</td>
          <td>{i?.tuition?.description}</td>
          <td>{i?.tuition?.postedBy?.email}</td>
<td><button disabled={isCreatingConversation} onClick={()=>handleConversationCreate(i?.tuition?.postedById)} className="btn">
  {
    isCreatingConversation ? "Creating" : "Message"
  }</button></td>
        </tr>))
      }
     
    </tbody>
  </table>
</div>
              </div>
            </div>
            <br />
            {/* update profile */}
            <div className="max-w-2xl mx-auto card bg-base-100 shadow-xl p-6 space-y-6">
              <h2 className="text-xl font-semibold text-center">Update your Tutor Profile</h2>
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
                    {...register("subjectToTeach", { required: subjects.length <= 0 })}
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
                  {tutorInfo?.sampleTeachingVideo && <CldVideoPlayer
                  width="1920"
                  height="1080"
                  src={tutorInfo?.sampleTeachingVideo}
                />}
                  <input
                     {...register("sampleTeachingVideo")}
                    type="file"
                    accept="video/mp4"
                    className="input input-bordered my-4"
                  />
                </div>
                <button type="submit" className="btn btn-primary w-full" disabled={isSaving}>
                  {isSaving ? "Saving..." : "Save Changes"}
                </button>

                {success && (
                  <div className="text-success text-center">
                    Tutor Profile updated successfully!
                  </div>
                )}
              </form>
            </div>
          </main>

      }

    </div>
  );
}
