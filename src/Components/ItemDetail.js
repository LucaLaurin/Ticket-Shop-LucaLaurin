import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CartContext } from './CartContext';
import React from 'react';

import { DetailCont, DetailDiv, ImgCont, Detailimg, InfoCont, Title, Desc, Price, Spindit } from './styles';
import Button from 'react-bootstrap/Button';

export const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [count, setcount] = useState(0);
   

    const onAdd = (quantity) => {
        alert("Usted selecciono " + quantity + " items.");
        addItem(item, quantity);
        setcount(quantity);
       
    }

    return (
        <>
        {
        
            <DetailCont>
                <DetailDiv>
                    <ImgCont>
                        <Detailimg src={item.img} />
                    </ImgCont>
                    <InfoCont>
                        <Title>{item.title}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.cost}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoCont>
                    {
                        item.stock && count === 0 
                        ?  <ItemCount stock={item.stock} initial={1} onAdd={onAdd} />
                        :  <Link to= '/cart' ><Button variant="warning">Ir al carrito</Button></Link>

                    }
                    <Spindit></Spindit>
                </DetailDiv>
            </DetailCont>
        }
        </>
    );
}
