import {NavBar} from "./Components/NavBar";
import {Cart} from "./Components/Cart";
import {ItemDetailContainer} from "./Components/ItemDetailContainer";
import {ItemListContainer} from "./Components/ItemListContainer";
import CartContextProvider from "./Components/CartContext";
import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";


const App = () => {
  return (
    <CartContextProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={<ItemListContainer />} />
        <Route path='/category/:idCategory' element={<ItemListContainer />} />
        <Route path='/item/:idItem' element={<ItemDetailContainer />} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
      
    </BrowserRouter>
    </CartContextProvider>
  );
} 

export default App;