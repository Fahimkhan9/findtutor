
import { UserProfile } from '@clerk/nextjs'
import React from 'react'

function ProfilePage() {
  return (

<div className="flex flex-row min-h-screen justify-center items center">
  <UserProfile/>
</div>
  )
}

export default ProfilePage