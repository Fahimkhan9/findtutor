'use client'
import axios from 'axios'
import { CldVideoPlayer } from 'next-cloudinary'
import React, { use, useEffect, useState } from 'react'

import 'next-cloudinary/dist/cld-video-player.css';

function PublicProfile({  params }: { params: Promise<{ id: string }> }) {
  const {id}=use(params)
  const [isLoading,setIsLoading]=useState(false)
  const [user,setUser]=useState(null)
  const [tutorProfile,setTutorProfile]=useState(null)
  useEffect(()=>{
    const load=async ()=>{
      try {
        setIsLoading(true)
        const res=await axios.get(`/api/${id}`)
      console.log(res.data);
      setUser(res.data.user)
      
        setTutorProfile(res.data.tutor)
      
      } catch (error) {
        console.log(error);
        
      }finally{
        setIsLoading(false)
      }
      
    }
    load()
  },[id])
  return (
   <div className="flex flex-row min-h-screen justify-center items-center">
     {
      isLoading ? <div className="loading loading-lg"></div>:
      <div className="my-5">
        <div className="">
    <div className="card w-full bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src={user?.img} alt="User Profile" className="rounded-full w-32 h-32 object-cover border-4 border-primary" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">{user?.username}</h2>
        <p className="text-sm text-gray-500">{user?.email}</p>
        <p className="text-sm text-gray-400">📍 {tutorProfile?.location}</p>
        <div className="max-w-2xl mx-auto card bg-base-100 shadow-xl p-6 space-y-6">
              <h2 className="text-xl font-semibold text-center">Update your Tutor Profile</h2>
            

                < h2 className="text-lg font-semibold">Academics Information</h2>
                <div className="form-control">
                  <label className="label text-sm">Current Institution</label>
                  <br />
                  <input
                    
                    id='publicprofileinput'
                    type="text"
                   value={tutorProfile?.institution}
                    disabled
                    className="input input-bordered"
                  />
                  
                </div>

                <div className="form-control">
                  <label className="label text-sm">Major</label>
                  <br />

                  <input
                    
                    id='publicprofileinput'
                    value={tutorProfile?.subjects}
                    type="text"
                    disabled
                    className="input input-bordered"
                  />
                </div>
                <div className="form-control">
                  <label className="label text-sm">Current year</label>
                  <br />

                  <input
                    value={tutorProfile?.year}
                    type="text"
                    disabled
                    id='publicprofileinput'
                    className="input input-bordered"
                  />
                </div>

                < h2 className="text-lg font-semibold">Preferred Subjects </h2>
                <div className="form-control">
                
                  <div className="flex flex-wrap items-center gap-2 border border-base-300 rounded p-2 bg-base-100 focus-within:ring ring-primary">
                    {tutorProfile?.subjectToTeach?.split(",").map((subject, index) => (
                      <div
                        key={index}
                        className="badge badge-accent rounded-lg gap-2"
                      >
                        {subject}
                        
                      </div>
                    ))}


                  </div>
                 
                  
                 
                </div>
                 <div className="form-control">
                  <label className="label text-sm">{tutorProfile?.sampleTeachingVideo && "A sample video for  teaching"}</label>
                  <br />
                  {tutorProfile?.sampleTeachingVideo && <CldVideoPlayer
                  width="1920"
                  height="1080"
                  src={tutorProfile?.sampleTeachingVideo}
                />}
                
                  
                 
                </div> 
                
                
              
            </div>
        <div className="card-actions mt-4">
          <button className="btn btn-primary btn-lg">
            <a href={`mailto:${user?.email}`}>Contact</a>
          </button>
        </div>
      </div>
    </div>
  </div>
      </div>
     }
   </div>
  
  )
}

export default PublicProfile