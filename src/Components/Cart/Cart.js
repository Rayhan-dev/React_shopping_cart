import React from 'react';
import SelectedKeyboard from '../SelectedKeyboard/SelectedKeyboard';

const Cart = (props) => {
    const { selectedKeyboards } = props;
    console.log(selectedKeyboards);
    
    const chooseOne = () => {
        for (let i = 1; i++;) {
            const randomNumber = Math.floor(Math.random() * 13);
            const selectedId=selectedKeyboards.find(x=>parseInt(x.id)===randomNumber)
            if(selectedId){
                return selectedId
            }
        }
        
    }
    return (
        <div>
            <h1>Selected Keyboards</h1>
            <div>
                {
                    selectedKeyboards.map(keyboardToAdd=><SelectedKeyboard key={keyboardToAdd.id} keyboardToAdd={keyboardToAdd}></SelectedKeyboard>)
                }
            </div>
            <button onClick={()=>chooseOne()} className="btn btn-success my-2" >Choose One for me</button> <br/>
            <button className="btn btn-danger my-2">Choose Again</button>
        </div>
    );
}; 

export default Cart; 