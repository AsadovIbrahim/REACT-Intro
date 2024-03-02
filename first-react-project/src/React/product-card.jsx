import React from 'react';

const ProductCard=({name,price,description})=>{
    return(
        <div className='product-card'>
            <p>Product Name:{name}</p>
            <p>Price:{price}</p>
            <p>Description:{description}</p>
        </div>
    )
}

export default ProductCard;