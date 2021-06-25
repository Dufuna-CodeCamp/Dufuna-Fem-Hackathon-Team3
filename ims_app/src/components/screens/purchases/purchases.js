import React, { Component } from 'react';
import AddPurchase from '../../includes/form/AddPurchase';

class Purchases extends Component {
    render () {
        return (
            <div className = "page">
                <p>Welcome to Purchases Page</p>
                <AddPurchase />
            </div>
        );
    }
}

export default Purchases;