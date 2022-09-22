import {useContext} from "react";
import {CartContext} from "./CartContext";
import {Link} from 'react-router-dom';
import {TopCart, TopText, ImgCart, CartButton } from './styles'; 
import Button from 'react-bootstrap/Button';

 

export const Cart = () => {

    const { cartList, clear, removeItem, calcItemsTotal } = useContext(CartContext);
  
    return (
        <div>
        <TopText>Carrito de compras</TopText>
        <Link to="/"> <Button variant="warning">Seguir comprando</Button></Link>
        <TopCart>
          {
            cartList.length > 0 ? <div>
              <div>
                {
                  cartList.map(Item=><div key={Item.id} >
                    <ImgCart src={Item.image} alt={Item.image}/>
                    <div>
                      <h2>{Item.name}</h2>
                      <p>Precio: {Item.cost}</p>
                      <p>Cantidad: {Item.quantity}</p>
                      <p>Precio unidad: $ {Item.cost.toFixed(2)}</p>
                      <p>Precio total: $ {(Item.cost*Item.quantity).toFixed(2)}</p>
                    </div>
                        <CartButton onClick={() => removeItem(Item.id)}> Eliminar </CartButton>
                    </div>)
                }
              </div>
              {cartList.length > 0 &&
                <div>
                  <h2>Total: $ {calcItemsTotal()}</h2>
                </div>
              }
              <div>
                <CartButton>
                  <span>Finalizar compra</span>
                </CartButton>
                <CartButton onClick={clear}>
                  <span>Vaciar carrito</span>
                </CartButton>
              </div>
            </div> : <><p>No hay productos en el carrito</p></>
          }
        </TopCart>
        </div>
    )
};

export default Cart; 
  