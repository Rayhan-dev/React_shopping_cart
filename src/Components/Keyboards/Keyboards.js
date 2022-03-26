import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Cart from '../Cart/Cart';
import Keyboard from '../Keyboard/Keyboard';

const Keyboards = () => {
    const [keyboards, setKeyboards] = useState([]);
    const [selectedKeyboards, setselectedKeyboards] = useState([]);
    useEffect(() => {
        fetch('keyboard.json')
            .then(res => res.json())
            .then(data => setKeyboards(data))
    }, []);
    const addToCart = (id) => {
        const item = keyboards[id-1];
        const allSelectedItems = [...selectedKeyboards,item];
        setselectedKeyboards(allSelectedItems);
    }
    return (
        <div>
            <Container>
            <Row>
                <div className="col-md-9">
                    <Row>
                    {
                    keyboards.map(keyboard =>
                            <Keyboard
                                keyboard={keyboard}
                                key={keyboard.id}
                                addToCart={addToCart}
                            ></Keyboard>)
                    }
                    </Row>
                </div>
                <div className="col-md-3">
                    <Cart selectedKeyboards={selectedKeyboards}></Cart>
                </div>
                </Row>
            </Container>
        </div>
    );
};

export default Keyboards;