import React from 'react';
import { Card ,Button } from 'react-bootstrap';

const Keyboard = (props) => {
    const {name, id,price,picture} = props.keyboard;
    return (
        <div className='col-md-4 mb-4'>
            <Card >
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Price: {price}
                    </Card.Text>
                    <Button variant="primary">Add to cart</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default Keyboard;