import React, { Component } from 'react';
import AddCategory from './categories/AddCategory';
import AddInventory from './inventories/AddInventory';
import AddVendor from './vendors/AddVendor';
import AddPurchase from './purchases/AddPurchase';
import AddSale from './sales/AddSale';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div className='form-div'>
                {this.props.name === 'inventory' && (
                    <AddInventory
                        handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
                        closeForm={this.props.closeForm}
                    />
                )}
                {this.props.name === 'category' && (
                    this.props.type === 'add' ?
                        <AddCategory
                            handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
                            closeForm={this.props.closeForm}
                        /> :
                        <AddCategory
                            handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
                            closeForm={this.props.closeForm}
                            item={this.props.item}
                            type="edit"
                        />
                )}
                {this.props.name === 'vendor' && (
                    this.props.type === 'add' ?
                        <AddVendor
                            handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
                            closeForm={this.props.closeForm}
                        /> :
                        <AddVendor
                            handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
                            closeForm={this.props.closeForm}
                            item={this.props.item}
                            type="edit"
                        />
                )}
                {this.props.name === 'purchase' && (
                    <AddPurchase
                        handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
                        closeForm={this.props.closeForm}
                    />
                )}
                {this.props.name === 'sale' && (
                    <AddSale
                        handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
                        closeForm={this.props.closeForm}
                    />
                )}
               </div>
        );
    }
}

export default Form;