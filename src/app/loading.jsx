export default function GlobalLoading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-100">
      <div className="flex flex-col items-center gap-4">
        
        <span className="loading loading-spinner w-16 text-orange-500"></span>
        <h2 className="text-xl font-bold text-orange-600 animate-pulse uppercase tracking-widest">
          SunCart
        </h2>
      </div>
    </div>
  );
}