"use client";
import { Suspense } from "react";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { FcGoogle } from "react-icons/fc";
import { HiOutlineMail, HiOutlineLockClosed } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { authClient } from "@/lib/auth-client";

// Internal Component to handle search params
const LoginForm = () => {
  const { register, handleSubmit } = useForm();
  const router = useRouter();
  const searchParams = useSearchParams();

  const callbackURL = searchParams.get("callbackURL") || "/";

  const handleLogin = async (data) => {
    const { data: res, error } = await authClient.signIn.email({
      email: data.email,
      password: data.password,
      rememberMe: true,
    });

    if (error) {
      const errorMessage = error?.message || String(error) || "Login failed.";
      alert(errorMessage);
      return;
    }

    if (res) {
      router.push(callbackURL);
      router.refresh();
    }
  };

  const handleGoogleSignIn = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL:  "/"
    });
  };

  return (
    <div className="card-body">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black tracking-tighter text-base-content">
          Welcome <span className="text-orange-500">Back</span>
        </h2>
        <p className="text-base-content/60 text-sm mt-2">
          Login to manage your summer orders
        </p>
      </div>

      <form onSubmit={handleSubmit(handleLogin)} className="space-y-5">
        <div className="form-control">
          <label className="label font-semibold text-xs uppercase tracking-widest">
            Email Address
          </label>
          <div className="relative">
            <HiOutlineMail className="absolute left-3 top-3.5 text-orange-400" size={20} />
            <input
              type="email"
              placeholder="your@email.com"
              className="input input-bordered w-full pl-10 bg-orange-50/30 focus:border-orange-400"
              required
              {...register("email")}
            />
          </div>
        </div>

        <div className="form-control">
          <label className="label font-semibold text-xs uppercase tracking-widest">
            Password
          </label>
          <div className="relative">
            <HiOutlineLockClosed className="absolute left-3 top-3.5 text-orange-400" size={20} />
            <input
              type="password"
              placeholder="••••••••"
              className="input input-bordered w-full pl-10 bg-orange-50/30 focus:border-orange-400"
              required
              {...register("password")}
            />
          </div>
        </div>

        <button type="submit" className="btn bg-gradient-to-r from-orange-500 to-rose-500 hover:scale-[1.02] transition-all border-none text-white w-full mt-4 font-bold shadow-lg shadow-orange-200">
          Sign in
        </button>
      </form>

      <div className="divider text-xs uppercase text-base-content/40 my-8">
        Or Secure Login
      </div>

      <button onClick={handleGoogleSignIn} className="btn btn-outline border-gray-200 hover:bg-gray-50 hover:border-gray-300 w-full flex items-center gap-2">
        <FcGoogle size={22} />
        <span className="text-base-content">Sign in with Google</span>
      </button>

      <p className="text-center text-sm mt-8">
        New to SunCart?
        <Link href="/register" className="text-orange-600 font-bold hover:underline ml-1">
          Create an account
        </Link>
      </p>
    </div>
  );
};

// Main Export with Suspense Boundary
const LoginPage = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center py-12 px-4">
      <div className="card w-full max-w-md bg-base-100 shadow-2xl border border-orange-100">
        <Suspense fallback={<div className="p-20 text-center"><span className="loading loading-spinner text-orange-500"></span></div>}>
          <LoginForm />
        </Suspense>
      </div>
    </div>
  );
};

export default LoginPage;