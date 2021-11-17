import React from "react";
import {BsShieldLockFill} from "react-icons/bs"
import { useSelector } from "react-redux";
// import Razorpay from "razorpay"


//components
import FoodItem from "../components/Cart/FoodItem";
import AddressList from "../components/Checkout/AddressList";

// //redux action
// import { createOrder } from "../Redux/Reducer/Order/Order.action";

const Checkout = () => {

  const reduxStateCart=useSelector((global)=> global.cart.cart);
  const reduxStateUser=useSelector((global)=> global.user.user.user);



  const address = [
    {
      name: "Home",
      address: "India",
    },
    {
      name: "Gyn",
      address: "India",
    },
    {
      name: "Office",
      address: "India",
    },
  ];

  const payNow = () => {
    let options = {
      key: "rzp_test_r0EyaDxwM3eSUu",
      amount:
        reduxStateCart.reduce((acc, curVal) => acc + curVal.totalPrice, 0) *
        100,
      currency: "INR",
      name: "zomato Clone",
      description: "Food Payment",
      image:
        "https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png",

      handler: () => {
        alert("Payment Done");
      },
      prefill: {
        name: reduxStateUser.fullname,
        email: reduxStateUser.email,
      },
      theme: { color: "#e23744" },
    };

    let razorPay = new window.Razorpay(options);
    razorPay.open();
  };

  return (
    <div className="flex flex-col gap-3 my-3 items-center">
      <h1 className="text-xl md:text-2xl font-bold  text-center">Checkout</h1>
      <div className="w-full md:w-3/5 bg-white rounded-lg shadow-lg py-3 flex flex-col items-center">
        <h3 className="text-lg fonr-semibold">Summary</h3>
        <div className="w-full flex flex-col items-center gap-2">
          <h5 className="text-base tracking-wider">ORDER FROM</h5>
          <div className="w-full flex flex-col items-center text-gray-400">
            <h4>Domino's Pizza</h4>
            <small>Sigra, Varanasi</small>
          </div>
          <div className="my-4 w-full md:w-3/5 flex flex-col gap-2 px-4 ">
          {reduxStateCart.map((food) => (
                    <FoodItem
                   {...food}
                      key={food._id}
                    
                    />
                  ))}
          </div>
          <div className="w-full md:w-3/5 flex flex-col gap-3 ">
            <h4 className="text-xl font-semibold text-center  ">
              Select Address for Delivery
            </h4>
            <AddressList address={address} />
          </div>
        </div>
        <button onClick={payNow} className="flex items-center justify-center gap-2 my-4 md:my-8  w-full px-4 md:w-4/5 h-14 text-white font-medium text-lg bg-zomato-400 rounded-lg ">
          Pay Securely <BsShieldLockFill/>
        </button>
      </div>
    </div>
  );
};

export default Checkout;
