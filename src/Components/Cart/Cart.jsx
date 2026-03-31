import React from 'react';
import { toast } from 'react-toastify';

const Cart = ({carts,setCarts}) => {
    
    const totalPrice = carts.reduce((sum,item)=>sum+item.price,0);
    const handlePayment=()=>{
        setCarts([]);
        toast.success("Payment Successfull!");
    }
    const handleRemove = (item)=>{
         const filteredArray=carts.filter(cart=>cart.id !== item.id)
         setCarts(filteredArray);
         toast.success("Item Removed Successfully!");
    }
    return (
        <div className='container mx-auto'>
            <h2 className='text-2xl font-bold mb-5'>Your cart</h2>

            {
                carts.length===0 ? <p className='text-5xl text-gray-500 font-bold mt-40 text-center mb-40  justify-items-center self-center'><img className="w-9" src="/src/assets/products/shopping-cart.png" alt="" /> Cart is empty</p> : 
                <>
                 <div>
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
    <button onClick={()=>handleRemove(item)} className='text-red-500'>Remove</button>
</div>
</div>
        </div>)
        }
        <div className='flex font-bold p-5 mt-5 rounded-lg text-2xl justify-between'>
            <div>Total</div>
            <div>${totalPrice}</div>
        </div>
        <div className='mb-10'>
            <button onClick={handlePayment} className='btn-primary  bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-4xl p-3 text-white w-full'>Proceed To Checkout</button>
        </div>
            </div>
      
                
                </>
            }
           

        </div>
    );
};

export default Cart;