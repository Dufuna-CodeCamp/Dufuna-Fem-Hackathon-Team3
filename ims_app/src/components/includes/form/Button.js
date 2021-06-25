import React from 'react';


const Button = (props) => {

    return (
        <button className = {
            props.type === "primary" ? "btn btn-success" : "btn btn-secondary"
            }
        onClick = {props.action}
        >{props.title}
        </button>
    );
}

export default Button;