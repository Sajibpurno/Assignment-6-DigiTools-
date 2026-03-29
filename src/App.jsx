import './App.css'
import Banner from './Components/Banner'
import Mid from './Components/Mid'
import Navbar from './Components/Navbar'
import SimplePricing from './Components/SimplePricing'
import ThreeStep from './Components/ThreeStep'

function App() {

  return (
    <>
    <header>
      <Navbar></Navbar>
      <Banner></Banner>
    </header>
    <main>
      <Mid></Mid>
      <ThreeStep></ThreeStep>
      <SimplePricing></SimplePricing>
    </main>
    <footer></footer>
    </>
  )
}

export default App
