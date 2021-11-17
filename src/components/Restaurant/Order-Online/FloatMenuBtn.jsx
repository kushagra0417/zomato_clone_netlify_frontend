import React ,{useState} from 'react'
import { HiMenu } from 'react-icons/hi'
import {MdClose} from "react-icons/md"

//components
import MenuListContainer from './MenuListContainer';




const FloatMenuBtn = (props) => {

    const [isClicked,setIsClicked]=useState(false);

    const toggleMenu=()=> setIsClicked((prev) => !prev)

    return (
        <>

          <div className="fixed bottom-16 right-2 z-30 w-8/12 flex flex-col items-end gap-3 md:hidden"> 
          {
              isClicked && (<div className=" p-3 bg-white h-48 overflow-y-scroll shadow-md">
              {
              props.menu.map((item)=>(
                <MenuListContainer {...item} key={item._id} onClickHandler={props.onClickHandler} selected={props.selected}/>
              ))
            }
             </div>
               )
          }

          <button className=" text-white bg-black px-3 py-2 rounded-full   flex  items-center gap-3  md:hidden" onClick={toggleMenu}>
              {isClicked ? <MdClose/> : <HiMenu/>} Menu
          </button>  
          </div>
          
        </>
    )
}

export default FloatMenuBtn
