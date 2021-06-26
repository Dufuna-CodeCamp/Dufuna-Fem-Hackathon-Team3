import React, { Component } from 'react';
import Section from '../../includes/section/section';


class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers : [
                {'text' : 'Product', 'value' : "name"},
                {'text' : 'Price ($)', 'value' : "amount"}, 
                {'text' : 'Quantity', 'value' : "quantity"},
                {'text' : 'Customer Name', 'value' : "customerName"},
                {'text' : 'Created at', 'value' : "createdAt"},
                {'text' : 'Created by', 'value' : "createdBy"},
            ],
            sales : [
                {"name" : "Maggi", "quantity": "10", "customerName": "Ahmed", "createdBy": "Lois", "createdAt" : "3/02/2021 15:03", "amount" : "1.00"},
                {"name" : "Kitchen Table","quantity": "5", "customerName": "Otedola", "createdBy": "Saidat", "createdAt" : "6/08/2023 9:45", "amount" : "3.00"},
                {"name" : "Oil", "quantity": "15", "customerName": "Dangote", "createdBy": "Oge", "createdAt" : "6/08/2023 5:32", "amount" : "4.00"},
                {"name" : "Shelves", "quantity": "5", "customerName": "Oge", "createdBy": "Bolanle", "createdAt" : "6/08/2023 1:15","amount" : "19.00"},
                {"name" : "flour", "quantity": "20", "customerName": "Buhari", "createdBy": "Elijah", "createdAt" : "6/08/2023 10:05", "amount" : "21.00"},
            ],
            isListPage: true,
            isAddPage: false
        }
    }

    showListPage = () => {
        this.setState({ isListPage: true, isAddPage: false })
    }

    showAddPage = () => {
        this.setState({ isListPage: false, isAddPage: true })
    }
    createdAt = () => {
        Date();
    }
    handleFormSubmit = (val) => {
        let sale = {
            name: val.product,
            amount: val.amount,
            quantity: val.quantity,
            customerName: val.customerName,
            createdAt: this.createdAt(),
            createdBy: val.createdBy
        };
        this.setState(
            {
                sales: [...this.state.sales, sale]
            }
        )
        this.setState({
            isListPage: true, isAddPage: false
        });
    }

    render() {
        return (
            <Section
                mainTitle='Sales'
                title='sale'
                isListPage={this.state.isListPage}
                isAddPage={this.state.isAddPage}
                onAddBtnClick={this.showAddPage}
                headers={this.state.headers}
                items={this.state.sales}
                onCloseForm={this.showListPage}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}

export default Sales;