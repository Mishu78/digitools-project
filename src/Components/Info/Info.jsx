import React from 'react';

const Info = () => {
    return (
        <div className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white flex justify-center p-6 mb-5'>
           <div className='mr-10 text-center '>
            <h1 className='text-5xl font-bold'>50K+</h1>
            <p>Active Users</p>
            </div> 
           <div className='mr-10 text-center'>
            <h1 className='text-5xl font-bold'>200+</h1>
            <p>Premium Tools</p>
            </div> 
           <div className='mr-10 text-center'>
            <h1 className='text-5xl font-bold'>4.9</h1>
            <p>Rating</p>
            </div> 
        </div>
    );
};

export default Info;