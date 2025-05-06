import Link from 'next/link'
import React from 'react'


function ProfileSidebar() {
    return (
        <div className="flex">

            <div className="drawer lg:drawer-open">

                <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col items-center justify-center">
                    {/* Page content here */}
                    <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">
                        open
                    </label>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-2" aria-label="close sidebar" className="drawer-overlay">Dashboard</label>
                    <ul className="menu bg-base-200 text-base-content min-h-full w-40 p-4">
                        {/* Sidebar content here */}
                        <li className='link text-lg hover:bg-accent hover:text-accent-content bg-base-500'><Link href='/dashboard/tutor'>Teacher</Link>
                        </li>
                        <li className='link text-lg hover:bg-accent hover:text-accent-content bg-base-500'><Link href='/dashboard/student'>student</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default ProfileSidebar