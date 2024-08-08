import React, { useState } from "react";
import { Container, Form, Button, Col, Row, InputGroup, Alert } from "react-bootstrap";

const ProductForm = () => {
  const generateId = () => {
    return Date.now().toString(36) + Math.random().toString(36).substr(2, 9);
  };

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
  };

  const initialProductState = {
    id: generateId(),
    codigo: "",
    marca: "",
    modelo: "",
    talle: "",
    cantidad: "",
    sucursal: "",
    fechaCarga: getCurrentDate(),
  };

  const [product, setProduct] = useState(initialProductState);
  const [validated, setValidated] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    if (form.checkValidity() === false) {
      e.stopPropagation();
      setValidated(true);
      setShowSuccess(false);
    } else {
      console.log("Producto agregado:", product);
      setProduct({
        ...initialProductState,
        fechaCarga: getCurrentDate() 
      });
      setValidated(false);
      setShowSuccess(true);
    }
  };

  return (
    <Container className="d-flex flex-column align-items-center mt-5">
      <h1 className="mb-4 text-center">Carga de Artículos</h1>
      <Form className="w-50" noValidate validated={validated} onSubmit={handleSubmit}>
        {showSuccess && (
          <Alert variant="success">
            Producto agregado exitosamente!
          </Alert>
        )}
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="codigo">
            <Form.Label>Código</Form.Label>
            <Form.Control
              required
              type="text"
              name="codigo"
              value={product.codigo}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese un código válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="marca">
            <Form.Label>Marca</Form.Label>
            <Form.Control
              required
              type="text"
              name="marca"
              value={product.marca}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese una marca válida.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="modelo">
            <Form.Label>Modelo</Form.Label>
            <Form.Control
              required
              type="text"
              name="modelo"
              value={product.modelo}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese un modelo válido.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="talle">
            <Form.Label>Talle</Form.Label>
            <Form.Control
              required
              type="text"
              name="talle"
              value={product.talle}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese un talle válido.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="cantidad">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control
              required
              type="number"
              name="cantidad"
              value={product.cantidad}
              onChange={handleChange}
              min="1"
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese una cantidad válida.
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group as={Col} md="4" controlId="sucursal">
            <Form.Label>Sucursal</Form.Label>
            <Form.Control
              required
              type="text"
              name="sucursal"
              value={product.sucursal}
              onChange={handleChange}
            />
            <Form.Control.Feedback type="invalid">
              Por favor ingrese una sucursal válida.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="fechaCarga">
          <Form.Label>Fecha de Carga</Form.Label>
          <Form.Control
            type="date"
            name="fechaCarga"
            value={product.fechaCarga}
            readOnly
          />
          <Form.Control.Feedback type="invalid">
            Por favor ingrese una fecha válida.
          </Form.Control.Feedback>
        </Form.Group>

        <Button type="submit" variant="primary">Agregar Producto</Button>
      </Form>
    </Container>
  );
};

export default ProductForm;
