import React, { useState } from "react";
import "./Home.css"
import Header from "../../components/header/Header";
import ExploreMenu from "../../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../../components/FoodDisplay/FoodDisplay";


const Home = () => {

    const [category, setCategory] = useState("All");

    return (
        <div>
            <Header></Header>

            {/* Sending the category through ExploreMenu's arguments list */}
            <ExploreMenu category= {category} setCategory = {setCategory}></ExploreMenu>
            <FoodDisplay category={category}></FoodDisplay>
        </div>

    )

}

export default Home