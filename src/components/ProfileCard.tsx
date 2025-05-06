// ProfileCard.tsx
'use client'
import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Slide, toast } from "react-toastify";

type FormValues = {
  firstName: string;
  lastName: string;
  profileImage: FileList;
};

export default function ProfileCard() {
    const {user}=useUser()
  const { register, handleSubmit, watch ,formState:{errors,isSubmitting}} = useForm<FormValues>({
    defaultValues: {
      firstName: user?.firstName ?? undefined,
      lastName: user?.lastName ?? undefined,
    },
  });
  

  const [preview, setPreview] = useState<string | null>(null);

  const imageFile = watch("profileImage");

  // Update preview when image changes
  if (imageFile && imageFile.length > 0 && !preview) {
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(imageFile[0]);
  }

  const onSubmit = async (data: FormValues) => {
    console.log("Form data:", {
      firstName: data.firstName,
      lastName: data.lastName,
      image: data.profileImage?.[0],
    });
    try {
      const res=await user?.update({
        firstName: data.firstName,
        lastName: data.lastName,
        username:`${data.firstName}${data.lastName}`,
      })
      console.log(res);
      
      toast.success('Profile Updated Succesfully', {
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
    } catch (error) {
      console.log(error);
      
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 rounded-2xl shadow bg-base-300 space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="flex justify-center">
          <label className="cursor-pointer">
            <div className="avatar">
              <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                <img
                  src={preview || user?.imageUrl}
                  alt="Avatar"
                  className="object-cover"
                />
              </div>
            </div>
            <input
              type="file"
              accept="image/*"
              {...register("profileImage")}
              className="hidden"
              onChange={() => setPreview(null)} // trigger new preview
            />
          </label>
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">First Name</span>
          </label>
          <input
            type="text"
            {...register("firstName")}
            className="input input-bordered"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Last Name</span>
          </label>
          <input
            type="text"
            {...register("lastName")}
            className="input input-bordered"
          />
        </div>

        <button type="submit" disabled={isSubmitting} className="btn btn-primary w-full">
          Save Changes
        </button>
      </form>
    </div>
  );
}
