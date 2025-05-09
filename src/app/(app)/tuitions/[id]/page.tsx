'use client'
import TuitionCard from '@/components/TuitionCard'
import { useUser } from '@clerk/nextjs';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { use, useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
const tuitions = [
  {
    id: 1,
    location: 'Dhanmondi, Dhaka',
    studentClass: 'Class 9',
    description: 'Looking for an experienced tutor for Science and Math, 3 days a week.',
    mode: 'Offline',
    salary: '৳5,000/month',
    user: {
      name: 'Hasib Rahman',
      avatar: 'https://i.pravatar.cc/40?img=3',
    },
  },
  {
    id: 2,
    location: 'Gulshan, Dhaka',
    studentClass: 'Class 7',
    description: 'Need help with English and Bangla grammar.',
    mode: 'Online',
    salary: '৳4,000/month',
    user: {
      name: 'Nusrat Jahan',
      avatar: 'https://i.pravatar.cc/40?img=5',
    },
  },
  // More entries...
];
function TuitionDetailsPage({  params }: { params: Promise<{ id: string }> }) {
  const [isTuitionLoading, setIsTuitionLoading] = useState(false)
  const [tuitions, setTuitions] = useState({})
  const [tutorProfile, setTutorProfile] = useState(null);
  const {user}=useUser()
  const { id } = use(params)
  console.log(id);
  const router=useRouter()
  useEffect(() => {
    const load = async () => {
      try {
        setIsTuitionLoading(true)
        const res = await axios.post('/api/tuition/getbyid', { id })
        const tutorRes=await axios.get('/api/tutor/get')
        setTutorProfile(tutorRes.data?.tutor || null)
        setTuitions(res.data.tuition)
      } catch (error) {
        console.log(error);

      } finally {
        setIsTuitionLoading(false)
      }
    }
    load()
  }, [])
  const {register,handleSubmit,formState:{isSubmitting}}=useForm()
  const onSubmit=async (values)=>{
    try {
      if (tutorProfile) {
        const exists=tuitions?.applications.find(i=>i?.tutorId===tutorProfile?.id)
       
        if(exists?.id){
          alert("you have applied already for this tuition posts")
          router.push('/tuitions')
          return;
        }else{
          const data={
            message:values.message,
            tuitionId:Number(id)
          }
          console.log(data);
         const res= await axios.post('/api/tuition-application/create',data)
         console.log(res.data);
         router.push('/dashboard/tutor')
        }
        
        
      }else{
        alert('Please create your tutor profile before applying.');
      router.push("/dashboard/tutor")
      }
      
    } catch (error) {
      console.log(error);
      
    }finally{

    }
  }
  
  
  return (
    <div className="flex flex-col lg:flex-row gap-6 p-6 max-w-6xl mx-auto">
      {
        isTuitionLoading ? <span className="loading loading-lg"></span> : <>
          <TuitionCard single={true} tuition={tuitions} />
          <div className="flex-1 bg-base-200 h-auto rounded-2xl shadow p-6">
            <h2 className="text-xl font-semibold mb-4">Apply / Contact</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">


              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                    {...register("message", { required: true })}
                  required
                  rows={4}
                  className="w-full border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>
              </div>

              <button
              disabled={isSubmitting || (user?.id ===tuitions.postedById) }
                type="submit"
                className="bg-primary text-primary-content btn"
              >
                Send Message
              </button>
              <br />
              {user?.id ===tuitions.postedById && <span className='text-xl text-danger'>You cannot apply to own tuition posts</span>}
            </form>
          </div>
        </>
      }

    </div>
  )
}

export default TuitionDetailsPage