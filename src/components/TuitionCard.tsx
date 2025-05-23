'use client'
import { useAuth } from '@clerk/nextjs';
import Link from 'next/link';
import React from 'react'

function TuitionCard({tuition,single}) {
    const modeBadgeClass = tuition.mode === 'Offline'
    ? 'badge badge-outline badge-success'
    : 'badge badge-outline badge-info';
  const {isSignedIn}=useAuth()
    
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl border">
    <div className="card-body">
      <h2 className="card-title text-primary">Tuition Opportunity</h2>
      
      <div className="text-sm text-white space-y-1">
        <p><span className="font-semibold">Location:</span>{tuition.district} --> {tuition.location}</p>
        <p><span className="font-semibold">Student Class:</span> {tuition.year}</p>
        <p><span className="font-semibold">Mode:</span> <span className={modeBadgeClass}>{tuition.mode}</span></p>
        <p><span className="font-semibold">Salary:</span> ৳{tuition.salary}/month</p>
        <p><span className="font-semibold">Subject:</span> 
        {
          tuition?.subjects?.split(',').map((i)=><div  className='badge badge-accent rounded-lg gap-2 mx-1'>{i}</div>)
        }
        </p>

      </div>
  
      <div className="mt-2">
        <p className="text-sm text-white "><span className="font-bold">Description:</span> {tuition.description}.</p>
      </div>
      <div className="divider my-2"></div>

{/* User info */}
<div className="flex items-center gap-3">
  <div className="avatar">
    <div className="w-10 rounded-full">
      <img src={tuition?.user?.img} alt={tuition?.user?.username} />
    </div>
  </div>
  <div>
    <p className="text-sm font-medium">{tuition?.user?.username}</p>
    <p className="text-sm font-medium">{tuition?.user?.email}</p>

    <p className="text-xs text-gray-500">Posted by</p>
  </div>
</div>
      <div className="card-actions justify-between mt-4">
        <div className="p-2 rounded-lg bg-base-200 text-white">{tuition?.applications?.length} Tutors Requested</div>
      <div className='tooltip' data-tip='Sign in to apply'>
      {!single &&   <button disabled={!isSignedIn} className="btn py-4 btn-sm btn-primary">
          <Link href={`/tuitions/${tuition.id}`}> Apply
          </Link>
         
          </button>}
      </div>
      </div>
     
    </div>
  </div>
  )
}

export default TuitionCard