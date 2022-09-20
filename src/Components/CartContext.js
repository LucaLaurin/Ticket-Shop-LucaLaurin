import { useState, createContext } from 'react';

export const CartContext = createContext();

const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([]);

    const addItem = (product, qty) => {
        setCartList([...cartList, product])
    }

    return (
        <CartContext.Provider value={{cartList, addItem}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider;