import React, { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col, Card, Form } from 'react-bootstrap';
import { useAppState } from "../../context/context";
import api from '../../api';


const Home = () => {
  const navigate = useNavigate()
  const {
    state: { products }, dispatch,
  } = useAppState();
  const [filteredProducts, setFilteredProducts] = React.useState([]);

  const [sortMode, setSortMode] = React.useState('Sort by Price');

  // Initialize filteredProducts when products change
  useEffect(() => {
    setFilteredProducts(products || []);
    applyFilter();
  }, [products]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get('/products/');
        if (!response.data) {
          throw new Error('Network response was not ok');
        }
        dispatch({ type: 'SET_PRODUCTS', payload: response.data });
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, [dispatch]); // Dependency array ensures this runs once on mount

  useEffect(() => {
    applyFilter();
  }, [sortMode]);

  const handleOnProductsSearch = (e) => {
    if (!e.target.value) {
      setFilteredProducts(products);
      return;
    }

    let searchString = e.target.value;

    const filteredProducts = products.filter((product) => {
      return product.name.toLowerCase().includes(searchString.toLowerCase());
    });

    setFilteredProducts(filteredProducts);
  }

  const handleOnSortProducts = (e) => {
    setSortMode(e.target.value);
  }

  const applyFilter = () => {
    if (sortMode === 'Sort by Price') {
      sortByPrice();
    } else if (sortMode === 'Sort by Category') {
      const sortedProducts = [...products].sort((a, b) => a.category != null ? a.category.localeCompare(b.category) : 1);
      setFilteredProducts(sortedProducts);
    }
  }

  const sortByPrice = () => {
    const parsePrice = x => parseFloat(x.replace(/^\€/, '')) || 0

    const sortedProducts = [...products].sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
    setFilteredProducts(sortedProducts);
  }

  if (!products) {
    return <h1>Loading...</h1>;
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
        {filteredProducts.length === 0 ? "No products found." : filteredProducts.map((product) => (
          <Col key={product.id} md={4} className="mb-4">
            <Card className="h-100 clickable" onClick={() => navigate(`/product-details/${product.id}`, { state: { product } })}>
              <Card.Img
                variant="top"
                src={product.image}
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>Category: {product.category}</Card.Text>
                <Card.Text>Price: €{product.price}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container >
  );
};

export default Home;
