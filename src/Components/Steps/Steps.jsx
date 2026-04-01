import React from 'react';

const Steps = () => {
    return (
        <div className='container justify-center mx-auto items-center bg-gray-200 mt-30 pt-20 mb-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold mb-3'>Get Started in 3 Steps</h2>
                <p className='text-gray-500 mb-8'>Get Started in 3 Steps Start using premium digital tools in minutes, not hours.</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-20'>

                <div className="card bg-base-100  shadow-sm">
                    
                        <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 text-white self-end mr-10 mt-10 items-center text-center justify-center'>01</button>
                    
  <figure className=" bg-purple-200 rounded-full w-30 h-30 self-center text-white items-center text-center justify-center">
    <img
      src="/src/assets/user.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center mb-20">
    <h2 className="card-title text-2xl font-bold">Create Account</h2>
    <p className='text-gray-500 text-sm'>Sign up for free in seconds.No credit card <br /> required to get started.</p>
  </div>
</div>

<div className="card bg-base-100  shadow-sm">
    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 text-white self-end mr-10 mt-10 items-center text-center justify-center'>02</button>
  <figure className=" bg-purple-200 rounded-full w-30 h-30 self-center text-white items-center text-center justify-center">
    <img
      src="/src/assets/package.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center mb-20">
    <h2 className="card-title text-2xl font-bold">Choose Products</h2>
    <p className='text-gray-500 text-sm'>Browse our catalog and select the tools <br /> that fit your needs.</p>
  </div>
</div>

<div className="card bg-base-100 shadow-sm ">
    <button className='bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full w-10 h-10 text-white self-end mr-10 mt-10 items-center text-center justify-center'>03</button>
  <figure className=" bg-purple-200 rounded-full w-30 h-30 self-center text-white items-center text-center justify-center">
    <img
      src="/src/assets/rocket.png"
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-center text-center mb-20">
    <h2 className="card-title text-2xl font-bold">Start creating.</h2>
    <p className='text-gray-500 text-sm'>Download and start creating your premium <br /> tools immediately.</p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Steps;