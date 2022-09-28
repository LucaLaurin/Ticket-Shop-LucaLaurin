import {useContext} from "react";
import {CartContext} from "./CartContext";
import {Link} from 'react-router-dom';
import {TopCart, TopText, ImgCart, CartButton } from './styles'; 
import Button from 'react-bootstrap/Button';
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

import { db } from '../Others/firebaseConfig';


export const Cart = () => {

    const { cartList, clear, removeItem, calcItemsTotal } = useContext(CartContext);

    const createOrder = async () => {
      const itemsForDb = cartList.map(item => ({
        id: item.id,
        title: item.title,
        price: item.price,
        quantity: item.quantity,
      }));
      const order ={
        buyer:{
          name: "Leo Messi",
          email: "leomessi@mail.com",
          phone: "123-456-1234",
        },
        date: serverTimestamp(),
        items: itemsForDb,
        total: calcItemsTotal()
      };

      const newOrderRef = doc(collection(db, "Orders"))
      await setDoc(newOrderRef, order);

      alert(`El id de tu orden de compra es: ${newOrderRef.id}`)
      clear();

      itemsForDb.map(async (item) => {
        const itemRef = doc(db, "Productos", item.id);
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
                  cartList.map(item=><div key={item.id} >
                    <ImgCart src={item.image} alt={item.image}/>
                    <div>
                      <h2>{item.name}</h2>
                      <p>Precio: {item.cost}</p>
                      <p>Cantidad: {item.quantity}</p>
                      <p>Precio unidad: $ {item.cost.toFixed(2)}</p>
                      <p>Precio total: $ {(item.cost*item.quantity).toFixed(2)}</p>
                    </div>
                        <CartButton onClick={() => removeItem(item.id)}> Eliminar </CartButton>
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
            </div> : <><p>No hay productos en el carrito</p></>
          }
        </TopCart>
        </div>
    )
};

export default Cart; 
  