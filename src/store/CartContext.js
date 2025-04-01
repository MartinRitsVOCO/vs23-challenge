import { createContext, useContext, useReducer } from "react";

const CartContext = createContext();
export const useCartContext = () => useContext(CartContext);

const initialState = {
    items: [],
    modalVisible: false,
    modalContent: null,
}

const cartReducer = (state, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            const itemExists = state.items.find((item) => item.id === action.payload.id);

            if (itemExists) {
                const updatedItems = state.items.map((item) =>
                    item.id === action.payload.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
                return { ...state, items: updatedItems };
            } else {
                const newItem = { ...action.payload, quantity: 1 };
                return { ...state, items: [...state.items, newItem] };
            }
        case "MODAL_OPEN":
            return { ...state, modalVisible: true };
        case "MODAL_CLOSE":
            return { ...state, modalVisible: false };
        case "MODAL_SET_CONTENT":
            return { ...state, modalContent: action.payload };
        case "CLEAR_CART":
            return { ...state, items: [] };
        default:
            console.log("Invalid action type for Cart");
            return state;
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