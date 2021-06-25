import React, { Component } from 'react';
import AddSale from '../../includes/form/AddSale';

class Sales extends Component {
    render () {
        return (
            <div className = "page">
                <p>Welcome to Sales Page</p>
                <AddSale />

            </div>
        );
    }
}

export default Sales;