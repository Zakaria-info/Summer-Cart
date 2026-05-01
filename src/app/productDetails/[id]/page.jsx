import products from "@/data/items.json";
import Image from "next/image";
import Link from "next/link";
import { HiArrowLeft, HiStar, HiOutlineCube } from "react-icons/hi";


const ProductDetailsPage = async ({ params }) => {
  
  const { id } = await params;


  const product = products.find((p) => p.id.toString() === id.toString());

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4">
        <h1 className="text-2xl font-bold">Product ID: {id} not found!</h1>
        <Link href="/" className="btn btn-primary">Return Home</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <Link href="/" className="btn btn-ghost gap-2 mb-8 hover:bg-orange-100 text-orange-600">
          <HiArrowLeft size={20} /> Back to Products
        </Link>

        <div className="card lg:card-side bg-base-100 shadow-2xl border border-orange-100 overflow-hidden">
          <figure className="lg:w-1/2 bg-orange-50 p-8">
            <Image
              src={product.image}
              alt={product.name}
              width={500}
              height={500}
              className="rounded-3xl shadow-lg object-cover hover:scale-105 transition-transform duration-500"
            />
          </figure>

          <div className="card-body lg:w-1/2 justify-center gap-6">
            <div className="flex justify-between items-start">
              <div>
                <div className="badge badge-secondary font-bold mb-2 uppercase tracking-widest">{product.category}</div>
                <h2 className="card-title text-4xl font-black text-base-content leading-tight">
                  {product.name}
                </h2>
                <p className="text-orange-500 font-bold text-lg">{product.brand}</p>
              </div>
              <div className="flex items-center gap-1 bg-orange-100 px-3 py-1 rounded-full text-orange-600 font-bold">
                <HiStar /> {product.rating}
              </div>
            </div>

            <div className="divider my-0"></div>

            <p className="text-base-content/70 text-lg leading-relaxed italic">
              {product.description}
            </p>

            <div className="flex items-center gap-3 text-base-content/80 font-semibold">
              <HiOutlineCube size={24} className="text-orange-500" />
              <span>Stock Available: <span className="text-orange-600">{product.stock} units</span></span>
            </div>

            <div className="flex items-center justify-between mt-6">
              <span className="text-5xl font-black text-orange-600">
                ${product.price}
              </span>
              <button className="btn btn-primary btn-lg rounded-2xl px-10 shadow-lg shadow-indigo-200 hover:scale-105 transition-all">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;