export default function Loading() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center gap-4 bg-base-100">
      <span className="loading loading-infinity loading-lg text-orange-500 scale-150"></span>
      <p className="text-orange-600 font-bold animate-pulse tracking-widest uppercase text-sm">
        SunCart Catalog
      </p>
    </div>
  );
}