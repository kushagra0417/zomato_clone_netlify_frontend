import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'



//components
import DeliveryCarousal from './DeliveryCarousal'
import Brand from './Brand'
import RestaurantCard from '../RestaurantCard'


const Delivery = () => {


  const [restaurantList, setRestaurantList] = useState([ ]);

  const reduxState=useSelector((globalStore)=>globalStore.restaurant.restaurants)

  useEffect(()=>{
   reduxState.restaurants && setRestaurantList(reduxState.restaurants)
  },[reduxState.restaurants])
  
    return (
      <>
        <DeliveryCarousal />
        <Brand />
        <div className="flex justify-start flex-wrap mb-20 lg:mb-0">
        {
          restaurantList.map((restaurant)=>(
            <RestaurantCard {...restaurant} key={restaurant._id}/>
          ))
        }
       
        </div>
      </>
    );
}

export default Delivery
