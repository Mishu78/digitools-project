import React, { use } from 'react';
import { IoMdCheckmark } from "react-icons/io";
const DigitalTools = ({digitalToolsPromise}) => {
    const digitalTools= use(digitalToolsPromise);
    console.log(digitalTools);
    return (
        
        <div className='mt-40 container justify-items-center mx-auto'>
            <div className='text-center mb-10'>
                <h2 className='text-4xl font-bold mb-3'>Premium Digital Tools</h2>
            <p className='text-gray-500 mb-3'>Premium Digital ToolsChoose from our curated collection of premium digital products designed<br></br> to boost your productivity and creativity.</p>

            <button className='btn-primary  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-3 text-white'>Products</button>
            <button className='btn-primary rounded-4xl p-3 '>Cart</button>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-10'>
                {
                   digitalTools.map(digitalTool => <div>
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
                       
                        <button className='btn-primary  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-3 text-white w-full'>Buy Now</button>
                    </div>
                    </div>) 
                }
                
            </div>
        </div>
    );
};

export default DigitalTools;