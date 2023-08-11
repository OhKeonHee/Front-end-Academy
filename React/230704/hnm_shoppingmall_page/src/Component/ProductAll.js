import React from 'react'
import { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import { productAction } from '../redux/actions/productAction'
import { useDispatch, useSelector } from 'react-redux';
import { useSearchParams } from 'react-router-dom';

const ProductAll = () => {
  // const [productList, setProductList] = useState([])
  const [query, setQuery] = useSearchParams();
  const dispatch = useDispatch();
  const productList = useSelector((state) => state.product.productList)

  const getProduct = async () => {
    let searchQuery = query.get('q') || "";
    dispatch(productAction.getProduct(searchQuery))
  }
  useEffect(() => {
    getProduct();
  }, []);
  return (
    <div>
      <Container>
        <Row>
          {productList.map((item) => (
            <Col md={3} sm={12} key={item.id}>
              <ProductCard item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  )
}

export default ProductAll