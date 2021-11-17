import React,{useEffect} from 'react'
import { useDispatch } from 'react-redux'

//components
import Navbar from "../components/Navbar/CheckoutNavbar"

// redux action
import { getCart } from "../Redux/Reducer/Cart/Cart.action";

const CheckoutLayout = (props) => {

    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
    return (
        <>
           <Navbar/> 
           <div className="container mx-auto px-4 lg:px-20 xl:px-48">
              {props.children}
           </div>
        </>
    )
}

export default CheckoutLayout
