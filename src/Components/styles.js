import styled from "styled-components";

//navbar
const Container = styled.div`
    padding: 10px 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

const ItemL = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const ItemC = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Logo = styled.h1`
    font-weight: bold;
`;

const ItemR = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    font-size: 25px;
`;

const NavItem = styled.div`
    font-size: 25px;
    cursor: pointer;
    margin-left: 25px;
`;


//ItemCount
const Countcont = styled.div`
    display: flex;
    align-items: center;
    margin: 20px;
`;

const Countamount = styled.div`
    font-size: 24px;
    margin: 5px;
`;

const ButtonCount = styled.button`
    padding: 1rem;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
    font-size: .9rem;
    font-weight: 700;
    letter-spacing: .5px;
    background-color: #B8E4E7;
    box-shadow: 2px 2px 25px -7px #4c4c4c;
    text-decoration: none;
    color: #000;
    transform: scale(0.97);
`;


//ItemList
const ProductsContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
`;

//Item
const Info = styled.div`
    opacity: 0;
    width: 100%;
    height: 100%;
    position: absolute;
    top: 0px;
    left: 0px;
    background-color: rgba(0, 0, 0, 0.2);
    z-index: 3;
    diplay: flex;
    align-items: center;
    justify-content: center;
    transition: all 0.5s ease;
`;

const ItemCont = styled.div`
    flex: 1;
    margin: 5px;
    min-width: 280px;
    height: 350px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f5fbfd;
    position: relative;
    &:hover ${Info}{
        opacity: 1;
    }
`;

const Image = styled.img`
    height: 70%;
    z-index: 2;
`;

const Icon = styled.div`
    font-size: 12px;
    width: 100px;
    height: 40px;
    background-color: white;
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin: 10px;
    transition: all 0.5s ease;
    &:hover {
        background-color: #e9f5f5;
        transform: scale(1.3);
    }
`;


//ItemDetail
const DetailCont = styled.div`
    padding: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-end;
`;

const DetailDiv = styled.div`
    padding: 50px;
    display: flex;
`;

const ImgCont = styled.div`
    flex: 1;
`;

const Detailimg = styled.img`
    width: 100%;
    height: 90vh;
    object-fit: cover;
`;

const InfoCont = styled.div`
    flex: 1;
    padding: 0px 50px;
`;

const Title = styled.h1`
    font-weight: 200;
`;

const Desc = styled.p`
    margin: 20px 0px;
`;

const Price  = styled.span`
    font-weight: 100;
    font-size: 40px;
`;

const Spindit = styled.div`
    padding: 100px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: flex-end;
`;

// Cart 

const TopCart = styled.div`
    argin-top: 180px;
    min-height: 80vh;
    width: 100%;
    max-width: 1280px;
    margin: 180px auto 0px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const CartButton = styled.button`
    padding: 1rem;
    border-radius: .5rem;
    border: none;
    cursor: pointer;
    font-size: .9rem;
    font-weight: 700;
    letter-spacing: .5px;
    background-color: #D65D20;
    box-shadow: 2px 2px 25px -7px #4c4c4c;
    text-decoration: none;
    color: #000;
    transform: scale(0.97);
`;

const TopText = styled.text`
    margin: 0px 10px;
`;

const ImgCart = styled.img`
    width: 100%;
    height: 20vh;
    object-fit: cover;
`;

const InfCart = styled.div`
    flex: 3;   
`;

const SumCart = styled.div`
    display_ flex;
    aling-items: center;
    justify-content: space-between;
    padding: 20px;
`;



export { 
    Container, Logo, NavItem, ItemL, ItemC, ItemR, 
    Countcont, Countamount, 
    ProductsContainer, ItemCont,
    Image, Info, Icon, ButtonCount,
    DetailCont, DetailDiv, ImgCont, Detailimg, InfoCont, Title, Desc, Price, Spindit,
    TopCart, CartButton, TopText, ImgCart
}