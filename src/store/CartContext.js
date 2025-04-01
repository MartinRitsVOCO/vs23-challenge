import { createContext, useContext, useState, useReducer } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const initialState = {
    items: [],
    totalAmount: 0
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            console.log("item added", action.payload);
            state.items.push(action.payload);
            break;
        default:
            console.log("default");
            break;
    }
}

export const CartContextProvider = ({ children }) => {
    const [cart, dispatch] = useReducer(cartReducer, initialState);

    return (
        <CartContext.Provider value={{cart, dispatch}}>
            {children}
        </CartContext.Provider>
    )
}