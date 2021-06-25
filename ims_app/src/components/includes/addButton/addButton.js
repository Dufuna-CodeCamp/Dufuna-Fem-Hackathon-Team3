import React from 'react';
import { ReactComponent as PlusIcon } from '../../../assets/icons/Plus.svg';
import './style.css';

const AddButton = (props) => {
    return (
        <button
            id='add-btn'
            style={{ float: 'right', border: 'none' }}
            className='mr-5'
            onClick={props.onAddBtnClick}
        >
            <PlusIcon /> {'Add a new ' + props.title}
        </button>
    )
}


export default AddButton;