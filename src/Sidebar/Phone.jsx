


import React from 'react'
import { useLoaderData } from 'react-router-dom'
import PhoneAPi from './Sidebarcontent/PhoneAPi';

function Phone() {
  const data = useLoaderData();
  return (
    <div className='grid grid-cols-3 gap-4 p-2'>
       {
        data.map((item,key)=> <PhoneAPi data={item} key={key}/>)
       }


    </div>
  )
}

export default Phone