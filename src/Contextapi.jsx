

import React, { createContext, useState } from 'react'


export const MyContext = createContext();

function Contextapi({children}) {

    const [ cart  , setcart ] = useState([]);
    console.log(cart, "contecxgt");

    const [ wlist, setwlist ] = useState([]);
    console.log(wlist);

    const [ counter , setcounter ] = useState(0);
    const [ counter2 , setcounter2 ] = useState(0);




  return (
    <div>
        <MyContext.Provider value={{cart, setcart , wlist , setwlist , counter , setcounter , counter2, setcounter2}}>
            {children}
        </MyContext.Provider>


    </div>
  )
}

export default Contextapi