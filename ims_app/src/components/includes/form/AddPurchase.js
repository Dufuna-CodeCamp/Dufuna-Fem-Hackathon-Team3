import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';

class AddPurchase extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inventory: "",
            price: "",
            quantity: "",
            vendor: "",
            createdDate: "",
            createdBy: ""
        }
    }
    
    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    render() {
        return (
            <div>
                <form>
                    <Input 
                    name="inventory"
                    type= "text"
                    placeholder="Inventory"
                    value={this.state.inventory}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="price"
                    type="text"
                    placeholder="Price($)"
                    value={this.state.price}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="quantity"
                    type= "number"
                    placeholder="0"
                    value={this.state.quantity}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="vendor"
                    type="text"
                    placeholder="Vendor"
                    value={this.state.vendor}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="createdDate"
                    type= "date"
                    value={this.state.createdDate}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="createdBy"
                    type= "text"
                    placeholder="Created By"
                    value={this.state.createdBy}
                    handleChange={this.handleInputChange}
                    />
                    <Button 
                    title = "Cancel"
                    type = "secondary"
                    action = {this.handleClearForm}
                    />
                    <Button 
                    title = "Save"
                    type = "primary"
                    action = {this.handleFormSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default AddPurchase;