"use client";
import Link from "next/link";

import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";

import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

const RegisterPage = () => {
  const { register, handleSubmit } = useForm();

  const handleRegister = async(data) => {
    console.log(data, "data");

    const { email, password, name, image } = data;
    console.log(email, password);

    const {data:res, error} =await authClient.signUp.email({
      name: name, // required
      email: email, // required
      password: password ,// required
      image: image,
      callbackURL: "/",
    });
    console.log(res, error)
    if(error){
      alert(error.message)
    }
    if(res){
      alert("SignUp Success")
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
            {/* Email Field */}
            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">
                Name
              </label>
              <div className="relative">
                <HiOutlineMail
                  className="absolute left-3 top-3.5 text-orange-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full pl-10 bg-orange-50/30 focus:border-orange-400"
                  required
                  {...register("name")}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">
                Image URL
              </label>
              <div className="relative">
                <HiOutlineMail
                  className="absolute left-3 top-3.5 text-orange-400"
                  size={20}
                />
                <input
                  type="text"
                  placeholder="Your Image URL "
                  className="input input-bordered w-full pl-10 bg-orange-50/30 focus:border-orange-400"
                  required
                  {...register("image")}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">
                Email Address
              </label>
              <div className="relative">
                <HiOutlineMail
                  className="absolute left-3 top-3.5 text-orange-400"
                  size={20}
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full pl-10 bg-orange-50/30 focus:border-orange-400"
                  required
                  {...register("email")}
                />
              </div>
            </div>

            {/* Password Field */}
            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">
                Password
              </label>
              <div className="relative">
                <HiOutlineLockClosed
                  className="absolute left-3 top-3.5 text-orange-400"
                  size={20}
                />
                <input
                  type="password"
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10 bg-orange-50/30 focus:border-orange-400"
                  required
                  {...register("password")}
                />
              </div>
            </div>

            
             <button className="btn bg-linear-to-r from-orange-500 to-rose-500 hover:scale-[1.02] transition-all border-none text-white w-full mt-4 font-bold shadow-lg shadow-orange-200"> Register</button>
           
          </form>

          <div className="divider text-xs uppercase text-base-content/40 my-8">
            Or Secure Login
          </div>

          {/* Google Social Login */}
          <button className="btn btn-outline border-gray-200 hover:bg-gray-50 hover:border-gray-300 w-full flex items-center gap-2">
            <FcGoogle size={22} />
            <span className="text-base-content">Register in with Google</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
