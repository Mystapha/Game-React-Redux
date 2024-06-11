import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function Navbarra() {
  return (
    <div>
         <Navbar bg="dark" data-bs-theme="dark" style={{width:"100%",padding:"1px"}}>
        <Container>
          <Navbar.Brand href="#home">Games App</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home"><Link style={{textDecoration:"none",color:"#c3bfbf"}} to="/">Games</Link></Nav.Link>
            <Nav.Link href="#about"><Link style={{textDecoration:"none" ,color:"#c3bfbf"}} to="/about">About</Link></Nav.Link>
            <Nav.Link href="#contact"><Link style={{textDecoration:"none" ,color:"#c3bfbf"}} to="/contact">Contact</Link></Nav.Link>
          </Nav>
          <img style={{width:"120px"}} src="https://upload.wikimedia.org/wikipedia/commons/3/37/Game_%28rapper%29_Logo.png"/>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navbarra
