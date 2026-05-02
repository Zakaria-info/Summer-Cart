export default function ProductsLoading() {
  return (
    <div className="container mx-auto px-4 py-20">
      <div className="flex flex-col items-center justify-center space-y-6">
        {/* DaisyUI Infinity Loader */}
        <span className="loading loading-infinity loading-lg text-orange-500 scale-150"></span>
        <p className="text-lg font-medium text-base-content/50 italic">
          Loading the summer vibes...
        </p>
        
        {/* Skeleton Grid (Optional: Makes it look even more professional) */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 w-full opacity-20">
            {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-64 bg-gray-200 rounded-2xl animate-pulse"></div>
            ))}
        </div>
      </div>
    </div>
  );
}