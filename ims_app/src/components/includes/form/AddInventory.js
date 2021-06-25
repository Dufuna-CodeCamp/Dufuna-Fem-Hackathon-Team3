import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';


class AddInventory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: "",
            quantity: ""
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
                    name="product"
                    type= "text"
                    placeholder="Product Name"
                    value={this.state.product}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="quantity"
                    type="number"
                    placeholder="0"
                    value={this.state.quantity}
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

export default AddInventory;