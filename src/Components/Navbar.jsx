import React from 'react';
import { CiShoppingCart } from "react-icons/ci";

const Navbar = () => {
  return (
    <div className="navbar container  mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h2 className='text-3xl font-bold text-transparent bg-clip-text bg-linear-to-r from-[#4F39F6] to-[#9514FA]'>
  DigiTools
</h2>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal lg:gap-5 px-1 text-lg">
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
        <h3 className="flex items-center gap-2 text-lg"><CiShoppingCart size={28} />Login</h3>
        <a className="btn border-none text-white rounded-full px-8 py-3 bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-all font-semibold shadow-lg shadow-purple-500/20">
  Get Started
</a>
      </div>
    </div>
  );
};

export default Navbar;