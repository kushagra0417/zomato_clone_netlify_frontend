import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
// Components
import Navbar from "../components/Navbar";
import FoodTab from "../components/FoodTab";

// redux action
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const HomeLayout = (props) => {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  return (
    <>
      <Navbar />
      <FoodTab />
      <div className="container mx-auto px-4 lg:px-20 xl:px-48">{props.children}</div>
      
    </>
  );
};

export default HomeLayout;
