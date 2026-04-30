import Link from 'next/link';
import products from '@/data/items.json';
import ProductCard from '../ProductCard';


const PopularProducts = () => {
  // Extracting only the first 3 items for the "Popular" section
  const featured = products.slice(0, 3);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4 md:px-12">
        {/* Section Header */}
        <div className="flex items-center justify-between mb-10">
          <div className="space-y-1">
            <h2 className="text-3xl font-extrabold tracking-tight">
              <span className="text-orange-500"></span> Popular Products
            </h2>
            <p className="text-base-content/60 text-sm">Our handpicked summer essentials</p>
          </div>
          <Link href="/products" className="btn btn-ghost text-primary font-bold hover:bg-primary/10">
            View All Products
          </Link>
        </div>

        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularProducts;