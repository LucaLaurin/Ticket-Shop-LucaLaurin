import { useEffect, useState } from "react";
import { useParams } from "react-router";
import {ItemDetail} from "./ItemDetail";
import { doc, getDoc } from "firebase/firestore";
import {db} from '../Others/firebaseConfig'


export const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();


    const getData = async (idItem) => {
      const querySnapshot = await getDoc(doc(db,"Productos",idItem));
      setDato({id: querySnapshot.id, ...querySnapshot.data()});
    };

    useEffect (() => {
      getData(idItem);
    }, [idItem]);
        
        
    
    return (
      <ItemDetail item={dato} />
    );
}

export default ItemDetailContainer;