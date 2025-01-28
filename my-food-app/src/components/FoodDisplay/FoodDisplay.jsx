import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";

import "./FoodDisplay.css"


const FoodDisplay = ({category}) => {

    // Gets foodlist from contextValue within StoreContextProvider module using the StoreContext API
    const {food_list} = useContext(StoreContext)

    return (
        <div className="food-display" id="food-display"> 
            <h2>Top Dishes Near You</h2>
            <div className="food-display-list">
                {food_list?.map((item, index)=> {
                    // We are getting the item.___ values from the json values found in food_list (in assets.js file)
                    return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image}></FoodItem>
                })}
            </div>
        </div>
    )
}

export default FoodDisplay