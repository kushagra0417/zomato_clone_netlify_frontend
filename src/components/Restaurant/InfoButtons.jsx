import React from 'react'
import classnames from "classnames"


const InfoButtons = (props) => {
    return (
        <>
            <button className={classnames("flex items-center gap-3  border border-gray-400 px-4 py-2 rounded-lg font-light" ,
            {
                "text-white bg-zomato-400 border-zomato-400 font-normal":props.isActive,
            })}>
           {props.children}
        </button>
        </>
    )
}

export default InfoButtons
