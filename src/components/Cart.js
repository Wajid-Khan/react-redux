import { useDispatch, useSelector } from "react-redux";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card'; 
import { remove } from "../store/cartSlice";

const Cart = () => {
  const product = useSelector(state => state.cart);
  
  const dispatch = useDispatch();

  const removeToCart = (id) =>{
    dispatch(remove(id));
  }

  const card = product.map(prod => (
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
                <Button variant="danger" size="sm" onClick={ () => removeToCart(prod.id)}>Remove Item</Button>
            </Card.Footer>
        </Card>
    </div>
));

  return (
    <>
    <h1>Cart</h1>
    <div class="row">
    {card}
    </div>
    </>
    
  )
}

export default Cart