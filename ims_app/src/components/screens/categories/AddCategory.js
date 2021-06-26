import React, { Component } from 'react';
import Input from '../../includes/input/Input';
import Button from '../../includes/button/button';


class AddCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: this.props.type === 'edit' ? this.props.item.name : ""
        }
    }
    handleInputChange = (event) => {
        this.setState({ [event.target.name]: event.target.value })
    }
    handleFormSubmit = () => {
        if (this.state.category === '') {
            alert('input category name');
            return;
        }
        this.props.handleFormSubmit(this.state.category);
    }
    handleClearForm = (e) => {
        this.setState({
            category: "",
        });
    }

    render() {
        return (
            <div>
                <Input
                    name="category"
                    type="text"
                    placeholder="Category Name"
                    value={this.state.category}
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

export default AddCategory;