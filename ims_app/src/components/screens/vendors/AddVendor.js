import React, { Component } from 'react';
import Input from '../../includes/input/Input';
import Button from '../../includes/button/button';


class AddVendor extends Component {

    constructor(props) {
        super(props);

        this.state = {
            vendorName: this.props.type === 'edit' ? this.props.item.name : "",
            address: this.props.type === 'edit' ? this.props.item.address : "",
            phoneNumber: this.props.type === 'edit' ? this.props.item.phone : "",
            email: this.props.type === 'edit' ? this.props.item.email : ""
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleFormSubmit = () => {
        if (this.state.vendorName === '' || this.state.email === '') {
            alert('please enter at least vendor name and email');
            return;
        }
        this.props.handleFormSubmit(this.state);
    }
    handleClearForm = (e) => {
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
                    <Input
                        name="vendorName"
                        type="text"
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
                        type="text"
                        placeholder="Phone number"
                        value={this.state.phoneNumber}
                        handleChange={this.handleInputChange}
                    />
                    <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={this.state.email}
                        handleChange={this.handleInputChange}
                    />
                    <Button
                        name="Cancel"
                        style={{ backgroundColor: 'gray' }}
                        action={this.props.closeForm}
                    />
                    <Button
                        name="Save"
                        style={{ float: 'right' }}
                        action={this.handleFormSubmit}
                    />
            </div>
        );
    }
}

export default AddVendor;