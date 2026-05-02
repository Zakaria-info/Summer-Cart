import ProductCard from '@/components/shared/ProductCard';
import products from '@/data/items.json';


const ProductsPage = () => {
  return (
    <div className="min-h-screen bg-base-200/50 py-12">
      <div className="container mx-auto px-4 md:px-12">
        
        {/* Page Header */}
        <div className="text-center mb-16 space-y-4">
          <h1 className="text-4xl md:text-5xl font-black tracking-tight text-base-content animate__animated animate__bounce">
            Explore Our <span className=" text-orange-500 ">Summer Catalog</span>
          </h1>
          <p className="text-base-content/60 max-w-2xl mx-auto text-lg">
            Find the perfect gear for your next adventure. From high-quality sunglasses to cooling fans, we have everything you need to beat the heat.
          </p>
          <div className="flex justify-center">
             <div className="h-1.5 w-24 bg-orange-500 rounded-full"></div>
          </div>
        </div>

        {/* Responsive Grid System */}
        {/* Mobile: 1 col, Tablet: 2 cols, Desktop: 3 cols, Large Desktop: 4 cols */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {/* Empty State (If products were empty) */}
        {products.length === 0 && (
          <div className="text-center py-20">
            <h2 className="text-2xl font-bold opacity-30">No products found...</h2>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsPage;