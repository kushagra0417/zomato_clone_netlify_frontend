import axios from "axios"



// Redux types


import { GET_USER,GET_SPECIFIC_USER,CLEAR_USER } from "./user.type";


export const getUser=(_id)=> async(dispatch)=>{
    try {
        const User=await axios({
            method:"GET",
            url:`http://localhost:5000/user/${_id}`,
    
        })
    
        return dispatch({type:GET_SPECIFIC_USER,payload:User.data})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}

export const getMyslef=()=> async(dispatch)=>{
    try {
        const User=await axios({
            method:"GET",
            url:`http://localhost:5000/user/`,
    
        })
    
        return dispatch({type:GET_USER,payload:User.data})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}

export const clearUser=()=> async(dispatch)=>{
    try {
        
    
        return dispatch({type:CLEAR_USER,payload:{}})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}




