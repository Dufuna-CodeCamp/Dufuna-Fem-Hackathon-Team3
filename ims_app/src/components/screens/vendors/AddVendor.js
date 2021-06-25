import React, { Component } from 'react';
import Input from '../../includes/input/Input';
import Button from '../../includes/button/Button';


class AddVendor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vendorName: "",
            address: "",
            phoneNumber: "",
            email: ""
        }
    }
    
    handleInputChange = (event) => {
        this.setState({[event.target.name]: event.target.value})
    }

    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(`vendorName => ${this.state.vendorName}`);
        console.log(`address => ${this.state.address}`);
        console.log(`phoneNumber => ${this.state.phoneNumber}`);
        console.log(`email => ${this.state.email}`);
    }
    handleClearForm = (e) => {
     e.preventDefault();
     this.setState({
         vendorName: "",
         address: "",
         phoneNumber: "",
         email: ""
     });   
    }

    render() {
        return (
            <div>
                <form>
                    <Input 
                    name="vendorName"
                    type= "text"
                    placeholder="Name"
                    value={this.state.vendorName}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="address"
                    type="text"
                    placeholder="Address"
                    value={this.state.address}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="phoneNumber"
                    type= "text"
                    placeholder="Phone number"
                    value={this.state.phoneNumber}
                    handleChange={this.handleInputChange}
                    />
                    <Input 
                    name="email"
                    type= "email"
                    placeholder="Email"
                    value={this.state.email}
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

export default AddVendor;