

import React from 'react'
import { useLoaderData } from 'react-router-dom'
import MackbooApi from './Sidebarcontent/MackbooApi';

function Mackbook() {
  const data =useLoaderData();
  console.log(data)

  console.log(data)
  return (
    <div className='grid grid-cols-3 gap-4 p-2'>

      {
        data.map((item,key)=> <MackbooApi data={item} key={key}/>)
        
      }



    </div>
  )
}

export default Mackbook