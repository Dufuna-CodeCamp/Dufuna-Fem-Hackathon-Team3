import React, { Component } from 'react';
import AddVendor from './AddVendor';

class Vendors extends Component {
    render () {
        return (
            <div className = "page">
                <p>Welcome to Vendors Page</p>
                <AddVendor />
            </div>
        );
    }
}

export default Vendors;