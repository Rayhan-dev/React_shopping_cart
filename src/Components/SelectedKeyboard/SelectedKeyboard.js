import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './SelectedKeyboard.css'

const SelectedKeyboard = (props) => {
    const { name, picture } = props.keyboardToAdd;
    return (
        <div className='d-flex justify-content-between selected-keyboard'>
            <div >
            <img className='cart-img' src={picture} alt="" />
            </div>
            <p>{name}</p>
            <a href="#">{<FontAwesomeIcon icon={faTrash}></FontAwesomeIcon>}</a>
        </div>
    );
};

export default SelectedKeyboard;