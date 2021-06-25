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
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(`product => ${this.state.product}`);
        console.log(`quantity => ${this.state.quantity}`);
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
                    name = "Cancel"
                    style = {{backgroundColor: 'gray'}}
                    action = {this.handleClearForm}
                    />
                    <Button 
                    name = "Save"
                    style = {{float: 'right'}}
                    action = {this.handleFormSubmit}
                    />
                </form>
            </div>
        );
    }
}

export default AddInventory;