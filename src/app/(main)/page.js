import HeroSection from "@/components/shared/homepage/HeroSection";



export default function Home() {
  return (
    <div>
      {/*  Hero Section */}
      <HeroSection />
      
      {/* This is where  Next section will go
      */}
      <div className="container mx-auto px-4 md:px-12 py-16">
        <h2 className="text-3xl font-bold tracking-tighter text-base-content mb-8">
          Popular Products
        </h2>
        
        {/* Placeholder for Product Grid (Phase 2) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          <p className="text-base-content/70">Incoming products...</p>
        </div>
      </div>
    </div>
  );
}