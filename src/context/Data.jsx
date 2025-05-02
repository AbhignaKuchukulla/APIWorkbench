import React,{createContext,useState} from 'react';

export const datacontext=createContext(null);




const Data=({children})=>{

    const [formData,setFormData]=useState({url:'',type: 'POST'})


    return (
        <datacontext.Provider value={{
            formData,setFormData

        }}>
            {children}

        </datacontext.Provider>
    )
}

export default Data;