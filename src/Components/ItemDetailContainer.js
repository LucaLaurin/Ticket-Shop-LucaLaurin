import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ItemDetail } from "./ItemDetail";
import { getDoc, doc } from "firebase/firestore";
import { db } from '../Others/firebaseConfig'


export const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { idItem } = useParams();


    const getData = async (idItem) => {
      const querySnapshot = await getDoc(doc(db,"products",idItem));
      setDato({id: querySnapshot.id, ...querySnapshot.data()});
    };

    useEffect (() => {
      getData(idItem);
    }, [idItem]);
        
        
    
    return (
      <ItemDetail item={dato} />
    );
}

