

import React, { useContext } from 'react'
import { MyContext } from '../Contextapi'

import Wlistapi from './dash2/Wlistapi'
function Wishlist() {

  const {wlist} = useContext(MyContext);

  
  return (
    <div>
  
      {
        wlist.map((item,key)=> <Wlistapi data={item} key={key}/>)
      }
       

    </div>
  )
}

export default Wishlist