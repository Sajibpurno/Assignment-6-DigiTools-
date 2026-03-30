import React, { use, useState } from 'react';
import Card from './Card';
import CartCard from '../Cart/CartCard';

const ProductCard = ({DigitalData}) => {
    const data = use(DigitalData)
    
    const [product, setProduct] = useState('product')
    
    return (
        <div className='mt-30'>
            <div className="flex flex-col items-center justify-center text-center">
                <h1 className=' font-bold text-4xl mb-4'>Premium Digital Tools</h1>
                <p className='text-[#627382]'>Choose from our curated collection of premium digital products designed <br /> to boost your productivity and creativity.</p>
                
            
                
            </div>
            <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 container mx-auto mt-10">
                {
                    product === 'product' ?
                   data.map(product => <Card key={product.id} product={product}></Card>)
                   :
                   <CartCard></CartCard>
                }
            </div>
        </div>
    );
};

export default ProductCard;