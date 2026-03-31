import React, { useState } from 'react';
import { FaCheck } from "react-icons/fa";
import { toast } from 'react-toastify';

const Card = ({ product, cart, setCart }) => {
    const [buy, setBuy] = useState(false)

    const handleBuyBtn = () => {
        setBuy(true);
        const  duplicateData = cart.find(c => c.id === product.id)
            if(duplicateData){
                toast.error("Item already in cart!")
                return
            }
        toast.success("Item added to cart!")
        setCart([...cart, product])
    };


    // Tag Type onujayi dynamic color set korar logic
    
    const getTagStyles = (type) => {
        switch (type) {
            case 'best-seller': return 'bg-amber-100 text-amber-700 border-amber-200';
            case 'popular': return 'bg-indigo-100 text-indigo-700 border-indigo-200';
            case 'new': return 'bg-emerald-100 text-emerald-700 border-emerald-200';
            default: return 'bg-gray-100 text-gray-700 border-gray-200';
        }
    };

    return (
        <div className="card bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 rounded-[32px] overflow-hidden relative">
            <div className="card-body p-8">
                
                
                <div className="flex justify-between items-start mb-6">
                    <div className="text-4xl">{product.icon}</div>
                    <span className={`badge border px-3 py-3 text-xs font-bold rounded-full ${getTagStyles(product.tagType)}`}>
                        {product.tag}
                    </span>
                </div>

                <div className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 leading-tight">{product.name}</h2>
                    <p className="text-gray-500 text-sm mt-2 leading-relaxed h-12 overflow-hidden">
                        {product.description}
                    </p>
                </div>

                {/* 3. Pricing Section */}
                <div className="flex items-baseline gap-1 mb-8">
                    <span className="text-3xl font-extrabold text-gray-900">${product.price}</span>
                    <span className="text-gray-400 text-sm">/{product.period}</span>
                </div>

                {/* 4. Features List (Dynamic) */}
                <ul className="flex flex-col gap-4 mb-10 grow">
                    {product.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3">
                            <FaCheck className="text-emerald-500 mt-1 shrink-0" />
                            <span className="text-gray-600 text-sm font-medium leading-tight">
                                {feature}
                            </span>
                        </li>
                    ))}
                </ul>

                {/* 5. Action Button */}
                <div className="mt-auto">
                    <button onClick={handleBuyBtn}

                     className={`btn ${buy ? 'bg-linear-to-r from-[#f6395c] to-[#9514FA] hover:bg-[#b910e8]' 
                     : 
                     'bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-[#7a25e6]'} text-white border-none rounded-full w-full py-4 h-auto text-lg font-bold transition-transform active:scale-95 shadow-lg shadow-purple-200`}>
                        {buy === true ? "Add to Cart" : "Buy Now"}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Card;