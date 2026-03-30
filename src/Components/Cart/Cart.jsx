import React from 'react';

const Cart = ({carts}) => {
    return (
        <div>
            <h2>My carts</h2>
          {
        carts.map(item=><div key={item.id}>
<div>
    <img src={item.icon} alt="" />
</div>
<div>
    <h2>{item.name}</h2>
</div>
        </div>)
        }
        </div>
    );
};

export default Cart;