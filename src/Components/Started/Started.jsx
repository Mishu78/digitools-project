import React from 'react';

const Started = () => {
    return (
        <div className='container justify-center mx-auto items-center mt-30 pt-20 mb-20'>
            <div className='text-center'>
                <h2 className='text-5xl font-bold mb-3'>Simple,Transparent Pricing</h2>
                <p className='text-gray-500 mb-8'>Choose the plan that fits your need.Upgrade and downgrade anytime</p>
            </div>

            <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-5 p-20'>

                <div className="card bg-gray-100 shadow-sm ">
  <div className="card-body">
    <div className="pb-3">
      <h2 className="text-3xl font-bold mb-4">Starter</h2>
      <p className='mb-5 text-gray-600'>Perfect for getting started</p>
      <span className="text-xl"><span className='font-bold text-4xl'>$0</span>/month</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs text-gray-600">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to 10 free tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Basic templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Community support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>1 project per month</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block rounded-4xl">Get Started Free</button>
    </div>
  </div>
</div>

<div className="card bg-base-100 shadow-sm bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white ">
  <div className="card-body">
    <span className="badge badge-lg badge-warning rounded-4xl font-bold text-red-500 bg-amber-200 self-center absolute -top-3">Most Popular</span>
    <div className="pb-3">
      <h2 className="text-3xl font-bold mb-2">Pro</h2>
      <p className='mb-5'>Best for professionals</p>
      <span className="text-xl"><span className='font-bold text-4xl'>$29</span>/Month</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Access to all premium tools</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited templates</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Priority support</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Unlimited projects</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="">Cloud sync</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="">Advanced analytics</span>
      </li>
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary bg-white text-purple-600 font-bold btn-block rounded-4xl">Start Pro Trial</button>
    </div>
  </div>
</div>

<div className="card bg-gray-100 shadow-sm">
  <div className="card-body">
    <div className="pb-3">
      <h2 className="text-3xl font-bold mb-2">Enterprise</h2>
      <p className='mb-5 text-gray-600'>For teams and businesses</p>
      <span className="text-xl"><span className='font-bold text-4xl'>$99</span>/Month</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs text-gray-500">
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Everything in Pro</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Team collaboration</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Custom integrations</span>
      </li>
      <li>
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span>Dedicated support</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="text-gray-700">SLA guarantee</span>
      </li>
      <li className="opacity-50">
        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-green-400" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
        <span className="text-gray-700">Custom branding</span>
      </li>
    </ul>
    <div className="mt-6">
       <button className="btn btn-primary btn-block rounded-4xl">Contact Sales</button>
    </div>
  </div>
</div>
            </div>
        </div>
    );
};

export default Started;