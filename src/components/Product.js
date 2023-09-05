import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Data from './data.json';
import { useDispatch } from 'react-redux';
import { add } from '../store/cartSlice';


const Product = () => {

    const dispatch = useDispatch();

    const addToCart = (product) => {
        //dispatch an add action
        dispatch(add(product));
    }

    const card = Data.map(prod => (
        <div className='col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12 mb-4' key={prod.id}>
            <Card>
                <div className='text-center py-3'>
                    <Card.Img variant="top" src={prod.image} style={{ width:'100px', height:'130px' }} />
                </div>
                
                <Card.Body>
                <Card.Title>{prod.title}</Card.Title>
                <Card.Text>
                    INR: {prod.price} <br />
                    Category: {prod.category}
                </Card.Text>
                </Card.Body>
                <Card.Footer style={{backgroundColor:'white'}}>
                    <Button variant="primary" size="sm" onClick={ () => addToCart(prod)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ));

  return (
    <>
    <h1 className='my-5'>Product List</h1>
    <div className='row'>
        {card}
    </div>
    </>
  )
}

export default Product