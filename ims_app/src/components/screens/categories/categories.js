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
            isListPage: true,
            isAddPage: false,
            isEditPage: false,
            selectedItem : ""
        }
    }

    setSelectedItem= (val) => {
        this.setState({selectedItem: val});
        this.showEditPage();
    }

    showAddPage = () => {
        this.setState({isListPage: false, isAddPage: true, isEditPage: false})
    }

    showEditPage = () => {
        this.setState({isListPage: false, isAddPage: false, isEditPage: true})
    }

    render() {
        return (
            <Section
                mainTitle='Categories'
                title='category'
                isListPage={this.state.isListPage}
                isAddPage={this.state.isAddPage}
                isEditPage={this.state.isEditPage}
                addSerialNumber
                onAddBtnClick={this.showAddPage}
                addActionBtn
                onActionClick={this.setSelectedItem}
                headers={this.state.headers}
                items={this.state.categories}
                selectedItem={this.state.selectedItem}
            />
        );
    }
}

export default Categories;