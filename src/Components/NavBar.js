import Nav from 'react-bootstrap/Nav';
import React from 'react';
import {CartWidget} from './CartWidget';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFaceGrinWink }  from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { Container, Logo, NavItem, ItemL, ItemC, ItemR } from './styles';

export const NavBar = () => {
  return (
    <Container>
      <ItemL>
      <Link to='/' style={{textDecoration: "none", color: "black"}}><Logo>TicketSh<FontAwesomeIcon icon={ faFaceGrinWink }/>p</Logo></Link>
      </ItemL>
      <ItemC className="justify-content-center" activeKey="/home">
        <Nav.Item>
        <Link to="/item/9PAURSiMK0dPTDEXOkl0" style={{textDecoration: "none", color: "black"}}><NavItem>Conciertos</NavItem></Link>
        </Nav.Item>
        <Nav.Item>
        <Link to='/item/e1meso2JExjJIDMSA5d1' style={{textDecoration: "none", color: "black"}}><NavItem>Teatro</NavItem></Link>
        </Nav.Item>
        <Nav.Item>
        <Link to='/item/foFTk7BiSNYWF6R0IKtd' style={{textDecoration: "none", color: "black"}}><NavItem>Eventos</NavItem></Link>
        </Nav.Item>
        <Nav.Item>
        <Link to='/item/dwyoJPS9JHlnWws07YBI' style={{textDecoration: "none", color: "black"}}><NavItem>Fiestas</NavItem></Link>
        </Nav.Item>
      </ItemC>
      <ItemR>
        <Nav><CartWidget /></Nav>
      </ItemR>
      
    </Container>
  );
}


