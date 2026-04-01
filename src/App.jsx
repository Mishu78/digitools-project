import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Info from './Components/Info/Info'
import NavBar from './Components/Navbar/NavBar'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'
import Steps from './Components/Steps/Steps'
import Started from './Components/Started/Started'


const getDigitalTools = async() =>{
const res= await fetch('/data.json')
return res.json();
}
const digitalToolsPromise = getDigitalTools();

function App() {
 const [activeTab,setActiveTab]=useState('digitalTool');
 const [carts,setCarts]=useState([]);
  return (
    <>
       <NavBar></NavBar>
     <Banner></Banner>
     <Info></Info>
     <div className="tabs tabs-box justify-center">
  <input type="radio" name="my_tabs_1" className={`tab btn-primary w-40 ${activeTab ==='digitalTool' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white': 'bg-transparent'}  rounded-4xl p-3}`} aria-label="Products" defaultChecked onClick={()=>setActiveTab('digitalTool')} />
  <input type="radio" name="my_tabs_1" className={`tab btn-primary w-40 ${activeTab ==='cart' ? 'bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white': 'bg-transparent'}  rounded-4xl p-3 }`} aria-label={`Cart (${carts.length})`} onClick={()=>setActiveTab('cart')}/>
</div>
     
      {activeTab==='digitalTool' &&<DigitalTools digitalToolsPromise={digitalToolsPromise} carts={carts} setCarts={setCarts}></DigitalTools>}
     
     {activeTab==='cart' && <Cart carts={carts} setCarts={setCarts}>Cart</Cart>}
   <Steps></Steps>
   <Started></Started>
    </>
  )
}

export default App
