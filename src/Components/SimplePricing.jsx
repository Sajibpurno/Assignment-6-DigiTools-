import React from 'react';
import { FaCheck } from 'react-icons/fa';

const SimplePricing = () => {
    const data = [
        {
            "id": 1,
            "planName": "Starter",
            "price": 0,
            "description": "Perfect for getting started",
            "features": ["Access to 10 free tools", "Basic templates", "Community support", "1 project per month"],
            "buttonText": "Get Started Free",
            "isPopular": false
        },
        {
            "id": 2,
            "planName": "Pro",
            "price": 29,
            "description": "Best for professionals",
            "features": ["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"],
            "buttonText": "Start Pro Trial",
            "isPopular": true
        },
        {
            "id": 3,
            "planName": "Enterprise",
            "price": 99,
            "description": "For teams and businesses",
            "features": ["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"],
            "buttonText": "Contact Sales",
            "isPopular": false
        }
    ];

    return (
        <div className='container mx-auto px-4 my-30'>
            {/* --- Section Header --- */}
            <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-bold text-[#0F172A]">Simple, Transparent Pricing</h2>
                <p className='text-[#64748B] mt-4 text-lg'>Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            </div>

            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto items-stretch">
                {
                    data.map((plan) => (
                        <div 
                            key={plan.id} 
                            /* Scale bad deya hoyeche, shudhu color logic thakbe */
                            className={`card relative rounded-[40px] p-10 border transition-all duration-300 flex flex-col ${
                                plan.isPopular 
                                ? "bg-[#8B2CFF] text-white border-none shadow-xl" 
                                : "bg-white text-gray-900 border-gray-100 shadow-sm"
                            }`}
                        >
                            {/* 1. Most Popular Badge */}
                            {plan.isPopular && (
                                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-[#FEF9C3] text-[#854D0E] px-4 py-1 rounded-full text-sm font-bold border border-amber-200">
                                    Most Popular
                                </div>
                            )}

                            {/* 2. Plan Info */}
                            <div className="mb-8">
                                <h3 className="text-2xl font-bold">{plan.planName}</h3>
                                <p className={`mt-2 ${plan.isPopular ? "text-purple-100" : "text-gray-500"}`}>
                                    {plan.description}
                                </p>
                            </div>

                            {/* 3. Pricing */}
                            <div className="flex items-baseline mb-8">
                                <span className="text-5xl font-bold">${plan.price}</span>
                                <span className={`ml-2 text-lg ${plan.isPopular ? "text-purple-200" : "text-gray-400"}`}>/Month</span>
                            </div>

                            {/* 4. Features Checklist */}
                            <ul className="space-y-4 mb-10 grow">
    {plan.features.map((feature, index) => (
        <li key={index} className="flex items-start gap-3">
            {/* 1. Icon-e ektu margin-top (mt-1) dile oita text-er center-e chole ashbe */}
            <FaCheck className={`mt-1 shrink-0 ${plan.isPopular ? "text-white" : "text-[#22C55E]"}`} />
            
            {/* 2. Text-er line-height (leading-relaxed) ektu barale gap-ta thik thake */}
            <span className={`leading-tight ${plan.isPopular ? "text-white" : "text-[#475569]"}`}>
                {feature}
            </span>
        </li>
    ))}
</ul>

                            {/* 5. Action Button */}
                            <button className={`btn rounded-full w-full py-4 h-auto text-lg font-bold border-none transition-all active:scale-95 ${
                                plan.isPopular 
                                ? "bg-white text-[#8B2CFF] hover:bg-gray-100" 
                                : "bg-[#8B2CFF] text-white hover:bg-[#7a25e6]"
                            }`}>
                                {plan.buttonText}
                            </button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
};

export default SimplePricing;