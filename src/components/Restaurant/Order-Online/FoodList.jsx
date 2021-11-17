import React from "react";


// components
import FoodItem from "./FoodItem";


const FoodList = (props) => {
 
  return (
    <>
      <div className="flex flex-col gap-2">
        <h2 className="bg-white md:sticky md:top-0 w-full md:px-3 py-1 z-10 text-3xl font-semibold">
          {props.name}
        </h2>
        <div className="flex flex-col gap-3  ">
        {props.items.map((item) => (
          <FoodItem _id={item} key={item} />
        ))}
        </div>
      </div>
    </>
  );
};

export default FoodList;
