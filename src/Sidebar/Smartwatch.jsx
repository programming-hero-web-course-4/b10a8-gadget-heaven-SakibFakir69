


import React from 'react'
import { useLoaderData } from 'react-router-dom'
import SmartApi from './Sidebarcontent/SmartApi';

function Smartwatch() {
  const data =useLoaderData();
  return (
    <div className='grid grid-cols-3 gap-4 p-2'>
      {
        data.map((item,key)=> <SmartApi data={item} key={key}/>)

      }


    </div>
  )
}

export default Smartwatch