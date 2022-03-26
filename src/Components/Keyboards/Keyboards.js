import React, { useEffect, useState } from 'react';
import { Accordion, Container, Row } from 'react-bootstrap';
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
                <Accordion defaultActiveKey="0">
                    <Accordion.Item eventKey="0">
                    <Accordion.Header>How React Works</Accordion.Header>
                    <Accordion.Body>
                            React uses components organize the codes and make it efficient . JXS is 
                            used in Component . React than compiles it with babel which covert the code in acompatible version of JavaScript React keeps a copy of Dom which is called virtual dom. when we change a data/state in react it 
                            creats another virtual DOM instantly and compares with the previous virtual DOM. And react updates only the changed data/state found while comparing DOMs.And ignore the other DOMs.It acts like Single page application.
                    </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                    <Accordion.Header>How state works</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                        cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
                        est laborum.
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Keyboards;