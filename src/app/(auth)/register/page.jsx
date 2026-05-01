"use client";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation"; // 1. Import the router

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter(); // 2. Initialize the router

  const handleRegister = async (data) => {
    console.log(data, "data");
    const { email, password, name, image } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
      // callbackURL: "/", // We can remove this for email signup since we redirect manually
    });

    if (error) {
      alert(error.message);
    }
    
    if (res) {
      alert("SignUp Success! Redirecting to login...");
      // 3. This is the "Proper" way to redirect after a successful logic check
      router.push("/login"); 
    }
  };

  const handleGoogleSignIn = async () => {
    const { data, error } = await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
    });

    if (error) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-orange-100">
        <div className="card-body">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-black tracking-tighter text-base-content">
              Register <span className="text-orange-500">Account</span>
            </h2>
            <p className="text-base-content/60 text-sm mt-2">
              Register to manage your summer orders
            </p>
          </div>

          <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
            {/* ... (Your existing input fields stay exactly the same) ... */}
            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">Name</label>
              <div className="relative">
                <HiOutlineMail className="absolute left-3 top-3.5 text-orange-400" size={20} />
                <input type="text" placeholder="Your Name" className="input input-bordered w-full pl-10 bg-orange-50/30" required {...register("name")} />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">Image URL</label>
              <div className="relative">
                <HiOutlineMail className="absolute left-3 top-3.5 text-orange-400" size={20} />
                <input type="text" placeholder="Your Image URL " className="input input-bordered w-full pl-10 bg-orange-50/30" required {...register("image")} />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">Email Address</label>
              <div className="relative">
                <HiOutlineMail className="absolute left-3 top-3.5 text-orange-400" size={20} />
                <input type="email" placeholder="Your Email" className="input input-bordered w-full pl-10 bg-orange-50/30" required {...register("email")} />
              </div>
            </div>

            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">Password</label>
              <div className="relative">
                <HiOutlineLockClosed className="absolute left-3 top-3.5 text-orange-400" size={20} />
                <input type="password" placeholder="••••••••" className="input input-bordered w-full pl-10 bg-orange-50/30" required {...register("password")} />
              </div>
            </div>

            {/* The Submit Button: No <Link> needed, router.push handles it! */}
            <button type="submit" className="btn bg-linear-to-r from-orange-500 to-rose-500 hover:scale-[1.02] transition-all border-none text-white w-full mt-4 font-bold shadow-lg shadow-orange-200">
              Register
            </button>
          </form>

          <div className="divider text-xs uppercase text-base-content/40 my-8">Or Secure Login</div>

          <button onClick={handleGoogleSignIn} className="btn btn-outline border-gray-200 hover:bg-gray-50 hover:border-gray-300 w-full flex items-center gap-2">
            <FcGoogle size={22} />
            <span className="text-base-content">Register with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;