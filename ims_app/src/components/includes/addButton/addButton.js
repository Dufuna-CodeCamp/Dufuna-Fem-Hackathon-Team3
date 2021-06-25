import React from 'react';
import { ReactComponent as PlusIcon } from '../../../assets/icons/Plus.svg';
import './style.css';

const AddButton = (props) => {
    return (
        <button
            id='add-btn'
            style={{ float: 'right', border: 'none' }}
            className='mr-5'
        >
            <PlusIcon /> {props.addButtonTitle}
        </button>
    )
}


export default AddButton;