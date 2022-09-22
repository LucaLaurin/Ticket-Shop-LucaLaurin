import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { ItemCount } from './ItemCount';
import { CartContext } from './CartContext';
import Spinner from './Spinner';

import { DetailCont, DetailDiv, ImgCont, Detailimg, InfoCont, Title, Desc, Price, Spindit } from './styles';
import Button from 'react-bootstrap/Button';

export const ItemDetail = ({ item }) => {
    const { addItem } = useContext(CartContext);
    const [itemCount, setItemCount] = useState(0);
   

    const onAdd = (quantity) => {
        alert("Usted selecciono " + quantity + " items.");
        addItem(item, quantity);
        setItemCount(quantity);
       
    }

    return (
        <>
        {
            item && item.image
            ? 
            <DetailCont>
                <DetailDiv>
                    <ImgCont>
                        <Detailimg src={item.image[0]} />
                    </ImgCont>
                    <InfoCont>
                        <Title>{item.name}</Title>
                        <Desc>{item.description}</Desc>
                        <Price>$ {item.cost.toFixed(2)}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoCont>
                    {
                        itemCount === 0
                        ?  <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        :  <Link to= '/cart' ><Button variant="warning">Ir al carrito</Button></Link>

                    }
                    
                </DetailDiv>
            </DetailCont>
            : <Spindit><Spinner /></Spindit>
        }
        </>
    );
}

export default ItemDetail;