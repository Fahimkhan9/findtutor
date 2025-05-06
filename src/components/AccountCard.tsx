// ProfileCard.tsx
'use client'
import { useUser } from "@clerk/nextjs";
import { error } from "console";
import { useState } from "react";
import { useForm } from "react-hook-form";

type FormValues = {
  password:string
};

export default function AccountCard() {
    const {user}=useUser()
  const { register, handleSubmit, formState:{errors,isSubmitting} } = useForm<FormValues>({
    defaultValues: {
      password:''
    },
  });
  

 


 

  const onSubmit = async(data: FormValues) => {
    console.log("Form data:", {
      password:data.password
    });
    try {
       
    } catch (error) {
        
    }
  };

  return (
    <div className="max-w-sm mx-auto p-6 rounded-2xl shadow bg-base-300 space-y-4">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
       

        <div className="form-control">
          <label className="label">
            <span className="label-text">Update your Password</span>
          </label>
          <input
            type="text"
            {...register("password", { required: true })}
            placeholder="Enter new your password"
            className="input input-bordered"
          />
          <span className="text-red">{errors.password && errors.password.message}</span>
        </div>

       

        <button type="submit" className="btn btn-primary w-full">
          Save Changes
        </button>
      </form>
    </div>
  );
}
