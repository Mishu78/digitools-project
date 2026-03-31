import { TbCurrentLocation } from "react-icons/tb";
import React from 'react';

const Banner = () => {
    return (
        <div className="flex gap-5 container justify-center mx-auto items-center">
            <div>
            <button className='mb-4 flex items-center gap-2 bg-[#dae4ee] rounded-4xl p-4 '><TbCurrentLocation className="rounded-full text-white bg-linear-to-r from-[#4F39F6] to-[#9514FA]"/><h2 className=' bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text'>New: AI-Powered Tools Available</h2></button>

            <h1 className="gap-3 mb-5 text-5xl font-bold">Supercharge Your <br></br> <span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Digital Workflow</span></h1>
            <p className="text-gray-500">Access premium AI tools, design assets, templates, and productivity <br></br> software—all in one place. Start creating faster today. <br></br> Explore Products
Watch Demo</p>
<div className="flex gap-4 mt-5">

<button className='btn-primary  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-4 text-white'>Explore Products</button>
<button className=' rounded-4xl p-4 bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-transparent bg-clip-text border-2 border-purple-600 flex items-center gap-2 '><img src="/src/assets/Play.png" alt="" /> Watch demo</button>

</div>

            </div>
            <div>
                <img className='shadow-2xl w-125 h-147.5' src="/src/assets/banner.png" alt="" />
            </div>
        </div>
    );
};

export default Banner;