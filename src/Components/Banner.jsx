import React from 'react';
import HeroImg from '../assets/banner.png'
import { CiPlay1 } from 'react-icons/ci';
// import { LuPlayCircle } from "react-icons/lu";

const Banner = () => {
    return (
        /* Container and Centering */
        <div className="container mx-auto px-6 py-20 min-h-screen flex items-center justify-center">
            
            {/* Grid for Left Content and Right Image */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-15 items-center">
                
                {/* --- Left Content --- */}
                <div className="flex flex-col space-y-8 max-w-xl">
                    
                    {/* 1. Badge with Glow Icon */}
                    <div className="flex items-center gap-2.5 bg-purple-100 border border-purple-200 text-purple-800 rounded-full px-4 py-2 text-sm font-medium self-start shadow-inner shadow-purple-200/50">
                        <div className="w-2.5 h-2.5 bg-purple-600 rounded-full ring-4 ring-purple-200 animate-pulse"></div>
                        <span>New: AI-Powered Tools Available</span>
                    </div>

                    <h1 className="text-5xl md:text-6xl font-bold leading-tight text-gray-900 tracking-tight">
                        Supercharge Your Digital Workflow
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed font-light">
                        Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
                        Explore Products
                    </p>

                    
                    <div className="flex flex-wrap gap-4 pt-4">
                        
                        <button className="btn btn-primary bg-purple-600 border-none rounded-full px-8 text-white font-bold text-base shadow-lg shadow-purple-500/30 hover:bg-purple-700 transition-all duration-300">
                            Explore Products
                        </button>
                        
                        {/* Secondary 'Watch Demo' Button */}
                        <button className="btn btn-outline border-purple-300 text-purple-700 hover:bg-purple-100 hover:border-purple-300 rounded-full px-8 font-bold text-base flex items-center gap-2">
                            <CiPlay1></CiPlay1>
                            <span>Watch Demo</span>
                        </button>
                    </div>
                </div>

                
                <div className="">
                    <img src={HeroImg} alt="" />
                </div>

            </div>
        </div>
    );
};

export default Banner;