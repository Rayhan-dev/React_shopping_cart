import { useState } from 'react';
import RandomProduct from '../RandomProduct/RandomProduct';
import SelectedKeyboard from '../SelectedKeyboard/SelectedKeyboard';
import './Cart.css'

const Cart = (props) => {
    let { selectedKeyboards ,chooseAgain } = props;
    const [choosedKeyboard, setChoosedKeyboard] = useState([]);
    
    

    function chooseOne() {
        const randomNumber = Math.floor(Math.random() * 2);
        const choosenOne = selectedKeyboards[randomNumber];
    
        setChoosedKeyboard([choosenOne]);
      
    }  
    console.log(choosedKeyboard);
   
    return (
        <div id='cart' className='main-cart'>
            <h1>Selected Keyboards</h1>
            <div>
                {   
                    selectedKeyboards.map(keyboardToAdd=><SelectedKeyboard key={keyboardToAdd.id} keyboardToAdd={keyboardToAdd}></SelectedKeyboard>)
                }
            </div>
            <button onClick={chooseOne} className="choose-btn btn btn-success my-2" >Choose One for me</button> <br/>
            <button onClick={() => chooseAgain() } className="choose-btn btn btn-danger my-2" >Choose Again</button> <br/>
            
            <div>
                <h1 className='mt-3'>We can choose one for you</h1>
            {
                    choosedKeyboard.map(keyboardToAdd=><RandomProduct key={keyboardToAdd.id} keyboardToAdd={keyboardToAdd}></RandomProduct>)
                }
            </div>
        </div>
        
    );
}; 

export default Cart; 