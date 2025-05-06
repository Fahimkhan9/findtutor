import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return <div className="flex flex-row min-h-screen justify-center items-center bg-neutral text-neutral-content">
    <SignUp/>
  </div>
}