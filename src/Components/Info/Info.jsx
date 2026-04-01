import React from 'react';


const Info = () => {
    
    return (
        <div>
        <div className='lg:flex md:flex-row bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white justify-evenly p-6  mt-40'>
           <div className='mr-10 text-center pl-5 '>
            <h1 className='text-5xl font-bold'>50K+</h1>
            <p>Active Users</p>
            </div> 
            <div className="divider divider-horizontal text-white before:bg-white after:bg-white"></div>
           <div className='mr-10 text-center'>
            <h1 className='text-5xl font-bold'>200+</h1>
            <p>Premium Tools</p>
            </div> 
             <div className="divider divider-horizontal text-white before:bg-white after:bg-white"></div>
           <div className='mr-10 text-center pl-5'>
            <h1 className='text-5xl font-bold'>4.9</h1>
            <p>Rating</p>
            </div> 
        </div>
        <div className='justify-center text-center mt-40'>
            <h1 className='text-5xl font-bold mb-3'>Premium Digital Tools</h1>
            <p className='text-gray-500 mb-8'>Premium Digital Tools
Choose from our curated collection of premium digital products designed <br></br>
to boost your productivity and creativity.</p>
        </div>
</div>
    );
};

export default Info;