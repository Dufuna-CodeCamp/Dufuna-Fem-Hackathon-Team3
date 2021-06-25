import React, { Component } from 'react';
import Section from '../../includes/section/section';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers : [
                {'text' : 'Category Name', 'value' : "name"},
                {'text' : 'Created At', 'value' : "createdAt"},
                {'text' : 'Created By', 'value' : "createdBy"},
            ],
            categories : [
                {"name" : "Groceries", "createdAt" : "3/02/2021", "createdBy" : "Lois"},
                {"name" : "Kitchen Stuffs", "createdAt" : "6/08/2023", "createdBy" : "Taiwo"}
            ],
            selectedItem : ""
        }
    }

    setSelectedItem= (val) => {
        this.setState({selectedItem: val.name},
            alert(`${val.name} was clicked`)
        );
    }

    render() {
        return (
            <Section
                title='Categories'
                addButtonTitle='Add a new Category'
                isListPage
                addSerialNumber
                addActionBtn
                onActionClick={this.setSelectedItem}
                headers={this.state.headers}
                items={this.state.categories}
            />
        );
    }
}

export default Categories;