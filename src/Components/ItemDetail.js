import { useState } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from './ItemCount';
import Spinner from './Spinner';

import { DetailCont, DetailDiv, ImgCont, Detailimg, InfoCont, Title, Desc, Price, Spindit } from './styles';
import Button from 'react-bootstrap/Button';

const ItemDetail = ({ item }) => {
    const [itemCount, setItemCount] = useState(0);
   

    const onAdd = (qty) => {
        alert("Usted selecciono " + qty + " items.");
        setItemCount(qty);
       
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
                        <Price>$ {item.cost}</Price>
                        <Desc>{item.stock} unidades en stock</Desc>
                    </InfoCont>
                    {
                        itemCount === 0
                        ?  <ItemCount stock={item.stock} initial={itemCount} onAdd={onAdd} />
                        :  <Link to= '/cart' ><Button variant="warning">Carrito</Button></Link>

                    }
                    
                </DetailDiv>
            </DetailCont>
            : <Spindit><Spinner /></Spindit>
        }
        </>
    );
}

export default ItemDetail;