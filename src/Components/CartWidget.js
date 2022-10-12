import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import {IoCart} from 'react-icons/io5';
import { CartContext } from "./CartContext";

import '../Others/styles.css'


export const CartWidget = () => {

  const { calcItemsQty } = useContext(CartContext);

  return (
    <NavLink className='buttonCart' to='/cart'>
        <IoCart />
        {
          calcItemsQty() > 0 && <span className='buttonCount'>{calcItemsQty()}</span>
        }
    </NavLink>
  )
};