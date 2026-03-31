import React from 'react';

const Cart = ({carts}) => {
    
    const totalPrice = carts.reduce((sum,item)=>sum+item.price,0)
    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-bold mb-5'>Your cart</h2>
          {
        carts.map(item=><div className='mb-10' key={item.id}>
            <div className='flex justify-between'>
            <div className='flex gap-4'>

<div>
    <img src={item.icon} alt="" />
</div>
<div>
    <h2 className='font-bold text-xl'>{item.name}</h2>
    <p className='text-gray-600 text-sm'>${item.price}</p>
</div>

            </div>

<div className=''>
    <button>Remove</button>
</div>
</div>
        </div>)
        }
        <div className='flex font-bold p-5 mt-5 rounded-lg text-2xl justify-between'>
            <div>Total</div>
            <div>${totalPrice}</div>
        </div>
        </div>
    );
};

export default Cart;