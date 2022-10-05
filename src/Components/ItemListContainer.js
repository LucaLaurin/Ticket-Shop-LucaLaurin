import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


import {ItemList} from './ItemList';

//firebase
import {db} from '../Others/firebaseConfig'
import {  getDocs, collection, query, where, orderBy } from "firebase/firestore";

export const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    

    const getData = async (idCategory) => {
        let q;
        if (idCategory) {
            q = query(collection(db,"products"), where('categoryId', '==', idCategory));
        } else {
            q = query(collection(db, "products"),orderBy('title'));
        }
        const querySnapshot = await getDocs(q);
        const dataFromFirestore = querySnapshot.docs.map(item => ({
            id: item.id,
            ...item.data(),
        }))
        setDatos(dataFromFirestore);

    }

    useEffect (() => {
        getData(idCategory);
    }, [idCategory]);


    return (
         
        <div>
            {
            <ItemList items={datos}/>
            }
        </div>
        
    )
};

