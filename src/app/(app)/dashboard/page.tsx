// CustomProfilePage.tsx
'use client'
import { useUser } from "@clerk/clerk-react";
import { useForm } from "react-hook-form";
import { useState } from "react";
import ProfileSidebar from "@/components/ProfileSidebar";

type FormData = {
  firstName: string;
  lastName: string;
  profileImage: FileList;
};

export default function Dashboard() {
  const { user } = useUser();
  const [preview, setPreview] = useState<string>(user?.imageUrl || "");
  const [isSaving, setIsSaving] = useState(false);
  const [success, setSuccess] = useState(false);

  const { register, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      firstName: user?.firstName || "",
      lastName: user?.lastName || "",
    },
  });

  const profileImage = watch("profileImage");

  if (profileImage?.length > 0 && !preview.startsWith("blob")) {
    const reader = new FileReader();
    reader.onloadend = () => setPreview(reader.result as string);
    reader.readAsDataURL(profileImage[0]);
  }

  const onSubmit = async (data: FormData) => {
    if (!user) return;

    setIsSaving(true);
    setSuccess(false);
k
    try {
      await user.update({
        firstName: data.firstName,
        lastName: data.lastName,
      });

      if (data.profileImage?.[0]) {
        await user.setProfileImage({ file: data.profileImage[0] });
      }

      setSuccess(true);
      setTimeout(() => setSuccess(false), 3000);
    } catch (err) {
      console.error("Update failed:", err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row min-h-screen">
      {/* Sidebar */}
      <aside className="w-full md:w-64 bg-base-200 p-6 space-y-4">
      
        <ProfileSidebar/>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        <div className="max-w-2xl mx-auto card bg-base-100 shadow-xl p-6 space-y-6">
          <h2 className="text-xl font-semibold">Profile Information</h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="flex items-center space-x-4">
              <label className="avatar cursor-pointer">
                <div className="w-20 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                  <img src={preview} alt="Avatar" />
                </div>
                <input
                  type="file"
                  accept="image/*"
                  {...register("profileImage")}
                  className="hidden"
                  onChange={() => setPreview("")}
                />
              </label>
              <span className="text-sm text-gray-500">Click avatar to change</span>
            </div>

            <div className="form-control">
              <label className="label text-sm">First Name</label>
              <input
                type="text"
                {...register("firstName")}
                className="input input-bordered"
              />
            </div>

            <div className="form-control">
              <label className="label text-sm">Last Name</label>
              <input
                type="text"
                {...register("lastName")}
                className="input input-bordered"
              />
            </div>

            <button type="submit" className="btn btn-primary w-full" disabled={isSaving}>
              {isSaving ? "Saving..." : "Save Changes"}
            </button>

            {success && (
              <div className="text-success text-center">
                Profile updated successfully!
              </div>
            )}
          </form>
        </div>
      </main>
    </div>
  );
}
