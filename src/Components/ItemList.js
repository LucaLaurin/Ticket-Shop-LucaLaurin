import {Item} from "./Item";
import { ProductsContainer } from './styles';
import Spinner from './Spinner';

export const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items.length > 0
            ? items.map(item => <Item key={item.id} id={item.id} title={item.name} description= {item.descr} price={item.cost} pictureUrl={item.image[0]} stock={item.stock} />)
            : <p><Spinner /></p>
        }
        </ProductsContainer>
    );
}

export default ItemList;