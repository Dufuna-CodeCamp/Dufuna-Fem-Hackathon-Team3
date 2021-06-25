import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';


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
                    value={this.state.emmail}
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

export default AddVendor;