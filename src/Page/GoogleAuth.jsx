import React,{useEffect} from 'react';
import { useParams,useHistory } from 'react-router';
import { useDispatch } from 'react-redux';


//redux action
import { googleAuth } from '../Redux/Reducer/Auth/Auth.action'; 

const GoogleAuth = () => {

    const{token}=useParams()

    const dispatch=useDispatch();
    const history=useHistory();

    useEffect(()=>{
     if(token){
         dispatch(googleAuth(token)).then(()=>history.push("/delivery"))
     }
    },[token,dispatch,history])

    return (
        <>
         
         <h1 className=" text-xl flex flex-col justify-center items-center  md:text-3xl text-zomato-400 py-8">Loading,Please Wait....</h1>
         
        </>
    )
}

export default GoogleAuth
