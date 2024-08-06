import React from 'react';
import { Container, Row, Col, Button, Image } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const location = useLocation(); 

  return (
    <Container fluid className="navbar bg-dark text-white p-4">
      <Row className="justify-content-center mb-4">
        <Col className="text-center">
          <Link to="/" className="nav-link">
            <h1>Equipo</h1>
          </Link>
        </Col>
      </Row>
      <Row className="nav-items flex-column align-items-center w-100 mt-5">
        <Link to="/venta" className="nav-link">
          <Button 
            variant={location.pathname === '/venta' ? 'primary' : 'secondary'} 
            className="nav-button mb-3"
          >
            Venta
          </Button>
        </Link>
        <Link to="/credito" className="nav-link">
          <Button 
            variant={location.pathname === '/credito' ? 'primary' : 'secondary'} 
            className="nav-button mb-3"
          >
            Credito
          </Button>
        </Link>
        <Link to="/clientes" className="nav-link">
          <Button 
            variant={location.pathname === '/clientes' ? 'primary' : 'secondary'} 
            className="nav-button mb-3"
          >
            Clientes
          </Button>
        </Link>
        <Link to="/articulo" className="nav-link">
          <Button 
            variant={location.pathname === '/articulo' ? 'primary' : 'secondary'} 
            className="nav-button mb-3"
          >
            Articulo
          </Button>
        </Link>
        <Link to="/cotizar" className="nav-link">
          <Button 
            variant={location.pathname === '/cotizar' ? 'primary' : 'secondary'} 
            className="nav-button mb-3"
          >
            Cotizar
          </Button>
        </Link>
      </Row>
      <Row className="mt-auto text-center">
        <Col className="d-flex align-items-center justify-content-center">
          <p className="mb-0 mr-2">Pepito El Ansioso</p>
          <Image src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png" roundedCircle className="avatar-photo"/>
        </Col>
      </Row>
    </Container>
  );
}

export default Navbar;
