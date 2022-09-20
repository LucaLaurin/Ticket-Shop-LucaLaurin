import { useEffect, useState } from 'react';
import React from 'react';
import { Countcont, Countamount } from './styles';

const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
    const [numero, setNumero] = useState(0);

    useEffect(() => {
        setNumero(initial);
    },[]);

    const increment = () => {
        if (numero < stock) {
            setNumero(numero +1);
        }
    }

    const decrement = () => {
        if (numero > initial+1) {
            setNumero(numero - 1);
        }
    }
 
    return (
        <Countcont>
            <button onClick={increment}> + </button> 
            <Countamount> {numero} </Countamount> 
            <button onClick={decrement}> - </button> 
            {
                stock
                ?  <button onClick={() => onAdd(numero)}>  Add to Cart </button>
                :  <button disable> Add to Cart </button>
            }
        </Countcont>
    );
}

export default ItemCount;