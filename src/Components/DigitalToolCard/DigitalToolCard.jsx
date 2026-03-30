import React from 'react';
import { IoMdCheckmark } from "react-icons/io";
import { useState } from 'react';
const DigitalToolCard = ({digitalTool}) => {
    const [isBuy,setBuy]=useState(false);
    return (
       <div>
                           <div className='shadow-lg rounded-lg border border-zinc-200 overflow-hidden p-5'>
                               <div className='text-end'>
                                   <button className=''>{digitalTool.tag}</button>
                               </div>
                               
                               <img src={digitalTool.icon} className='max-h-full max-w-full object-contain' alt="" />
                               <h1 className='text-2xl font-bold mt-4 mb-3'>{digitalTool.name}</h1>
                               <p className='text-gray-500 mb-3'>{digitalTool.description}</p>
                               <div className='flex mb-3 items-center'>
                                  <p className='font-bold text-2xl'>${digitalTool.price}</p>
                                  <p className='text-gray-500'>/{digitalTool.period}</p> 
                               </div>
                               <div className='mb-2'>
                                   {
                                       digitalTool.features.map((feature,index)=>(
                                           <div key={index} className='flex items-center gap-2 mb-2'>
                                              <IoMdCheckmark className='text-green-600' />
                                              <p className='text-gray-600'>{feature}</p> 
                                           </div>
                                       ))
                                   }
                               </div>
                              
                               <button onClick={()=>setBuy(true)} className='btn-primary  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-3 text-white w-full'>{isBuy ? "Proceed to checkout": " Buy Now"}</button>
                           </div>
                           </div>
    );
};

export default DigitalToolCard;