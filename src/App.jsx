import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Mid from './Components/Mid'
import Navbar from './Components/Navbar'
import SimplePricing from './Components/SimplePricing'
import ThreeStep from './Components/ThreeStep'
import ProductCard from './Components/Card/ProductCard'
import { useState } from 'react'
import Footer from './Components/Footer'
import { MutatingDots } from 'react-loader-spinner'

function App() {
  const DigitalData = fetch('/Data.json').then(res => res.json())
  const [product, setProduct] = useState('product')
  const [cart, setCart] = useState([])
  return (
    <>
    <header>
      <Navbar cart={cart} setCart={setCart} product={product} setProduct={setProduct}
></Navbar>
      <Banner></Banner>
    </header>
    
    <main>
      <Mid></Mid>

      <Suspense fallback={
        <div className="flex justify-center items-center min-h-[50vh] w-full">
  <MutatingDots
    visible={true}
    height="100"
    width="100"
    color="#4F39F6" 
    secondaryColor="#9514FA" 
    radius="12.5"
    ariaLabel="mutating-dots-loading"
    wrapperStyle={{}}
    wrapperClass=""
  />
</div>
      }>
      <ProductCard DigitalData={DigitalData} product={product} setProduct={setProduct} cart={cart} setCart={setCart}
></ProductCard>
      </Suspense>

      <ThreeStep></ThreeStep>
      <SimplePricing></SimplePricing>
    </main>

    <footer>
      <Footer></Footer>
    </footer>
    </>
  )
}



export default App
