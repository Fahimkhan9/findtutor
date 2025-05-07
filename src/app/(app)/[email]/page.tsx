import React from 'react'

function PublicProfile() {
  return (
    <div className="max-w-sm mx-auto mt-10">
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img src="https://i.pravatar.cc/150?img=32" alt="User Profile" className="rounded-full w-32 h-32 object-cover border-4 border-primary" />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-2xl font-bold">Jane Doe</h2>
        <p className="text-sm text-gray-500">Full Stack Developer</p>
        <p className="text-sm text-gray-400">📍 San Francisco, CA</p>
        <p className="mt-2 text-gray-600">
          Passionate developer with 5+ years of experience in building web applications. Loves React, Tailwind, and good coffee ☕.
        </p>
        <div className="card-actions mt-4">
          <button className="btn btn-primary btn-sm">Contact</button>
        </div>
      </div>
    </div>
  </div>
  
  )
}

export default PublicProfile