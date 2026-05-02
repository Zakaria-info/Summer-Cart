"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineMail, HiPencilAlt, HiUserCircle } from "react-icons/hi";

const getValidImageUrl = (value) => {
  if (!value) return null;
  try {
    return new URL(value).href;
  } catch {
    return null;
  }
};

const ProfilePage = () => {
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return <div className="min-h-screen flex justify-center items-center"><span className="loading loading-spinner loading-lg text-orange-500"></span></div>;

  const user = session?.user;

  return (
    <div className="min-h-[80vh] bg-base-200 py-12 px-4">
      <div className="max-w-md mx-auto">
        <div className="card bg-base-100 shadow-2xl border border-orange-100">
          <figure className="px-10 pt-10">
            <div className="avatar">
              <div className="w-32 rounded-full ring ring-orange-500 ring-offset-base-100 ring-offset-2 shadow-xl overflow-hidden bg-white">
                {getValidImageUrl(user?.image) ? (
                  <Image src={getValidImageUrl(user.image)} alt={user.name} width={500} height={500} />
                ) : (
                  <div className="w-full h-full flex items-center justify-center bg-orange-100 text-orange-500">
                    <HiUserCircle className="w-24 h-24" />
                  </div>
                )}
              </div>
            </div>
          </figure>
          
          <div className="card-body items-center text-center">
            <h2 className="card-title text-3xl font-black tracking-tight text-base-content">
              {user?.name || "User Name"}
            </h2>
            
            <div className="flex items-center gap-2 text-base-content/60 bg-orange-50 px-4 py-2 rounded-full mt-2">
              <HiOutlineMail className="text-orange-500" />
              <span className="font-medium">{user?.email}</span>
            </div>

            <div className="card-actions mt-8 w-full">
              {/* Redirects to the update sub-route */}
              <Link href="/profile/update" className="btn btn-primary w-full gap-2 rounded-xl shadow-lg shadow-indigo-100">
                <HiPencilAlt size={18} />
                Update Information
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;