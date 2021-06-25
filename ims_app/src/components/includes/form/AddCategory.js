import React, { Component } from 'react';
import Input from './Input';
import Button from './Button';


class AddCategory extends Component {

    constructor(props) {
        super(props);

        this.state = {
            category: ""
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
                    name="category"
                    type= "text"
                    placeholder="Category Name"
                    value={this.state.category}
                    onChange={this.handleInputChange}
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

export default AddCategory;