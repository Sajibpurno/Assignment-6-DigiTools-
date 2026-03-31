import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = ({cart, setProduct}) => {
  return (
    <div className="navbar container  mx-auto sticky top-0 z-50 bg-white/80 ">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h2 className='md:text-4xl text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA] p-2'>
  DigiTools
</h2>
        </div>
      </div>
      
      <div className="lg:navbar-center md:mr-12 hidden lg:flex">
        <ul className="menu menu-horizontal lg:gap-5  text-lg">
          <li>
            <a>Products</a>
          </li>
          <li>
            <a>Features</a>
          </li>
          <li>
            <a>Pricing</a>
          </li>
          <li>
            <a>Testimonials</a>
          </li>
          <li>
            <a>FAQ</a>
          </li>
        </ul>
      </div>

      <div className="navbar-end gap-5">
        <div className="relative">
          {
            cart.length > 0 ?
            <div className=" absolute bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-4 h-4 flex justify-center items-center -top-2 -right-2 transform -translate-x-1/2 text-white">
                                <p >{cart.length}</p>
                            </div> : " "
                            }
        <button onClick={() => setProduct('cart')}><CiShoppingCart size={28} /></button>
        </div>
        <h3 className="flex items-center gap-2 text-lg font-semibold">Login</h3>
        <a className="btn hidden md:inline-flex border-none text-white rounded-full px-8 py-3 bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-all font-semibold shadow-lg shadow-purple-500/20">
  Get Started
</a>
      </div>
    </div>
  );
};

export default Navbar;