import { HiLightningBolt, HiBeaker, HiSun } from 'react-icons/hi';

const ExtraSections = () => {
  const brands = ["SunShade", "CoolFit", "HydroCool", "SkinGuard"];

  return (
    <div className="container mx-auto px-4 md:px-12 py-12 space-y-20">
      
      {/* 🧴 Summer Care Tips */}
      <section>
        <h2 className="text-3xl font-bold mb-8 text-center">☀️ Summer Care Tips</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 p-6 rounded-3xl flex gap-4">
            <div className="text-blue-500 text-3xl"><HiLightningBolt /></div>
            <div>
              <h3 className="font-bold text-blue-900">Stay Hydrated</h3>
              <p className="text-sm text-blue-800/70">Drink at least 3 liters of water to keep your skin glowing.</p>
            </div>
          </div>
          <div className="bg-orange-50 p-6 rounded-3xl flex gap-4">
            <div className="text-orange-500 text-3xl"><HiSun /></div>
            <div>
              <h3 className="font-bold text-orange-900">Sun Protection</h3>
              <p className="text-sm text-orange-800/70">Apply SPF 50+ every 2 hours when outdoors.</p>
            </div>
          </div>
          <div className="bg-green-50 p-6 rounded-3xl flex gap-4">
            <div className="text-green-500 text-3xl"><HiBeaker /></div>
            <div>
              <h3 className="font-bold text-green-900">After Sun Care</h3>
              <p className="text-sm text-green-800/70">Use Aloe Vera gel to soothe skin after a beach day.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 🏷️ Top Brands */}
      <section className="pb-12">
        <h2 className="text-center text-xl font-semibold text-base-content/50 uppercase tracking-widest mb-8">
          Trust by the Best
        </h2>
        <div className="flex flex-wrap justify-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all">
          {brands.map((brand) => (
            <div key={brand} className="px-8 py-4 bg-base-200 rounded-xl font-black text-2xl tracking-tighter">
              {brand.toUpperCase()}
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default ExtraSections;