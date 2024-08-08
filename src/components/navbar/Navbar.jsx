import React, { useState } from 'react';
import { Offcanvas, Button, Image, Nav } from 'react-bootstrap';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [show, setShow] = useState(false);
  const location = useLocation();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow} className="m-3">
        Menu
      </Button>

      <Offcanvas show={show} onHide={handleClose} backdrop={true} className="bg-dark text-white">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Equipo</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column text-center">
            <Link to="/venta" className="nav-link mb-3">
              <Button 
                variant={location.pathname === '/venta' ? 'primary' : 'secondary'} 
                className="w-100"
                onClick={handleClose}
              >
                Venta
              </Button>
            </Link>
            <Link to="/credito" className="nav-link mb-3">
              <Button 
                variant={location.pathname === '/credito' ? 'primary' : 'secondary'} 
                className="w-100"
                onClick={handleClose}
              >
                Credito
              </Button>
            </Link>
            <Link to="/clientes" className="nav-link mb-3">
              <Button 
                variant={location.pathname === '/clientes' ? 'primary' : 'secondary'} 
                className="w-100"
                onClick={handleClose}
              >
                Clientes
              </Button>
            </Link>
            <Link to="/articulo" className="nav-link mb-3">
              <Button 
                variant={location.pathname === '/articulo' ? 'primary' : 'secondary'} 
                className="w-100"
                onClick={handleClose}
              >
                Articulo
              </Button>
            </Link>
            <Link to="/cotizar" className="nav-link mb-3">
              <Button 
                variant={location.pathname === '/cotizar' ? 'primary' : 'secondary'} 
                className="w-100"
                onClick={handleClose}
              >
                Cotizar
              </Button>
            </Link>
          </Nav>
          <div className="mt-auto text-center">
            <p className="mb-0">Pepito El Ansioso</p>
            <Image src="https://w7.pngwing.com/pngs/205/731/png-transparent-default-avatar-thumbnail.png" roundedCircle className="avatar-photo mt-2"/>
          </div>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}

export default Navbar;
