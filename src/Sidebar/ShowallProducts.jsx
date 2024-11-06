

import React from 'react'
import { Link, useLoaderData } from 'react-router-dom';
import Showall from './Sidebarcontent/Showall';

function ShowallProducts() {

    const allData = useLoaderData();

    console.log(allData)


    return (
    <div className='grid grid-cols-3 gap-4 p-8 '>

        

      {
        allData.map((item,key)=> <Showall data={item} key={key}/>)
      }

       



    </div>

  )
}

export default ShowallProducts