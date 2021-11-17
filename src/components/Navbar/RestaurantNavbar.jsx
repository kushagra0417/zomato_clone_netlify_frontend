import React,{useState} from 'react'
import {FaUserAlt} from "react-icons/fa"
import {HiLocationMarker} from "react-icons/hi"
import {IoMdArrowDropdown} from "react-icons/io"
import {RiSearch2Line} from "react-icons/ri"
import { AiOutlineArrowLeft } from "react-icons/ai";
import { useSelector,useDispatch } from 'react-redux'
import gravatar from "gravatar"

//components
import SignIn from '../Auth/SignIn'
import SignUp from '../Auth/SignUp'


// redux actions
import { signOut } from '../../Redux/Reducer/Auth/Auth.action'


const MobileNav =({SignIn,SignUp}) =>{
  const [isDropDownOpen,setIsDropDownOpen]=useState(false)
  const dispatch=useDispatch();
  const reduxState=useSelector((globalStore)=>globalStore.user.user)
  
  const signOutHandler=()=>dispatch(signOut())
   return (
     <div className="w-full flex items-center justify-between lg:hidden">
       <AiOutlineArrowLeft />
       <div className="w-28">
         <img
           src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
           alt="logo"
           className="w-full h-full"
         />
       </div>

       <div className="flex items-center gap-3 relative">
         <a
           href="https://www.zomato.com/mobile "
           target="_blank"
           rel="noreferrer"
         >
           <button className="bg-zomato-400 text-white py-2 px-3 rounded-full ">
             Use App
           </button>
         </a>
         {reduxState?.user?.fullname ? (
           <>
             <div
               onClick={() => setIsDropDownOpen((prev) => !prev)}
               className="border border-gray-300 text-zomato-400 rounded-full p-2 w-12 h-12"
             >
               <img
                 src={gravatar.url(reduxState?.user?.email)}
                 alt={reduxState?.user?.email}
                 className="w-full h-full rounded-full object-cover"
               />
             </div>

             {isDropDownOpen && (
               <div
                 onClick={() => setIsDropDownOpen((prev) => !prev)}
                 className="absolute z-20 top-14 left-2 flex flex-col w-full  shadow-lg  bg-zomato-400 text-white rounded-md"
               >
                 <button onClick={signOutHandler} className=" hover:text-zomato-400 hover:bg-white w-full  py-1 px-2">
                   Sign Out
                 </button>
               </div>
             )}
           </>
         ) : (
           <>
             <span
               onClick={() => setIsDropDownOpen((prev) => !prev)}
               className="border border-gray-300 text-zomato-400 rounded-full p-2"
             >
               <FaUserAlt />
             </span>

             {isDropDownOpen && (
               <div
                 onClick={() => setIsDropDownOpen((prev) => !prev)}
                 className="absolute z-20 top-11 left-2 flex flex-col w-full  shadow-lg  bg-zomato-400 text-white rounded-md"
               >
                 <button
                   onClick={SignIn}
                   className=" hover:text-zomato-400 hover:bg-white w-full  py-1 px-2"
                 >
                   Sign In
                 </button>
                 <button
                   onClick={SignUp}
                   className="   hover:text-zomato-400 hover:bg-white w-full py-1 px-2 "
                 >
                   Sign Up
                 </button>
               </div>
             )}
           </>
         )}
       </div>
     </div>
   );
}

const LargeNav = ({SignIn,SignUp}) => {
  const [isDropDownOpen,setIsDropDownOpen]=useState(false)
  const dispatch=useDispatch();
  const reduxState=useSelector((globalStore)=>globalStore.user.user)
  const signOutHandler=()=>dispatch(signOut())
  return (
    <>
    <div className=" hidden  lg:inline container px-20 xl:px-48 mx-auto"> 
      <div className="hidden gap-4 lg:flex items-center justify-around w-full ">
        <div className="w-28">
          <img
            src="https://b.zmtcdn.com/web_assets/b40b97e677bc7b2ca77c58c61db266fe1603954218.png"
            alt="logo"
            className="w-full h-full"
          />
        </div>
        <div className=" w-3/4 bg-white shadow-md p-3 border border-gray-200 rounded flex items-center gap-3">
          <div className="flex items-center gap-2 border-r-2 border-gray-300 pr-2">
            <span className="text-zomato-400">
              <HiLocationMarker />
            </span>
            <input type="text" placeholder="Varanasi"  className="focus:outline-none"/>
            <IoMdArrowDropdown />
          </div>
          <div className="flex w-full items-center gap-2">
            <RiSearch2Line />
            <input
              type="search"
              placeholder="Search for Restaurant, Cuisine or a dish"
              className="w-full focus:outline-none"
            />
          </div>
        </div>
        
        {
            reduxState?.user?.fullname ? (
            <div className="relative w-20">
            
            <div
               onClick={() => setIsDropDownOpen((prev) => !prev)}
               className="border border-gray-300 text-zomato-400 rounded-full p-2 w-16 h-16"
             >
               <img src={gravatar.url(reduxState?.user?.email)} alt={reduxState?.user?.email}  className="w-full h-full rounded-full object-cover"/>
             </div>

             {isDropDownOpen && (
               <div
                 onClick={() => setIsDropDownOpen((prev) => !prev)}
                 className="absolute z-20 top-16 -left-1 flex flex-col w-full  shadow-lg  bg-zomato-400 text-white rounded-md my-1"
               >
                 <button onClick={signOutHandler}
                  
                   className=" hover:text-zomato-400 hover:bg-white w-full  py-1 px-2"
                 >
                   Sign Out
                 </button>
                 
               </div>
             )}
            
            </div>):( <div className="ml-28 flex gap-4">
            <button onClick={SignIn} className="text-gray-500 text-xl hover:text-gray-800">
              Login
            </button>
            <button onClick={SignUp} className="text-gray-500 text-xl hover:text-gray-800">
              Signup
            </button>
          </div>)

       }
      </div>
      </div>
    </>
  );
};


const RestaurantNavbar = () => {
  const [openSignin,setOpenSignin]=useState(false);
  const [openSignup,setOpenSignup]=useState(false);
  const openSignInmodal=()=>setOpenSignin(true)
  const openSignUpmodal=()=>setOpenSignup(true)
  return (
    <>
    <SignIn isOpen={openSignin} setIsOpen={setOpenSignin}/>
    <SignUp isOpen={openSignup} setIsOpen={setOpenSignup}/>
      <nav className="p-4 flex w-full items-center  bg-white shadow-md  lg:shadow-none ">
      <MobileNav SignIn={openSignInmodal} SignUp={openSignUpmodal}/>
        <LargeNav  SignIn={openSignInmodal} SignUp={openSignUpmodal}/>
      </nav>
    </>
  );
};

export default RestaurantNavbar
