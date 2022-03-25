import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Keyboard from '../Keyboard/Keyboard';

const Keyboards = () => {
    const [keyboards, setKeyboards] = useState([]);
    useEffect(() => {
        fetch('keyboard.json')
            .then(res => res.json())
            .then(data => setKeyboards(data))
    }, []);
    console.log(keyboards);
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
                            ></Keyboard>)
                    }
                    </Row>
                </div>
                <div className="col-md-3">

                </div>
                </Row>
            </Container>
        </div>
    );
};

export default Keyboards;