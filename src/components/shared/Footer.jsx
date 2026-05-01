import { HiOutlineSun } from "react-icons/hi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-base-200 border-t border-orange-100 pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 group">
              <div className="bg-linear-to-tr from-yellow-400 to-orange-500 p-2 rounded-xl text-white shadow-md">
                <HiOutlineSun size={24} />
              </div>
              <span className="font-extrabold text-2xl tracking-tighter">
                SUN<span className="text-orange-500">CART</span>
              </span>
            </div>
            <p className="text-base-content/60 leading-relaxed">
              Bringing you the finest summer essentials and beachwear to make your sunny days unforgettable. Shop the heat, stay cool.
            </p>
            <div className="flex gap-4">
              <FaFacebook className="text-orange-500 hover:text-orange-600 cursor-pointer" size={20} />
              <FaTwitter className="text-orange-500 hover:text-orange-600 cursor-pointer" size={20} />
              <FaInstagram className="text-orange-500 hover:text-orange-600 cursor-pointer" size={20} />
              <FaYoutube className="text-orange-500 hover:text-orange-600 cursor-pointer" size={20} />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-orange-600">Shopping</h3>
            <ul className="space-y-3 text-base-content/70">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Summer Collection</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Best Sellers</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Beach Accessories</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Discount Store</li>
            </ul>
          </div>

          {/* Customer Service */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-orange-600">Support</h3>
            <ul className="space-y-3 text-base-content/70">
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Track Your Order</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Shipping & Returns</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">Privacy Policy</li>
              <li className="hover:text-orange-500 transition-colors cursor-pointer">FAQs</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="font-bold text-lg mb-6 uppercase tracking-wider text-orange-600">Stay in the Loop</h3>
            <p className="text-sm text-base-content/60 mb-4">Subscribe to get special offers and once-in-a-lifetime deals.</p>
            <div className="flex flex-col gap-2">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="input input-bordered w-full bg-orange-50/50 border-orange-200 focus:outline-orange-400" 
              />
              <button className="btn bg-orange-500 border-none text-white font-bold hover:bg-orange-600 shadow-lg shadow-orange-100">
                Subscribe
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-base-300 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-base-content/50">
          <p>© 2026 SunCart eCommerce. All rights reserved.</p>
          <div className="flex gap-6">
            <span className="hover:text-orange-500 cursor-pointer">Terms of Service</span>
            <span className="hover:text-orange-500 cursor-pointer">Cookie Policy</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;