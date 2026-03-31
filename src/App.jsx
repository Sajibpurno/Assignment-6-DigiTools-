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

      <Suspense fallback={<div>Loading...</div>}>
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
