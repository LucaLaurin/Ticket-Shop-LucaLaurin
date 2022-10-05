import {Item} from "./Item";
import { ProductsContainer } from './styles';

export const ItemList = ({ items }) => {
    return (
        <ProductsContainer>
        {
            items?.map(item => <Item key={item.id} item={item}/>) 
        }
        </ProductsContainer>
    );
}

