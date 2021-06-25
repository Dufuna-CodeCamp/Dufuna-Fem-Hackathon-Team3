import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                {this.props.name === 'inventory' && (
                        <p>Add Inventory</p>
                )}
                {this.props.name === 'category' && (
                    this.props.type === 'add' ?
                        <p>Add Category</p> :
                        <p>Edit Category {this.props.item.name}</p>
                )}
                {this.props.name === 'vendor' && (
                    this.props.type === 'add' ?
                        <p>Add Vendor</p> :
                        <p>Edit Vendor {this.props.item.name}</p>
                )}
                {this.props.name === 'purchase' && (
                        <p>Add Purchase</p>
                )}
                {this.props.name === 'sale' && (
                        <p>Add Sale</p>
                )}
            </div>
        );
    }
}

export default Form;