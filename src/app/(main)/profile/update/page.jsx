"use client";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { HiCamera, HiUser } from "react-icons/hi";

const UpdateProfile = () => {
  const { data: session } = authClient.useSession();
  const { register, handleSubmit } = useForm({
    defaultValues: {
      name: session?.user?.name,
      image: session?.user?.image,
    }
  });
  const router = useRouter();

  const onUpdate = async (data) => {
    const loadingToast = toast.loading("Updating profile...");
    
    const { data: res, error } = await authClient.updateUser({
      name: data.name,
      image: data.image,
    });

    if (res) {
      toast.success("Profile updated!", { id: loadingToast });
      router.push("/profile");
      router.refresh(); // Refresh session data across the app
    }

    if (error) {
      toast.error(error.message, { id: loadingToast });
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-xl border border-orange-100">
        <div className="card-body">
          <h2 className="text-2xl font-black text-center mb-6">Update <span className="text-orange-500">Profile</span></h2>
          
          <form onSubmit={handleSubmit(onUpdate)} className="space-y-4">
            <div className="form-control">
              <label className="label font-bold text-xs uppercase tracking-widest text-base-content/50">Full Name</label>
              <div className="relative">
                <HiUser className="absolute left-3 top-3.5 text-orange-400" />
                <input 
                  {...register("name")}
                  className="input input-bordered w-full pl-10 bg-orange-50/30" 
                  placeholder="John Doe"
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-bold text-xs uppercase tracking-widest text-base-content/50">Photo URL</label>
              <div className="relative">
                <HiCamera className="absolute left-3 top-3.5 text-orange-400" />
                <input 
                  {...register("image")}
                  className="input input-bordered w-full pl-10 bg-orange-50/30" 
                  placeholder="Image Url here"
                />
              </div>
            </div>

            <button className="btn btn-primary w-full mt-4 font-bold">
              Save Changes
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateProfile;