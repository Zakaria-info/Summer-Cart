import Link from "next/link";
import { HiFire, HiOutlineSun, HiSparkles } from "react-icons/hi";

const HeroSection = () => {
  return (
    <div className="container mx-auto px-4 md:px-12 py-8 space-y-6">
      {/* Summer Sale 50% OFF */}
      <div className="w-full rounded-3xl min-h-75 sm:min-h-87.5 shadow-xl shadow-orange-100 overflow-hidden relative border border-orange-100/50">
        <div className="absolute inset-0 bg-linear-to-br from-yellow-400 via-orange-400 to-rose-500 opacity-95"></div>

        {/* Decorative Sun Icon (Top Right) */}
        <HiOutlineSun className="absolute top-6 right-6 text-[180px] text-yellow-300/30 rotate-12 hidden md:block" />

        {/* Banner Content */}
        <div className="relative z-10 w-full h-full flex flex-col items-start justify-center p-8 md:p-16 text-white space-y-3">
          <div className="flex items-center gap-2 bg-white/20 px-3 py-1 rounded-full backdrop-blur-sm text-sm font-semibold">
            <span>Summer Collection 2026</span>
          </div>
          <h2 className="text-5xl md:text-7xl font-extrabold tracking-tighter leading-none">
            SUMMER <span className="text-rose-600 drop-shadow-sm">SALE</span>
          </h2>
          <p className="text-5xl md:text-7xl font-black text-rose-600 drop-shadow-md">
            50% OFF
          </p>
          <p className="text-sm md:text-lg opacity-90 max-w-sm pt-2">
            Cool styles, hot prices. Dive into the biggest discounts of the
            season.
          </p>
          <div className="pt-4">
            <Link
              href="/products"
              className="btn btn-sm md:btn-md bg-white hover:bg-orange-50 text-orange-600 font-extrabold px-8 border-none shadow-md hover:scale-105 transition-all"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>

      {/*  Hot Deals */}
      <div className="w-full rounded-2xl bg-linear-to-r from-red-600 via-rose-500 to-orange-500 p-1 shadow-lg shadow-red-100">
        <div className="bg-base-100 rounded-xl p-5 md:p-6 flex flex-col md:flex-row items-center justify-between gap-4 border border-red-50">
          <div className="flex items-center gap-4">
            <div className="bg-red-100 text-red-600 p-3 rounded-xl">
              <HiFire className="text-3xl" />
            </div>
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-red-700">
                HOT DEALS 🔥
              </h3>
              <p className="text-sm md:text-base text-base-content/80">
                Massive discounts on all cooling gadgets & beach gear. Limited
                time only.
              </p>
            </div>
          </div>
          <Link
            href="/products"
            className="btn btn-sm md:btn-md bg-red-600 hover:bg-red-700 text-white border-none font-semibold px-6 w-full md:w-auto"
          >
            Explore Deals
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
