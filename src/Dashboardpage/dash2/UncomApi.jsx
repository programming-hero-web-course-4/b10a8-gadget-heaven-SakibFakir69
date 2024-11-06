

import React from 'react'

function UncomApi({data}) {

    const {product_image , product_title , price} = data;
  return (
    <div className='border-2 mt-4 ml-4 p-4 shadow-md rounded-md'>
        <img src={product_image} alt="" />
        <p>{product_title}</p>
        <p>Price : {price}$</p>
        <button className='border-2 border-green-600 px-4 py-1 rounded-full text-xl'>Uncoming</button>


    </div>
  )
}

export default UncomApi