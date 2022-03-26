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
    const chooseAgain = (id) => {
        const allSelectedItems = [];
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
                        <Cart
                            chooseAgain={chooseAgain}
                            selectedKeyboards={selectedKeyboards}
                        ></Cart>
                </div>
                </Row>
                <Accordion className='my-5' defaultActiveKey="0">
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
                        State is a inbuild object in react . It represent the immidiate  situation of a component . In state , an initial situation/data can be set and it changes when the inbuild function of state runs.A vaiable and a function can be found by destucturing state.The change will occur when the user interect/changes data of that component
                    </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </Container>
        </div>
    );
};

export default Keyboards;