import React from 'react'

const NutritionHeroCarousalCard = (props) => {
    return (
        <div className="w-full px-1 h-32 md:h-56 lg:h-72 md:px-2 ">
            <img src={props.image} alt="medicine" 
            className="w-full h-full "/>
        </div>
    )
}

export default NutritionHeroCarousalCard
