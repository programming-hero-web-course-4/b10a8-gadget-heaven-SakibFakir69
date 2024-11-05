

import React, { createContext, useState } from 'react'


export const MyContext = createContext();

function Contextapi({children}) {

    const [ cart  , setcart ] = useState([]);
    console.log(cart, "contecxgt");


    

  return (
    <div>
        <MyContext.Provider value={{cart, setcart}}>
            {children}
        </MyContext.Provider>


    </div>
  )
}

export default Contextapi