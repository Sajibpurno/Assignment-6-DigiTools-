import React from 'react';
import UserImg from '../assets/user.png';
import BoxImg from '../assets/package.png'; 
import RocketImg from '../assets/rocket.png';

const ThreeStep = () => {
    // JSON data for the cards
    const stepsData = [
        {
            id: 1,
            title: "Create Account",
            description: "Sign up for free in seconds. No credit card required to get started.",
            img: UserImg
        },
        {
            id: 2,
            title: "Choose Products",
            description: "Browse our catalog and select the tools that fit your needs.",
            img: BoxImg
        },
        {
            id: 3,
            title: "Start Creating",
            description: "Download and start using your premium tools immediately.",
            img: RocketImg
        }
    ];

    return (
        <div className='container mx-auto mt-30' >
            <div className="text-center mb-12">
                <h2 className="text-5xl font-bold">Get Started In 3 Steps</h2>
                <p className='text-[#627382] mt-4'>Start using premium digital tools in minutes, not hours.</p>
            </div>
            
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
                {
                    stepsData.map((step) => (
                        <div key={step.id} className="card bg-base-100 shadow-sm border border-gray-100 px-6 py-[88px] relative">
                            
                            <div className=" bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-8 h-8 flex justify-center items-center absolute top-2 -right-1 transform -translate-x-1/2">
                                <p >{step.id}</p>
                            </div>
                            <figure className=" pt-10">
                                <img
                                    src={step.img}
                                    alt={step.title}
                                    className="rounded-full bg-purple-50 p-4 object-contain" />
                            </figure>
                            
                            {/* Card Body with Center Text */}
                            <div className="card-body items-center text-center">
                                <h2 className="card-title text-2xl font-semibold">{step.title}</h2>
                                <p className="text-gray-500 max-w-[250px]">{step.description}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default ThreeStep;