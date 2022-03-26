import React from 'react';

const RandomProduct = (props) => {
    const { name,picture } = props.keyboardToAdd;
    return (
        <div className='d-flex justify-content-between selected-keyboard'>
            <div >
            <img className='cart-img' src={picture} alt="" />
            </div>
            <p>{name}</p>
        </div>
    );
};

export default RandomProduct;