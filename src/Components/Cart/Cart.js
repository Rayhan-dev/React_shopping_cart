import { useState } from 'react';
import RandomProduct from '../RandomProduct/RandomProduct';
import SelectedKeyboard from '../SelectedKeyboard/SelectedKeyboard';

const Cart = (props) => {
    let { selectedKeyboards } = props;
    const [choosedKeyboard, setChoosedKeyboard] = useState([]);
    

    

    function chooseOne() {
        const randomNumber = Math.floor(Math.random() * 3);
        const choosenOne = selectedKeyboards[randomNumber];
        setChoosedKeyboard([choosenOne]);
    }   
   
    return (
        <div>
            <h1>Selected Keyboards</h1>
            <div>
                {
                    selectedKeyboards.map(keyboardToAdd=><SelectedKeyboard key={keyboardToAdd.id} keyboardToAdd={keyboardToAdd}></SelectedKeyboard>)
                }
            </div>
            <button onClick={chooseOne} className="choose-btn btn btn-success my-2" >Choose One for me</button> <br/>
            <button className="btn btn-danger my-2">Choose Again</button>
            <div>
                <h1 mt-3>We can choose one for you</h1>
            {
                    choosedKeyboard.map(keyboardToAdd=><RandomProduct key={keyboardToAdd.id} keyboardToAdd={keyboardToAdd}></RandomProduct>)
                }
            </div>
        </div>
        
    );
}; 

export default Cart; 