import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {ItemDetail} from "./ItemDetail";
import customFetch from "../Others/customFetch";
const { products } = require('../Others/products');


export const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();

    useEffect(() => {
        customFetch(2000, products.find(item => item.id === parseInt(idItem)))
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, []);
    
    return (
        <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;