import React, { use } from 'react';
import Card from './Card';
import CartCard from '../Cart/CartCard';

const ProductCard = ({DigitalData, cart, setCart,setProduct, product}) => {
    const data = use(DigitalData)
    
    //const [product, setProduct] = useState('product')
    
    // const [cart, setCart] = useState([])
    return (
        <div className='mt-30'>
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className=' font-bold text-5xl mb-4'>Premium Digital Tools</h1>

                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                
            </div>
            
            <div className="sticky top-0 z-50 py-4 bg-white/80 backdrop-blur-md">
                <div className="flex justify-center bg-white px-2 py-1.5 shadow-md rounded-full max-w-fit mx-auto border border-zinc-100">
           {/* daynamic kore cls ke than condition diye bg cng kora hoise */}
                <button onClick={() => setProduct('product')}

                className={`btn font-semibold text-lg bg-white border-none ${product === 'product' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA]  text-white" : ""} rounded-full px-12 py-7`}>Products</button>

                <button onClick={() => setProduct('cart')} 

                className={`btn font-semibold text-lg bg-white border-none ${product === 'cart' ? "bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white" : ""}
                    rounded-full px-12 py-7`} 
                >Cart ({cart.length})
                </button>
                </div>
            </div>
                
            
            <div className={`${product === 'product' ?'grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6' : ''} container mx-auto mt-10`}>
                {
                    product === 'product' ?
                   data.map(product => <Card key={product.id} product={product} cart={cart} setCart={setCart}></Card>)
                   :
                   <CartCard cart={cart} setCart={setCart}></CartCard>
                }
            </div>
        </div>
    );
};

export default ProductCard;