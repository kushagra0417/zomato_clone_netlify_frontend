import React from 'react'



const NutritionCard=({image,title})=>{
      return (
        <>
          <div className=" bg-white shadow rounded-md w-24 h-full md:w-56 px-3  md:px-4 ">
           <div className="w-full h-12 md:h-36">
            <img src={image} alt="food" className="w-full h-full object-cover rounded-t-md" />   
            </div> 
             <div >
                 <h3 className="text-sm my-1 font-light text-center text-black md:text-lg ">{title}</h3>
             </div>

          </div>  
        </>
    )
}



const NutritionCarousalCard = (props) => {
    return (
            <>
            <NutritionCard {...props}/>
            
            </>
    )
}

export default NutritionCarousalCard
