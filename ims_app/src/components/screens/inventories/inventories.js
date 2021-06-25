import React, { Component } from 'react';
import AddInventory from '../../includes/form/AddInventory'

class Inventories extends Component {
    render() {
        return (
            <div className='page'>
                <p>Welcome to Inventories</p>
                <AddInventory />
                
            </div>
        );
    }
}

export default Inventories;
