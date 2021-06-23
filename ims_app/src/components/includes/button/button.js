import React from 'react';
import './style.css';

const Button = props => {
    return (
        <a href={props.href} >
            <button
                style={props.style}
                className={props.className}
                id='button'
            >
                {props.name}
            </button>
        </a>
    )
}

export default Button;