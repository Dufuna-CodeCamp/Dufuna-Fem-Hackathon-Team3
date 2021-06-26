import React, { Component } from 'react';
import Input from '../../includes/input/Input';
import Button from '../../includes/button/button';


class AddSale extends Component {

    constructor(props) {
        super(props);

        this.state = {
            product: this.props.type === 'edit' ? this.props.item.name : "",
            price: this.props.type === 'edit' ? this.props.item.amount : "",
            quantity: this.props.type === 'edit' ? this.props.item.quantity : "",
            customerName: this.props.type === 'edit' ? this.props.item.customerName : "",
            createdAt: this.props.type === 'edit' ? this.props.item.createdAt : "",
            createdBy: this.props.type === 'edit' ? this.props.item.createdBy : ""
        }
    }

    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleFormSubmit = () => {
        if (this.state.product === '' || this.state.amount === '' || this.state.quantity === '') {
            alert('please enter at least Product name, the price and quantity sold');
            return;
        }
        this.props.handleFormSubmit(this.state);
        }
        handleClearForm = (e) => {
            this.setState({
                product: "",
                price: "",
                quantity: "",
                customerName: "",
                createdAt: "",
                createdBy: ""
            });
        }


        render() {
            return (
                <div>
                    <Input
                        name="product"
                        type="text"
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
                        type="number"
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
                        type="datetime-local"
                        value={this.state.createdAt}
                        handleChange={this.handleInputChange}
                    />
                    <Input
                        name="createdBy"
                        type="text"
                        placeholder="Created By"
                        value={this.state.createdBy}
                        handleChange={this.handleInputChange}
                    />
                    <Button
                        name="Cancel"
                        style={{ backgroundColor: 'gray' }}
                        action={this.handleClearForm}
                    />
                    <Button
                        name="Save"
                        style={{ float: 'right' }}
                        action={this.handleFormSubmit}
                    />
                </div >
            );
        }
    }

    export default AddSale;