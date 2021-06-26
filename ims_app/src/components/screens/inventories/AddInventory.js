import React, { Component } from 'react';
import Input from '../../includes/input/Input';
import Button from '../../includes/button/button';


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
    handleFormSubmit = () => {
        if (this.state.product === '') {
            alert('input product name');
            return;
        }
        this.props.handleFormSubmit(
            this.state
        );
    }
    handleClearForm = (e) => {
     e.preventDefault();
     this.setState({
         product: "",
         quantity: ""
     });   
    }

    render() {
        return (
            <div>
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
                    name = "Cancel"
                    style = {{backgroundColor: 'gray'}}
                    action = {this.props.closeForm}
                    />
                    <Button 
                    name = "Save"
                    style = {{float: 'right'}}
                    action = {this.handleFormSubmit}
                    />
            </div>
        );
    }
}

export default AddInventory;