import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';


class AddSale extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: "",
            price: "",
            quantity: "",
            vendor: "",
            createdAt: "",
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
                    name="product"
                    type= "text"
                    placeholder="Product"
                    value={this.state.product}
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
                    name="customerName"
                    type="text"
                    placeholder="Customer Name"
                    value={this.state.customerName}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="createdAt"
                    type= "datetime-local"
                    value={this.state.createdAt}
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

export default AddSale;