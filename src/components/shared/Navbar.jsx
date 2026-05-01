"use client";
import { authClient } from "@/lib/auth-client";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineSun, HiMenuAlt3 } from "react-icons/hi";

const Navbar = () => {
  

  const { data: session } = authClient.useSession();
  const user = session?.user;
  console.log(user, "user");

  return (
    <div className="navbar bg-base-100/90 backdrop-blur-md sticky top-0 z-50 px-4 lg:px-12 border-b border-orange-100">
      {/* Logo Area */}
      <div className="navbar-start">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="bg-linear-to-tr from-yellow-400 to-orange-500 p-2 rounded-xl text-white group-hover:rotate-12 transition-transform shadow-md">
            <HiOutlineSun size={24} />
          </div>
          <span className="font-extrabold text-2xl tracking-tighter hidden sm:block">
            SUN<span className="text-orange-500">CART</span>
          </span>
        </Link>
      </div>

      
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-6 font-semibold text-base">
          <li className="hover:text-orange-500 transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link href="/products">Products</Link>
          </li>
          <li className="hover:text-orange-500 transition-colors">
            <Link href="/profile">My Profile</Link>
          </li>
        </ul>
      </div>

      {/* Auth Buttons */}
      <div className="navbar-end gap-3">
        {user ? (
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center gap-1">
              <h2>Hello {user.name}</h2>
              <Image alt="User" src={user.image} width={40} height={40} />
            </div>

            <button className="btn bg-orange-500 text-white items-center">
              <Link href={"/register"}>Log Out</Link>
            </button>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <Link
              href="/login"
              className="btn btn-ghost btn-sm border-orange-200"
            >
              Login
            </Link>
            <Link
              href="/register"
              className="btn btn-sm bg-linear-to-r from-yellow-400 via-orange-500 to-rose-500 border-none text-white font-bold shadow-lg hover:scale-105 transition-all"
            >
              Register
            </Link>
          </div>
        )}

        {/* Mobile Dropdown */}
        <div className="dropdown dropdown-end lg:hidden">
          <label tabIndex={0} className="btn btn-ghost p-0">
            <HiMenuAlt3 size={28} className="text-orange-600" />
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-4 shadow-2xl bg-base-100 rounded-2xl w-64 gap-2 border border-orange-50"
          >
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/products">Products</Link>
            </li>
            <li>
              <Link href="/profile">My Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
