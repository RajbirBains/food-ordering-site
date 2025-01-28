import React from "react";
import { createContext } from "react";
import { food_list } from "../assets/assets";

/*
Context provides a way to pass data through the component tree without having to pass props down manually at every level.

Named export (the one we are using in this file) vs default export (the one we have been using in previous jsx files in component folders)
    - Named exports allow you to export multiple values from a module and give each of them a specific name. You can import these values by using their respective names when importing in another module.
    - Default export is used to export a single value as the default value for a module. This value can be a variable, function, class, or any other JavaScript entity. When importing a default export, you can assign it any name you want in the importing module.

This StoreContext will act as an API of sorts in order to send values to other components
*/
export const StoreContext = createContext(null)


const StoreContextProvider = (props) => {

    // If we add any element in this object, we can access that element in any component using the StoreContext context
    const contextValue = {
        // We can now access food_list anywhere
        food_list 
    }

    return (
        <StoreContext.Provider value={contextValue}> 
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider