import React, {createContext, useState } from 'react'
export const context=createContext()
const ContextProvider=(props)=>{
    const [page,setPage]=useState('model3')
    console.log(page)
    return(

        <context.Provider value={{page,setPage}}>
        {props.children}
    </context.Provider>
        )
}

export default ContextProvider
