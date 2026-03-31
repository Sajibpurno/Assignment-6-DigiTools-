import React from 'react';
import Fb from '../assets/facebook.png'
import Ins from '../assets/Instagram.png'
import Twi from '../assets/Twitter.png'

const Footer = () => {
    return (
        <footer className="bg-[#101727] pt-30 pb-20">

      <div className="max-w-7xl mx-auto px-6 ">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-11 text-center md:text-left">
          {/* Logo & Description */}
          <div className="">
            <div className="">
              <h2 className="md:text-4xl text-2xl font-bold text-white mb-5 ">
                DigiTools
              </h2>
            </div>

            <p className="text-zinc-400 text-lg max-w-md">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools..
            </p>
          </div>

          
          <div className="">
            <h3 className="text-white font-semibold mb-6 text-lg">Product</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Features
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Templates
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Integrations
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <h3 className="text-white font-semibold mb-6 text-lg">Resources</h3>
            <ul className="space-y-4 text-zinc-400">
              <li>
                <a href="#" className="hover:text-white transition">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="">
            <p className='text-white text-xl font-semibold'>Social Links</p>
            <span className='flex gap-3 mt-4 '>
                <img src={Ins} alt="" />
                <img src={Fb} alt="" />
                <img src={Twi} alt="" />
            </span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-zinc-500">
          <div>© 2026 Digitools. All rights reserved.</div>

          <div className="flex gap-6">
            <p href="#" className=" ">
              Privacy Policy
            </p>
            <p href="#" className=" ">
              Terms of Service
            </p>
            <p href="#" className=" ">
              Cookies
            </p>
          </div>
        </div>
      </div>
    </footer>
    );
};

export default Footer;