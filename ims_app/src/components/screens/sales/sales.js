import React, { Component } from 'react';
import Section from '../../includes/section/section';


class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                { 'text': 'Product', 'value': "name" },
                { 'text': 'Price ($)', 'value': "amount" },
                { 'text': 'Quantity', 'value': "quantity" },
                { 'text': 'Customer Name', 'value': "customerName" },
                { 'text': 'Created date', 'value': "createdDate" },
                { 'text': 'Created by', 'value': "createdBy" },
            ],
            sales: [
                { "name": "Maggi", "quantity": "10", "customerName": "Ahmed", "createdBy": "Lois", "createdDate": "3/02/2021", "amount": "1.00" },
                { "name": "Kitchen Table", "quantity": "5", "customerName": "Otedola", "createdBy": "Saidat", "createdDate": "6/08/2023", "amount": "3.00" },
                { "name": "Oil", "quantity": "15", "customerName": "Dangote", "createdBy": "Oge", "createdDate": "6/08/2023", "amount": "4.00" },
                { "name": "Shelves", "quantity": "5", "customerName": "Oge", "createdBy": "Bolanle", "createdDate": "6/08/2023", "amount": "19.00" },
                { "name": "flour", "quantity": "20", "customerName": "Buhari", "createdBy": "Elijah", "createdDate": "6/08/2023", "amount": "21.00" },
            ],
            isListPage: true,
            isAddPage: false,
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
        let sales = {
            name: val.name,
            price: val.amount,
            quantity: val.quantity,
            customerName: val.customerName,
            id: this.state.sales.length + 1
        };
        if (this.state.isEditPage)
            index = this.state.selectedItem.id - 1;
        this.state.isAddPage ? this.setState(
            {
                vendors: [...this.state.sales, sales]
            }
        ) :
            this.setState({ isListPage: true, isAddPage: false, isEditPage: false });
    }


    render() {
        return (
            <Section
            mainTitle='Sales'
                title='Sale'
            isListPage={this.state.isListPage}
            isAddPage={this.state.isAddPage}
            addSerialNumber
            onAddBtnClick={this.showAddPage}
            headers={this.state.headers}
            items={this.state.inventories}
            onCloseForm={this.showListPage}
            handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}

export default Sales;