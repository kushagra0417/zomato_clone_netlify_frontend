import React, {useState,useEffect} from "react";
import { useDispatch } from "react-redux";
import ReactStars from "react-rating-stars-component";
import { AiOutlinePlus } from "react-icons/ai";



//redux action
import { getFood } from "../../../Redux/Reducer/Food/Food.action";
import {getImage} from "../../../Redux/Reducer/Image/Image.action"
import { addCart } from "../../../Redux/Reducer/Cart/Cart.action";

const FoodItem = (props) => {

  const [food,setFood]=useState({});
  

 const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(getFood(props?._id)).then((data)=>{
      setFood(data.payload.foods)
      dispatch(getImage(data.payload.foods.photos)).then((data)=>{
        const {images}=data.payload.image;
        images.length && setFood((prev)=>({...prev,image:images[0].location}))
      })
    })
    
  },[dispatch,props._id])

  //  useEffect(() => {
  //   if (reduxState.length != 0) {
  //     setFood((prev) => ({ ...prev, isAddedToCart: true }));
  //   }
  // }, [reduxState]);

  const addFoodToCart =()=>{
    dispatch(addCart({...food,quantity:1,totalPrice:food.price}))
    setFood((prev)=>({...prev,isAddedToCart:true}))
  }

  return (
    <>
      {food?.name && (
        <div className="flex items-start  gap-2">
          {food?.image && (
            <div className="w-3/12 h-20 md:h-28 xl:h-36 md:px-3">
              <img
                src={food?.image}
                alt="food"
                className="w-full h-full rounded-lg"
              />
            </div>
          )}
          <div className="w-3/4 md:w-7/12 flex flex-col md:gap-1">
            <div className="flex items-center justify-between">
              <h3 className="text-lg md:text-xl font-semibold">{food?.name}</h3>
              <button onClick={addFoodToCart} disabled={food.isAddedToCart} className="text-zomato-400 bg-zomato-50 border border-zomato-400 px-2 py-1 rounded-lg flex items-center gap-2 md:hidden ">
              {food.isAddedToCart ? "Added":<> <AiOutlinePlus /> Add</>}
              </button>
            </div>
            <ReactStars count={5} value={food?.rating || 3} />
            <h5>₹{food?.price}</h5>
            <p className="truncate">{food?.descript}</p>
          </div>
          <div className="w-2/12 hidden md:block">
            <button onClick={addFoodToCart} disabled={food.isAddedToCart} className=" text-zomato-400 bg-zomato-50 border border-zomato-400 px-4 py-2 rounded-lg flex items-center gap-2">
              
              {food.isAddedToCart ? "Added":<> <AiOutlinePlus /> Add</>}
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FoodItem;
