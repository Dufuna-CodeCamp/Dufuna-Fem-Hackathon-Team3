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
                title='sale'
                addButtonTitle='Add a new sale'
                isListPage
                addSerialNumber
                headers={this.state.headers}
                items={this.state.sales}
            />
        );
    }
}

export default Sales;