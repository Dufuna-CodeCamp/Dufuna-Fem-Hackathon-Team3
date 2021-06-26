import React, { Component } from 'react';
import Section from '../../includes/section/section';


class Categories extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                { 'text': 'Category Name', 'value': "name" }
            ],
            categories: [
                { "name": "Groceries", "id": 1 },
                { "name": "Kitchen Stuffs", "id": 2 }
            ],
            isListPage: true,
            isAddPage: false,
            isEditPage: false,
            selectedItem: ""
        }
    }

    setSelectedItem = (val) => {
        this.setState({ selectedItem: val });
        this.showEditPage();
    }

    showListPage = () => {
        this.setState({ isListPage: true, isAddPage: false, isEditPage: false })
    }

    showAddPage = () => {
        this.setState({ isListPage: false, isAddPage: true, isEditPage: false })
    }

    showEditPage = () => {
        this.setState({ isListPage: false, isAddPage: false, isEditPage: true })
    }

    handleFormSubmit = (val) => {
        let index = 0;
        let category = {
            name: val,
            id: this.state.categories.length + 1
        }
        if (this.state.isEditPage)
            index = this.state.selectedItem.id - 1;
        this.state.isAddPage ?
            this.setState({ categories: [...this.state.categories, category] }) :
            this.setState(
                {
                    categories: [...this.state.categories.slice(0, index),
                        category,
                    ...this.state.categories.slice(index + 1)]
                })
        this.setState({ isListPage: true, isAddPage: false, isEditPage: false });
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
                handleFormSubmit={this.handleFormSubmit}
                onCloseForm={this.showListPage}
            />
        );
    }
}

export default Categories;