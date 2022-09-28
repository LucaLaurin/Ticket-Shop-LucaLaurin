import {ItemList} from './ItemList';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router';

//firebase
import {db} from '../Others/firebaseConfig'
import {  getDocs, collection, query, where, orderBy } from "firebase/firestore";

export const ItemListContainer = () => {
    const [datos, setDatos] = useState([]);
    const { idCategory } = useParams();


    

    const getData = async (idCategory) => {
        let q;
        if (idCategory) {
            q = query(collection(db,"Productos"), where('CategoryId', '==', idCategory));
        } else {
            q = query(collection(db, "Productos"),orderBy('name'));
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
        <>  
        <div>
            {
            <ItemList items={datos}/>
            }
        </div>
        </>
    )
};

export default ItemListContainer;