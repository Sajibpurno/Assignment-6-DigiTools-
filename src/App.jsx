import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner'
import Mid from './Components/Mid'
import Navbar from './Components/Navbar'
import SimplePricing from './Components/SimplePricing'
import ThreeStep from './Components/ThreeStep'
import ProductCard from './Components/Card/ProductCard'

function App() {
  const DigitalData = fetch('/Data.json').then(res => res.json())

  return (
    <>
    <header>
      <Navbar></Navbar>
      <Banner></Banner>
    </header>
    <main>
      <Mid></Mid>

      <Suspense fallback={<div>Loading...</div>}>
      <ProductCard DigitalData={DigitalData}></ProductCard>
      </Suspense>

      <ThreeStep></ThreeStep>
      <SimplePricing></SimplePricing>
    </main>
    <footer></footer>
    </>
  )
}

export default App
