import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card } from 'react-bootstrap';

const Home = () => {

    const navigate = useNavigate()

  const products = [
    {
      id: 1,
      name: 'Product 1',
      category: 'Category A',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 2,
      name: 'Product 2',
      category: 'Category B',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 3,
      name: 'Product 3',
      category: 'Category C',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 4,
      name: 'Product 4',
      category: 'Category D',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Product 5',
      category: 'Category E',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Product 6',
      category: 'Category F',
      image: 'https://via.placeholder.com/150',
    },
  ];

  return (
    <Container className="py-5">
      <h1 className="text-center mb-4">Products</h1>
      <Row>
        {products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100" onClick={()=> navigate(`/product-details/${product.id}`)}>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Category: {product.category}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Home;
