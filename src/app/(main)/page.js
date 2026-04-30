import ExtraSections from "@/components/shared/homepage/ExtraSection";
import HeroSection from "@/components/shared/homepage/HeroSection";
import PopularProducts from "@/components/shared/homepage/PopularProducts";

export default function Home() {
  return (
    <div>
      {/*  Hero Section */}
      <HeroSection />

      {/* This is where  Next section will go
       */}
      <div className="container mx-auto px-4 md:px-12 py-16">
        <PopularProducts />
        <ExtraSections/>
      </div>
    </div>
  );
}
