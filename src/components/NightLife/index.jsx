import React,{useState,useEffect} from 'react'
import { useSelector } from 'react-redux'



// components
import NightLifeCarousal from './NightLifeCarousal'
import RestaurantCard from '../RestaurantCard'

const NightLife = () => {
    const [restaurantList, setRestaurantList] = useState([ ]);

  const reduxState=useSelector((globalStore)=>globalStore.restaurant.restaurants)

  useEffect(()=>{
   reduxState.restaurants && setRestaurantList(reduxState.restaurants)
  },[reduxState.restaurants])
    return (
        <div>

            <NightLifeCarousal/>
            <h1 className="text-xl md:text-3xl my-4 md:my-8 md:font-semibold lg:px-4">NightLife Restaurants in Varanasi</h1>
            <div className="flex justify-start flex-wrap mb-20 lg:mb-0">
        {
          restaurantList.map((restaurant)=>(
            <RestaurantCard {...restaurant} key={restaurant._id}/>
          ))
        }
       
        </div>
        </div>
    )
}

export default NightLife
