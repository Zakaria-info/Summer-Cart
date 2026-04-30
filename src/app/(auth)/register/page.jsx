"use client";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import {
  HiOutlineMail,
  HiOutlineLockClosed,
  HiOutlineUser,
  HiOutlinePhotograph,
} from "react-icons/hi";
import toast from "react-hot-toast";

const RegisterPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;

    try {
      // Logic for BetterAuth registration goes here later
      console.log({ name, email, photo, password });

      toast.success("Account created! Redirecting to login...");
      setTimeout(() => {
        router.push("/login");
      }, 2000);
    } catch (error) {
      toast.error(error.message || "Registration failed. Try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = async () => {
    toast.loading("Connecting to Google...");
    // BetterAuth Google Logic here
    // On success: router.push('/')
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-orange-100">
        <div className="card-body">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-black tracking-tighter text-base-content">
              Join <span className="text-orange-500">SunCart</span>
            </h2>
            <p className="text-base-content/60 text-sm mt-2">
              Create your account for summer deals
            </p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            
            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">
                Full Name
              </label>
              <div className="relative">
                <HiOutlineUser
                  className="absolute left-3 top-3.5 text-orange-400"
                  size={20}
                />
                <input
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  className="input input-bordered w-full pl-10 bg-orange-50/30"
                  required
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
                  name="email"
                  type="email"
                  placeholder="Your Email"
                  className="input input-bordered w-full pl-10 bg-orange-50/30"
                  required
                />
              </div>
            </div>

            
            <div className="form-control">
              <label className="label font-semibold text-xs uppercase tracking-widest">
                Photo URL
              </label>
              <div className="relative">
                <HiOutlinePhotograph
                  className="absolute left-3 top-3.5 text-orange-400"
                  size={20}
                />
                <input
                  name="photo"
                  type="url"
                  placeholder="Your Image Link"
                  className="input input-bordered w-full pl-10 bg-orange-50/30"
                  required
                />
              </div>
            </div>

            
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
                  name="password"
                  type="password"
                  placeholder="Your Password"
                  className="input input-bordered w-full pl-10 bg-orange-50/30"
                  required
                />
              </div>
            </div>

            <button
              disabled={loading}
              className="btn bg-linear-to-r from-orange-500 to-rose-500 hover:scale-[1.02] transition-all border-none text-white w-full mt-4 font-bold shadow-lg"
            >
              {loading ? (
                <span className="loading loading-spinner"></span>
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <div className="divider text-xs uppercase text-base-content/40 my-6">
            OR
          </div>

          {/* Social Login */}
          <button
            onClick={handleGoogleLogin}
            className="btn btn-outline border-gray-200 hover:bg-gray-50 hover:border-gray-300 w-full flex items-center gap-2"
          >
            <FcGoogle size={22} />
            <span className="text-base-content">Continue with Google</span>
          </button>

          <p className="text-center text-sm mt-8">
            Already have an account?
            <Link
              href="/login"
              className="text-orange-600 font-bold hover:underline ml-1"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
