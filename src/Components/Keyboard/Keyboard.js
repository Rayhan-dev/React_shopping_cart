import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartPlus } from '@fortawesome/free-solid-svg-icons'

const Keyboard = (props) => {
    const { name, id, price, picture } = props.keyboard;
    const{addToCart}=props
    return (
        <div className='col-md-4 mb-4'>
            <Card >
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Button onClick={ () =>addToCart(id)} variant="primary">Add to cart {<FontAwesomeIcon icon={faCartPlus} />}</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Keyboard;