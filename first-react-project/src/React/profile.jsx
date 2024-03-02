import React from 'react';

export const ImageUrl=({imageUrl})=>{
    return(
        <div className='img'>
            <img src={imageUrl} alt="" />
        </div>    
    )
}
