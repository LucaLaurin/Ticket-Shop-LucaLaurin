import { useContext } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

import {TopCart, TopText, ImgCart, CartButton } from './styles'; 
import {CartContext} from "./CartContext";
import { db } from '../Others/firebaseConfig';


export const Cart = () => {
  const { cartList, clear, removeItem, calcItemsTotal } = useContext(CartContext);

    const createOrder = async () => {
      const itemsForDb = cartList.map(item => ({
        id: item.id,
        title: item.title,
        price: item.cost,
        quantity: item.quantity,
      }));
      const order ={
        buyer:{
          name: "Leo Messi",
          email: "leomessi@mail.com",
          phone: "1234561234",
        },
        date: serverTimestamp(),
        items: itemsForDb,
        total: calcItemsTotal()
      };

      const newOrderRef = doc(collection(db, "orders"))
      await setDoc(newOrderRef, order);

      clear();

      itemsForDb.map(async (item) => {
        const itemRef = doc(db, "products", item.id);
        await updateDoc (itemRef, {
          stock: increment(-item.quantity)
        });
      })
    };
  
    return (
      <div>
        <TopText>Carrito de compras</TopText>
        <Link to="/"> <Button variant="warning">Seguir comprando</Button></Link>
        <TopCart>
          {
            cartList.length > 0 ? <div>
              <div>
                {
                  cartList.map(cart=><div key={cart.id} >
                    <ImgCart src={cart.img} alt={cart.img}/>
                    <div>
                      <h2>{cart.title}</h2>
                      <p>Precio: {cart.cost}</p>
                      <p>Cantidad: {cart.quantity}</p>
                      <p>Precio unidad: $ {cart.cost.toFixed(2)}</p>
                      <p>Precio total: $ {(cart.cost*cart.quantity).toFixed(2)}</p>
                    </div>
                    <CartButton onClick={() => removeItem(cart.id)}> Eliminar </CartButton>
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
                  <button  onClick={createOrder}> <span>Finalizar compra</span> </button>
                </CartButton>
                <CartButton onClick={clear}>
                  <span>Vaciar carrito</span>
                </CartButton>
              </div>
            </div> : <>No hay productos en el carrito</>
          }
        </TopCart>
      </div>
    )
};


  