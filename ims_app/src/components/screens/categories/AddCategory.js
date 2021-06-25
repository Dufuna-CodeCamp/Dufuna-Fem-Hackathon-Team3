import React, { Component } from 'react';
import Input from '../../includes/input/Input';
import Button from '../../includes/button/button';


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
    handleFormSubmit = (e) => {
        e.preventDefault();
        console.log(`category => ${this.state.category}`);
    }
    handleClearForm = (e) => {
     e.preventDefault();
     this.setState({
         category: "",
     });   
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

export default AddCategory;