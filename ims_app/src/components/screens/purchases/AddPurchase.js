import React, { Component } from 'react';
import Input from '../../includes/input/Input';
import Button from '../../includes/button/button';


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
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(`inventory => ${this.state.inventory}`);
        console.log(`price => ${this.state.price}`);
        console.log(`quantity => ${this.state.quantity}`);
        console.log(`vendor => ${this.state.vendor}`);
        console.log(`createdDate => ${this.state.createdDate}`);
        console.log(`createdBy => ${this.state.createdBy}`);
    }
    handleClearForm = (e) => {
     e.preventDefault();
     this.setState({
         inventory: "",
         price: "",
         quantity: "",
         vendor: "",
         createdDate:"",
         createdBy: ""
     });   
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

export default AddPurchase;