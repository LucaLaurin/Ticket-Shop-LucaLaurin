import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
import { CartContext } from "./CartContext";

export const CartWIdget = () => {

  const { calcItemsQty } = useContext(CartContext);
  
  return (

    <div>
      <FontAwesomeIcon icon={ faCartShopping }/> 
      {
         calcItemsQty() > 0 && <span>{calcItemsQty()}</span>
      }
    </div>
  );
}

export default  CartWIdget;