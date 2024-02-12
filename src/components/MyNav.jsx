import React, { useContext } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container,Nav,Navbar } from 'react-bootstrap';
import { NavLink } from "react-router-dom";
import { CounterContext } from "../context/CounterContext";
export default function MyNav () {
 let {count}=useContext(CounterContext);
    return (
      <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">My Project</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <NavLink className="nav-link" to="/home">Home</NavLink>
            <NavLink className="nav-link"  to="/about">About</NavLink>
            <NavLink className="nav-link" to="/products">products</NavLink>
        
            <NavLink className="nav-link" to="/contactUs">ContactUs</NavLink>
            <Nav.Link >Count {count}</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
 
  }

