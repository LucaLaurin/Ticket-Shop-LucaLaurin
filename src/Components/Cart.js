import {useContext} from "react";
import {CartContext} from "./CartContext";
 

const Cart = () =>  {
    const {cartList} = useContext(CartContext);

    return (
        <>
        <h1> Carrito de compras</h1>
        {
            cartList.map(item => <li>{item}</li> )
        }
            
        </>
    );
}

export default Cart;