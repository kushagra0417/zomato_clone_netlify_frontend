import React,{useEffect} from 'react'
import { useHistory,useParams } from 'react-router'

const Redirect = () => {
 const history =useHistory()
 const {id}=useParams();
 useEffect(()=>{
    history.push(`/restaurant/${id}/overview`)
 },[]);
    return (
        <div>
            
        </div>
    )
}

export default Redirect
