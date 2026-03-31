import { Suspense } from 'react'
import './App.css'
import Banner from './Components/Banner/Banner'
import DigitalTools from './Components/DigitalTools/DigitalTools'
import Info from './Components/Info/Info'
import NavBar from './Components/Navbar/NavBar'
import Cart from './Components/Cart/Cart'
import { useState } from 'react'


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
  <input type="radio" name="my_tabs_1" className="tab btn-primary w-40  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-3 text-white" aria-label="Products" defaultChecked onClick={()=>setActiveTab('digitalTool')} />
  <input type="radio" name="my_tabs_1" className="tab btn-primary w-40 rounded-4xl p-3" aria-label="Cart" onClick={()=>setActiveTab('cart')}/>
</div>
     
      {activeTab==='digitalTool' &&<DigitalTools digitalToolsPromise={digitalToolsPromise} carts={carts} setCarts={setCarts}></DigitalTools>}
     
     {activeTab==='cart' && <Cart carts={carts} setCarts={setCarts}>Cart</Cart>}
   
    </>
  )
}

export default App
