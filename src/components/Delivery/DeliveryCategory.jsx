import React from 'react'



const DeliverySmCard=({image,title})=>{
      return (
        <>
          <div className=" bg-white shadow rounded-md w-24  md:w-56 lg:hidden">
           <div className="w-full h-24">
            <img src={image} alt="food" className="w-full h-full object-cover rounded-t-md" />   
            </div> 
             <div >
                 <h3 className="text-sm my-1 font-light text-center text-black">{title}</h3>
             </div>

          </div>  
        </>
    )
}

const DeliveryLgCard=({image,title})=>{
    
    return (
        <>
          <div className=" hidden    lg:block w-64 h-56  px-9">
           <div className="w-full h-48">
            <img src={image} alt="food" className="w-full h-full object-cover rounded-md shadow-lg" />   
            </div> 
             <div >
                 <h3 className="text-xl my-1 font-medium text-black ">{title}</h3>
                 
             </div>

          </div>  
        </>
    )
}


const DeliveryCategory = (props) => {
    return (
            <>
            <DeliverySmCard {...props}/>
            <DeliveryLgCard {...props}/>
            </>
    )
}

export default DeliveryCategory
