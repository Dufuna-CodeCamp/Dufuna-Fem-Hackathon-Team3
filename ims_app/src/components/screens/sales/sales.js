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
                {'text' : 'Created date', 'value' : "createdDate"},
                {'text' : 'Created by', 'value' : "createdBy"},
            ],
            sales : [
                {"name" : "Maggi", "quantity": "10", "customerName": "Ahmed", "createdBy": "Lois", "createdDate" : "3/02/2021", "amount" : "1.00"},
                {"name" : "Kitchen Table","quantity": "5", "customerName": "Otedola", "createdBy": "Saidat", "createdDate" : "6/08/2023", "amount" : "3.00"},
                {"name" : "Oil", "quantity": "15", "customerName": "Dangote", "createdBy": "Oge", "createdDate" : "6/08/2023", "amount" : "4.00"},
                {"name" : "Shelves", "quantity": "5", "customerName": "Oge", "createdBy": "Bolanle", "createdDate" : "6/08/2023","amount" : "19.00"},
                {"name" : "flour", "quantity": "20", "customerName": "Buhari", "createdBy": "Elijah", "createdDate" : "6/08/2023", "amount" : "21.00"},
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
                title='Sales'
                addButtonTitle='Add a new sale'
                isListPage
                addSerialNumber
                addActionBtn
                onActionClick={this.setSelectedItem}
                headers={this.state.headers}
                items={this.state.sales}
            />
        );
    }
}

export default Sales;