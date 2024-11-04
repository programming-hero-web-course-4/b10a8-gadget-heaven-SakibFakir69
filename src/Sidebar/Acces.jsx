


import React from 'react'
import { useLoaderData } from 'react-router-dom'
import Acessapi from './Sidebarcontent/Acessapi';
function Acces() {
  const data = useLoaderData();
  console.log(data ,"aces")

  return (
    <div className='grid grid-cols-3 gap-4 p-2'>
      {
        data.map((item,key)=> <Acessapi data={item} key={key}/>)
      }
     
    </div>
  )
}

export default Acces