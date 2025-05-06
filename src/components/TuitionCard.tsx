import Link from 'next/link';
import React from 'react'

function TuitionCard({tuition,single}) {
    const modeBadgeClass = tuition.mode === 'Offline'
    ? 'badge badge-outline badge-success'
    : 'badge badge-outline badge-info';
    console.log(tuition);
    
  return (
    <div className="card w-full max-w-sm bg-base-100 shadow-xl border">
    <div className="card-body">
      <h2 className="card-title text-primary">Tuition Opportunity</h2>
      
      <div className="text-sm text-white space-y-1">
        <p><span className="font-semibold">Location:</span>{tuition.district} --> {tuition.location}</p>
        <p><span className="font-semibold">Student Class:</span> {tuition.year}</p>
        <p><span className="font-semibold">Mode:</span> <span className={modeBadgeClass}>{tuition.mode}</span></p>
        <p><span className="font-semibold">Salary:</span> ৳{tuition.salary}/month</p>
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
    <p className="text-xs text-gray-500">Posted by</p>
  </div>
</div>
      <div className="card-actions justify-end mt-4">
      {!single &&   <button className="btn btn-sm btn-primary">
          <Link href={`/tuitions/${tuition.id}`}> Apply
          </Link>
         
          </button>}
      </div>
     
    </div>
  </div>
  )
}

export default TuitionCard