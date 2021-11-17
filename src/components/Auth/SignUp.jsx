import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react'
import {FcGoogle} from "react-icons/fc"
import {IoIosClose} from "react-icons/io"
import { useDispatch } from 'react-redux'


//Redux action
import { signUp } from '../../Redux/Reducer/Auth/Auth.action'

export default function SignUp({isOpen, setIsOpen}) {

  const [userData,setUserData]=useState({
    email:"",
    password:"",
    fullname:"",
  })

  const dispatch=useDispatch();

  const handleChange=(e)=>{
    setUserData((prev)=>({ ...prev ,[e.target.id]:e.target.value}))
  }

  

  function closeModal() {
    setIsOpen(false)
  }

  const submit=()=> {
    
    dispatch(signUp(userData))
     setUserData({
      email:"",
      password:"",
      fullname:"",
     })
  }

  const googlesignup= ()=>(window.location.href="https://zomato-clone-backend-kushagra.herokuapp.com/auth/google")


  return (
    <>
      

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  <div className="flex justify-between ">
                    <div className="text-2xl font-bold ">Sign Up</div>
                   <div className="text-2xl  font-bold cursor-pointer" onClick={closeModal}><IoIosClose/> </div>
                  </div>
                </Dialog.Title>
                <div className="mt-2 w-full flex flex-col gap-3">
                  <button onClick={googlesignup} className="py-2 justify-center rounded-lg flex items-center gap-2 w-full border border-gray-400 bg-white text-gray-700 hover:bg-gray-100">
                      Sign up with Google <FcGoogle/>
                  </button>
                  <form className="flex flex-col gap-3">
                  <div className=" w-full flex flex-col gap-2 ">
                      <label htmlFor="fullname">Name</label>
                      <input
                        type="text"
                        id="fullname"
                        onChange={handleChange}
                        value={userData.fullname}
                        placeholder="Enter the Name"
                        className="w-full border border-gray-400 focus:outline-none focus:border-zomato-400 px-3 py-2 rounded-lg"
                      />
                    </div>
                  <div className=" w-full flex flex-col gap-2 ">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        onChange={handleChange}
                        value={userData.email}
                        placeholder="email@email.com"
                        className="w-full border border-gray-400 focus:outline-none focus:border-zomato-400 px-3 py-2 rounded-lg"
                      />
                    </div>
                    <div className=" w-full flex flex-col gap-2 ">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        onChange={handleChange}
                        value={userData.password}
                        placeholder="Enter the Password"
                        className="w-full border border-gray-400 focus:outline-none focus:border-zomato-400 px-3 py-2 rounded-lg"
                      />
                    </div>
                    <div onClick={()=>{submit(); closeModal()}} className="w-full text-center bg-zomato-400 text-white py-2 rounded-lg">
                      Sign up
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  )
}
