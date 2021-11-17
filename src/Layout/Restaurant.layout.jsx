import React ,{ useState,useEffect }from "react";
import { useParams } from "react-router-dom";
import {useDispatch} from "react-redux"
import {TiStarOutline} from "react-icons/ti"
import { RiDirectionLine, RiShareForwardLine } from "react-icons/ri";
import { BiBookmarkPlus } from "react-icons/bi";

//components
import RestaurantNavbar from "../components/Navbar/RestaurantNavbar";
import ImageGrid from "../components/Restaurant/ImageGrid";
import InfoButtons from "../components/Restaurant/InfoButtons";
import Restaurantinfo from "../components/Restaurant/Restaurantinfo";
import TabContainer from "../components/Restaurant/Tabs";
import CartContainer from "../components/Cart/CartContainer";

// Redux actions
import {getSpecificRestaurant} from "../Redux/Reducer/restaurant/restaurant.action"
import {getImage} from "../Redux/Reducer/Image/Image.action"
import { getCart } from "../Redux/Reducer/Cart/Cart.action";



const RestaurantLayout = (props) => {
  const [restaurant,setRestaurant]=useState({images:[],name:"",cuisines:"",address:""});


  const {id}=useParams();
  const dispatch=useDispatch()



useEffect(() => {
  dispatch(getSpecificRestaurant(id)).then((data) => {
    setRestaurant((prev) => ({ ...prev, ...data.payload.restaurant }));
    dispatch(getImage(data.payload.restaurant.photos)).then((data)=>setRestaurant((prev)=>({...prev,...data.payload.image})))
  });
  dispatch(getCart());
}, [id,dispatch]);




  return (
    <>
      <RestaurantNavbar />
      <div className="container mx-auto px-4 lg:px-20 xl:px-48 pb-16">
        <ImageGrid
          images={restaurant.images}
        />
        <Restaurantinfo name={restaurant?.name} restaurantRating={restaurant?.rating || "3.2"} deliveryRating={restaurant?.rating || "3.2"} cuisine={restaurant?.cuisines} address={restaurant?.address}/>
      <div className="my-4 flex flex-wrap gap-3"> 
        <InfoButtons isActive>
          <TiStarOutline/> Add Review
        </InfoButtons>
        <InfoButtons >
        <div className="text-zomato-400"> <RiDirectionLine/> </div> Direction
        </InfoButtons>
        <InfoButtons >
        <div className="text-zomato-400"> <BiBookmarkPlus/></div> Bookmark
        </InfoButtons>
        <InfoButtons >
          <div className="text-zomato-400"><RiShareForwardLine/></div> Share
        </InfoButtons>
      </div>
    
       <div className="my-10">
         <TabContainer>
         
         </TabContainer>
         </div>
        <div className="relative">
        {props.children}
          </div> 
        
      </div>
       <CartContainer/> 
    </>
  );
};

export default RestaurantLayout;
