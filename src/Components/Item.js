import { Link } from 'react-router-dom';
import { ItemCont, Image, Info, Icon } from './styles';
import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDollarSign, faTicket, faCircleInfo }  from "@fortawesome/free-solid-svg-icons";


export const Item = ({ id, title, stock, price, pictureUrl }) => {
    return (
        <ItemCont>
            <Image src={pictureUrl} />
            <Info>
                <Icon>   
                    <div/><strong> {title}</strong>
                </Icon>
                <Icon>   
                    <div/><strong> <FontAwesomeIcon icon={faDollarSign} />{price}</strong>
                </Icon>
                <Icon>
                    <div/><FontAwesomeIcon icon={faTicket} />{stock} unid.
                </Icon>
                <Icon  style={{cursor: "pointer"}}> 
                    <Link to={`/item/${id}`}><div/> <FontAwesomeIcon icon={ faCircleInfo }/>  Details </Link>
                </Icon>
            </Info>
        </ItemCont>
    );
}

export default Item;