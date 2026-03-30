import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Info from './Components/Info/Info'
import NavBar from './Components/Navbar/NavBar'


const getDigitalTools = async() =>{
const res= await fetch('/data.json')
return res.json();
}
const digitalToolsPromise = getDigitalTools();
function App() {
 
  return (
    <>
    <NavBar></NavBar>
     <Banner></Banner>
     <Info></Info>
     <Suspense fallback={<h2><span class="loading loading-spinner text-error"></span></h2>}>
      <DigitalTools digitalToolsPromise={digitalToolsPromise}></DigitalTools>
     </Suspense>
     
    </>
  )
}

export default App
