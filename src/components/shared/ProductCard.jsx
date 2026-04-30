import Image from 'next/image';
import { HiStar, HiEye } from 'react-icons/hi';

const ProductCard = ({ product }) => {
  return (
    <div className="card bg-base-100 w-full shadow-xl hover:shadow-2xl transition-all duration-300 border border-orange-100 group">
     
      <figure className="relative h-64 w-full overflow-hidden bg-orange-50">
        <Image
          src={product.image}
          alt={product.name}
          width={300}
          height={300}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
          
        />
        <div className="absolute top-4 right-4 badge badge-secondary font-bold shadow-md">
          HOT
        </div>
      </figure>

      <div className="card-body p-5">
        <div className="flex justify-between items-start gap-2 h-14">
          <h2 className="card-title text-lg font-bold leading-tight line-clamp-2">
            {product.name}
          </h2>
          <div className="flex items-center gap-1 text-orange-500 shrink-0">
            <HiStar />
            <span className="text-sm font-bold text-base-content">{product.rating}</span>
          </div>
        </div>
        
        <p className="text-sm text-base-content/60 font-medium mb-4">
          {product.brand}
        </p>

        <div className="card-actions justify-between items-center pt-4 border-t border-orange-50">
          <span className="text-2xl font-black text-orange-600">
            ${product.price}
          </span>
          <button className="btn btn-primary btn-sm md:btn-md rounded-xl gap-2 shadow-lg shadow-indigo-100">
            <HiEye size={18} />
            <span>Details</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;