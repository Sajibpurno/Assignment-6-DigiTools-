import React from 'react';

const CartCard = ({cart,setCart}) => {
    console.log(cart);

    // cart er calculation
    // const total = cart.reduce((total, item) => total + item.price, 0)

    const handleRemoveBtn = (item) => {
        const filterIt = cart.filter(c => c.id !== item.id)
        setCart(filterIt)
    }
    
    return (
        <div className="w-full">
            {/* Ekhane Map hobe: Pura list-ta ekhane render hobe */}

            {cart.map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white border border-zinc-200 rounded-2xl shadow-sm mb-4">
                    <div className="flex items-center gap-4">
                        <div className="w-20 h-20 object-contain bg-zinc-100 rounded-lg p-2 text-5xl ">
                            {item.icon} 
                        </div>
                        <div>
                            <h3 className=" text-xl font-semibold">{item.name}</h3>
                            <p className="text-[#627382] font-semibold text-2xl">${item.price}</p>
                        </div>
                    </div>
                    
                    {/* Remove Button Logic */}
                    <button onClick={()=> handleRemoveBtn(item)}
                        className="btn btn-ghost text-red-500 font-bold"
                    >
                        Remove
                    </button>
                </div>
            ))}

            {/* Total Price Section */}
            {cart.length > 0 ? (
                <div className="">
                <div className="flex justify-between  p-6 mt-5 rounded-2xl text-2xl font-bold">
                    <div className='text-[#627382] text-2xl'>Total:</div>
                    <div className='text-2xl'>${total}</div>
                </div>
                <button onClick="" className=' w-full btn bg-linear-to-r from-[#4F39F6] to-[#9514FA] hover:bg-[#7a25e6] mt-5 text-white text-2xl rounded-full py-10'>Proceed to Checkout</button>
                </div>

            ) : (
                <div className="text-center py-10 text-zinc-500 text-xl font-medium border-2 border-dashed rounded-2xl">
                    Your cart is empty! 🛒
                </div>
            )}
            
        </div>
    );
};

export default CartCard;