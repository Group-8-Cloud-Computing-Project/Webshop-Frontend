import React from "react";
import { useAppState } from "../../context/context";
import { Container, Row, Col, Image, Button } from "react-bootstrap";

const ProductDetails = ({ product }) => {

    const {
        addToCart
      } = useAppState();

  const exampleProduct = {
    id: 1,
    name: "Sample Product",
    category: "Electronics",
    details: "This is a high-quality product with amazing features.",
    image: "https://via.placeholder.com/400", 
    price: 10
  };

  // Use the passed product or fallback to example data
  const { name, category, details, image } = product || exampleProduct;

  return (
    <Container className="py-5">
      <Row className="justify-content-center">
        <Col md={6}>
          <Image src={image} alt={name} fluid className="mb-4 rounded" />
        </Col>
        <Col md={6}>
          <h2>{name}</h2>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>{details}</p>
        </Col>
        <Col md={6}>
          <h2>{name}</h2>
          <p>
            <strong>Category:</strong> {category}
          </p>
          <p>{details}</p>
        </Col>
      <Row className="justify-content-center">
        <Button onClick={()=>addToCart(exampleProduct)}>Add to Cart</Button>
        
      </Row>
      </Row>
    </Container>
  );
};

export default ProductDetails;
