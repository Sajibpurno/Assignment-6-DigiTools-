import React from 'react';

const Mid = () => {
    return (
        <div className="w-full mb-10 bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            {/* Main Background Box */}
            <div className="  p-10 md:p-16 text-white grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-0 items-center text-center container mx-auto">
                
                {/* 1st Stat */}
                <div className="flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-5xl font-bold">50K+</h2>
                    <p className="text-purple-100 text-lg opacity-80">Active Users</p>
                </div>

                {/* Vertical Divider (Only for Desktop) */}
                <div className="hidden md:block absolute left-1/3 top-1/4 bottom-1/4 w-[1px] bg-white/20"></div>

                {/* 2nd Stat */}
                <div className="flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-5xl font-bold">4.9</h2>
                    <p className="text-purple-100 text-lg opacity-80">Rating</p>
                </div>

                {/* Vertical Divider (Only for Desktop) */}
                <div className="hidden md:block absolute left-2/3 top-1/4 bottom-1/4 w-[1px] bg-white/20"></div>

                {/* 3rd Stat */}
                <div className="flex flex-col items-center justify-center space-y-2">
                    <h2 className="text-5xl font-bold">200+</h2>
                    <p className="text-purple-100 text-lg opacity-80">Premium Tools</p>
                </div>

            </div>
        </div>
    );
};

export default Mid;