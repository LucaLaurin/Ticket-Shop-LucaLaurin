import { useContext } from "react";
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import { IoTrash, IoCart } from "react-icons/io5";
import { collection, doc, increment, serverTimestamp, setDoc, updateDoc } from 'firebase/firestore';

import {TopCart, TopText, ImgCart, CartButton, InfCart, Carttitle } from './styles'; 
import {CartContext} from "./CartContext";
import { db } from '../Others/firebaseConfig';

import Swal from "sweetalert2";
import withReactContent from 'sweetalert2-react-content'
import { FormComp } from './FormComp';





export const Cart = () => {
  const { cartList, clear, removeItem, calcItemsTotal } = useContext(CartContext);

  const MySwal = withReactContent(Swal)

  const showAlertSuccess = (orderId) => {
    return new Promise  ((resolve, reject) => {
      MySwal.fire({
        icon: 'success',
        title: '<h2>¡Compra exitosa!</h2>',
        text: `El id de tu orden de compra es: ${orderId}`,
        showCloseButton: true,
        confirmButtonColor: '#ff898d'
        })
      })
    } 
    
  const showCartForm = () => {
    return new Promise((resolve, reject) => {
      MySwal.fire({
        title: "Formulario de compra",
        html: (
          <FormComp 
            onSubmit={values => {
              resolve(values);
              Swal.close();
            }}
            onCancel={() => Swal.close()}
          />
        ),
        showConfirmButton: false
      });
    })
  }

    const createOrder = async (values) => {
      const itemsForDb = cartList.map(item => ({
        id: item.id,
        title: item.title,
        price: item.cost,
        quantity: item.quantity,
      }));
      const order ={
        buyer: values,
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
      
      if (newOrderRef.id) showAlertSuccess(newOrderRef.id);
    };

    const handleCart = () => {
      showCartForm()
        .then((values) => {
        createOrder(values);
      })
      .catch(() => console.log("Modal cerrado"))
    }

    
    
  
    return (
      <TopText>
        <h1>Carrito de compras</h1>
        <InfCart>
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
                    <CartButton onClick={() => removeItem(cart.id)}> Eliminar 
                      <IoTrash size={20}/>
                    </CartButton>
                  </div>)
                }
              </div>
              {cartList.length > 0 &&
                <div>
                  <h2>Total: $ {calcItemsTotal()}</h2>
                </div>
              }
              <div>
                
                <CartButton   onClick={handleCart}> 
                    <IoCart size={16}/> <span>Finalizar compra</span>
                </CartButton>
  
                <CartButton onClick={clear}>
                  <IoTrash size={16}/> <span>Vaciar carrito</span><span>Vaciar carrito</span>
                </CartButton>
              </div>
            </div> : <>No hay productos en el carrito</>
          }
        </TopCart>
        </InfCart>
        
        
      </TopText>
    )
};


  