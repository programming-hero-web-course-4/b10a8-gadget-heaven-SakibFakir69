

import React from 'react'
import { useLoaderData } from 'react-router-dom'
import UncomApi from '../Dashboardpage/dash2/UncomApi';
import { Helmet } from 'react-helmet';

function Uncoming() {

    const data = useLoaderData();
  return (
    <div className='border-2 grid grid-cols-2'>
      <Helmet>
        <title>Uncoming</title>
      </Helmet>
        {
            data.map((item , key)=>(
              <UncomApi data={item} key={key}/>
            ))
        }


    </div>
  )
}

export default Uncoming