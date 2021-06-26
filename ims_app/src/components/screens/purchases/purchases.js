import React, { Component } from 'react';
import Section from '../../includes/section/section';


class Purchases extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers: [
                { 'text': 'Inventory', 'value': "name" },
                { 'text': 'Price($)', 'value': "price" },
                { 'text': 'Quantity', 'value': "quantity" },
                { 'text': 'Vendor', 'value': "vendor" },
                { 'text': 'Created date', 'value': "createdDate" },
                { 'text': 'Created by', 'value': "createdBy" }
            ],
            purchases: [
                { "name": "Mama Gold Rice", "price": "15", "quantity": "40", "vendor": "Chris Kukah", "createdDate": "12/02/2021", "createdBy": "Tunde" },
                { "name": "Grand Oil", "price": "10", "quantity": "23", "vendor": "Lucy Tofa", "createdDate": "12/02/2021", "createdBy": "Jacob" },
                { "name": "Indomie", "price": "8", "quantity": "50", "vendor": "Takah Odu", "createdDate": "15/02/2021", "createdBy": "Jacob" },
                { "name": "Sugar", "price": "5", "quantity": "25", "vendor": "Tessy Emeh", "createdDate": "18/02/2021", "createdBy": "Betty" },
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

    createdDate = () => {
        var today = new Date();
        var dd = String(today.getDate()).padStart(2, '0');
        var mm = String(today.getMonth() + 1).padStart(2, '0');
        var yyyy = today.getFullYear();

        today = dd + '/' + mm + '/' + yyyy;
        return today;
    }

    handleFormSubmit = (val) => {
        let purchase = {
            name: val.inventory,
            price: val.price,
            quantity: val.quantity,
            vendor: val.vendor,
            createdDate: this.createdDate(),
            createdBy: val.createdBy
        };
        this.setState(
            {
                purchases: [...this.state.purchases, purchase]
            }
        )
        this.setState({
            isListPage: true, isAddPage: false
        });
    }

    render() {
        return (
            <Section
                mainTitle='Purchases'
                title='purchase'
                isListPage={this.state.isListPage}
                isAddPage={this.state.isAddPage}
                onAddBtnClick={this.showAddPage}
                headers={this.state.headers}
                items={this.state.purchases}
                onCloseForm={this.showListPage}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}

export default Purchases;