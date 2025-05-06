'use client'
import { useForm, Controller } from "react-hook-form";
import Select from "react-select";

const institutions = [
  { label: "East Delta University", value: "edu" },
  { label: "Chittagong University", value: "cu" },
  { label: "Premier University", value: "pu" },
];

const locations = [
  { label: "Chittagong", value: "chittagong" },
  { label: "Dhaka", value: "dhaka" },
  { label: "Sylhet", value: "sylhet" },
];

const subjectOptions = [
  { label: "Physics", value: "physics" },
  { label: "Math", value: "math" },
  { label: "Chemistry", value: "chemistry" },
  { label: "Biology", value: "biology" },
];

export default function TutorSearchPage() {
  const { register, handleSubmit, control } = useForm();

  const onSubmit = (data) => {
    console.log("Search filters:", data);
    // Implement API search call here
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200 p-6">
      <div className="w-full max-w-3xl bg-base-100 shadow-xl p-8 rounded-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Find a Tutor</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Institution Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Institution</span>
            </label>
            <select {...register("institution")} className="select select-bordered">
              <option value="">Select Institution</option>
              {institutions.map((inst) => (
                <option key={inst.value} value={inst.value}>{inst.label}</option>
              ))}
            </select>
          </div>

          {/* Location Dropdown */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">Location</span>
            </label>
            <select {...register("location")} className="select select-bordered">
              <option value="">Select Location</option>
              {locations.map((loc) => (
                <option key={loc.value} value={loc.value}>{loc.label}</option>
              ))}
            </select>
          </div>

         
          {/* Search Button */}
          <div className="md:col-span-2 flex justify-center mt-4">
            <button className="btn btn-primary w-full md:w-1/2">Search</button>
          </div>
        </form>
      </div>
    </div>
  );
}
