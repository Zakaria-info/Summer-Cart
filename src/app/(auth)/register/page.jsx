"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlineLockClosed, HiOutlineUser, HiOutlinePhotograph } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const RegisterForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();

  const handleRegister = async (data) => {
    const { email, password, name, image } = data;

    const { data: res, error } = await authClient.signUp.email({
      name: name,
      email: email,
      password: password,
      image: image,
    });

    if (error) {
      alert(error.message);
      return;
    }
    
    if (res) {
      alert("SignUp Success! Redirecting to login...");
      router.push("/login"); 
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/", 
    });
  };

  return (
    <div className="card-body">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black tracking-tighter text-base-content">
          Register <span className="text-orange-500">Account</span>
        </h2>
        <p className="text-base-content/60 text-sm mt-2">
          Join SunCart for the best summer deals
        </p>
      </div>

      <form onSubmit={handleSubmit(handleRegister)} className="space-y-5">
        <div className="form-control">
          <label className="label font-semibold text-xs uppercase tracking-widest">Full Name</label>
          <div className="relative">
            <HiOutlineUser className="absolute left-3 top-3.5 text-orange-400" size={20} />
            <input type="text" placeholder="John Doe" className="input input-bordered w-full pl-10 bg-orange-50/30" required {...register("name")} />
          </div>
        </div>

        <div className="form-control">
          <label className="label font-semibold text-xs uppercase tracking-widest">Image URL</label>
          <div className="relative">
            <HiOutlinePhotograph className="absolute left-3 top-3.5 text-orange-400" size={20} />
            <input type="text" placeholder="https://..." className="input input-bordered w-full pl-10 bg-orange-50/30" required {...register("image")} />
          </div>
        </div>

        <div className="form-control">
          <label className="label font-semibold text-xs uppercase tracking-widest">Email Address</label>
          <div className="relative">
            <HiOutlineMail className="absolute left-3 top-3.5 text-orange-400" size={20} />
            <input type="email" placeholder="your@email.com" className="input input-bordered w-full pl-10 bg-orange-50/30" required {...register("email")} />
          </div>
        </div>

        <div className="form-control">
          <label className="label font-semibold text-xs uppercase tracking-widest">Password</label>
          <div className="relative">
            <HiOutlineLockClosed className="absolute left-3 top-3.5 text-orange-400" size={20} />
            <input type="password" placeholder="••••••••" className="input input-bordered w-full pl-10 bg-orange-50/30" required {...register("password")} />
          </div>
        </div>

        <button type="submit" className="btn bg-gradient-to-r from-orange-500 to-rose-500 hover:scale-[1.02] transition-all border-none text-white w-full mt-4 font-bold shadow-lg shadow-orange-200">
          Register Now
        </button>
      </form>

      <div className="divider text-xs uppercase text-base-content/40 my-8">Or Secure Login</div>

      <button onClick={handleGoogleSignIn} className="btn btn-outline border-gray-200 hover:bg-gray-50 hover:border-gray-300 w-full flex items-center gap-2">
        <FcGoogle size={22} />
        <span className="text-base-content">Register with Google</span>
      </button>

      <p className="text-center text-sm mt-8">
        Already have an account?
        <Link href="/login" className="text-orange-600 font-bold hover:underline ml-1">
          Login here
        </Link>
      </p>
    </div>
  );
};

const RegisterPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-orange-100">
        <Suspense fallback={<div className="p-20 text-center"><span className="loading loading-spinner text-orange-500"></span></div>}>
          <RegisterForm />
        </Suspense>
      </div>
    </div>
  );
};

export default RegisterPage;