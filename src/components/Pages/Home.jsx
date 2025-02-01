import React from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form } from 'react-bootstrap';

let dummyProducts = [
  {
    id: 1,
    name: 'Chair',
    category: 'Furniture',
    images: [
      'https://www.ikea.com/de/en/images/products/pinntorp-chair-light-brown-stained__1296225_pe935730_s5.jpg?f=xl',
      'https://www.ikea.com/de/en/images/products/pinntorp-chair-light-brown-stained__1296224_pe935735_s5.jpg?f=xl',
    ],
    price: 20,
    stock: 10,
  },
  {
    id: 2,
    name: 'Laptop',
    category: 'Electronics',
    description: 'Experience powerful performance with this sleek, high-performance laptop. Equipped with the latest processor, fast SSD storage, and vibrant display, it’s perfect for work, entertainment, and multitasking. Lightweight and durable, it’s designed for productivity on the go.',
    images:
      ["https://img-prod-cms-rt-microsoft-com.akamaized.net/cms/api/am/imageFileData/RW16e0d?ver=358e&q=90&m=6&h=705&w=1253&b=%23FFFFFFFF&f=jpg&o=f&p=140&aim=true"],
    price: 1000,
    stock: 5
  },
  {
    id: 3,
    name: 'iPhone',
    category: 'Cell Phones',
    images: ['https://placehold.co/600x400'],
    price: 800,
    stock: 1,
  },
];

const Home = () => {
  const navigate = useNavigate()
  const [products, setProducts] = React.useState([...dummyProducts]);

  const handleOnProductsSearch = (e) => {
    if (!e.target.value) {
      setProducts(dummyProducts);
      return;
    }

    let searchString = e.target.value;

    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchString.toLowerCase());
    });

    setProducts(filteredProducts);
  }

  const handleOnSortProducts = (e) => {
    if (e.target.value === 'Sort by Price') {
      const sortedProducts = [...products].sort((a, b) => a.name.localeCompare(b.name));
      setProducts(sortedProducts);
    } else if (e.target.value === 'Sort by Category') {
      const sortedProducts = [...products].sort((a, b) => a.category.localeCompare(b.category));
      setProducts(sortedProducts);
    }
  }

  return (
    <Container className="py-5">
      <Row>
        <Col>
          <Form.Control onChange={handleOnProductsSearch} className='m-2' size="lg" type="text" placeholder="Search Products Here..." />
        </Col>
        <Col md={4}>
          <Form.Select onChange={handleOnSortProducts} aria-label="Sort By" size='lg' className='m-2'>
            <option>Sort by Price</option>
            <option>Sort by Category</option>
          </Form.Select></Col>
      </Row>
      <h1 className="text-center m-4">Products</h1>
      <Row>
        {products.length === 0 ? "No products found." : products.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100 clickable" onClick={() => navigate(`/product-details/${product.id}`, { state: { product } })}>
              <Card.Img
                variant="top"
                src={product.images[0]}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Category: {product.category}</Card.Text>
                <Card.Text>Price: {product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container >
  );
};

export default Home;
