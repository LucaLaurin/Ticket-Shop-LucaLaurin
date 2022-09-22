import { useEffect, useState } from 'react';
import React from 'react';
import { Countcont, Countamount, ButtonCount } from './styles';

export const ItemCount = ({ stock = 0, initial = 1, onAdd }) => {
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
            <ButtonCount onClick={increment}> + </ButtonCount> 
            <Countamount> {numero} </Countamount> 
            <ButtonCount onClick={decrement} > - </ButtonCount> 
            {
                stock && numero
                ?  <ButtonCount onClick={() => onAdd(numero)}>  Add to Cart </ButtonCount>
                :  <ButtonCount disable> Add to Cart </ButtonCount>
            }
        </Countcont>
    );
}

export default ItemCount;