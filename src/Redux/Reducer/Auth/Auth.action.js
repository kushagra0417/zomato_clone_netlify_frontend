import axios from "axios"





// Redux types
import { SIGN_IN,SIGN_UP,GOOGLE_AUTH ,SIGN_OUT} from "./Auth.type"


// redux action
import { getMyslef,clearUser } from "../User/user.action"




export const signIn=(userData)=> async(dispatch)=>{
    try {
        const User=await axios({
            method:"POST",
            url:`http://localhost:5000/auth/signin`,
            data:{credentials:userData},
        })
        localStorage.setItem("zomatoUser",JSON.stringify({token:User.data.token}))
        
        window.location.href=document.location.href
        getMyslef();
        return dispatch({type:SIGN_IN,payload:User.data})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}

export const googleAuth=(token)=> async(dispatch)=>{
    try {
        
        localStorage.setItem("zomatoUser",JSON.stringify({token}))
        getMyslef();
        window.location.href="http://localhost:3000/delivery"
        return dispatch({type:GOOGLE_AUTH,payload:{}})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}

export const signUp=(userData)=> async(dispatch)=>{
    try {
        const User=await axios({
            method:"POST",
            url:`http://localhost:5000/auth/signup`,
            data:{credentials:userData},
            
        })
        localStorage.setItem("zomatoUser",JSON.stringify({token:User.data.token}))
        getMyslef();
        window.location.href=document.location.href
        return dispatch({type:SIGN_UP,payload:User.data})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}


export const signOut=()=> async(dispatch)=>{
    try {
        
        localStorage.removeItem("zomatoUser")
       clearUser();
     window.location.href="http://localhost:3000/delivery"
        return dispatch({type:SIGN_OUT,payload:{}})
    } catch (error) {
        return dispatch({type:"ERROR",payload:error})
    }
}



