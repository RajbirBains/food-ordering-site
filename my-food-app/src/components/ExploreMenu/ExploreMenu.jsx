import React from "react";
import "./ExploreMenu.css"
import {menu_list} from "../../assets/assets"


// The category and setCategory are being passed in the from useState found in Home.jsx
const ExploreMenu = ({category, setCategory}) => {
    return (
        <div className="explore-menu" id="explore-menu">
            <h1>Explore Our Menu</h1>
            <p className="explore-menu-text">Choose from our diverse Menu</p>
            <div className="explore-menu-list">
                {menu_list.map((item,index) => {
                    return (
                        // the onclick compares the previous state of the category then checks if it is the same as the current item's menu_name
                        // If it is then we set the category state to All, otherwise we set the category state to the current item's menu_name
                        <div onClick={() => setCategory(prev => prev===item.menu_name?"All":item.menu_name)} key={index} className="explore-menu-list-item">
                            {/* 
                            Using the state from the onclick above, if the user clicks on a certain menu item, we do a new check
                            The image will have a dynamic classname which will check whether the classname is a menu item or not
                            If it is, then we will set the img to "active" and will perform css based on that specific active menu item
                            */}
                            <img className={category === item.menu_name?"active":""} src={item.menu_image} alt="Menu Item"></img>
                            <p>{item.menu_name}</p>
                        </div>
                    )
                })}
            </div>
            <hr></hr>
        </div>

    )
}

export default ExploreMenu