import React, { Component } from 'react';
import Section from '../../includes/section/section';


class Purchases extends Component {

    constructor(props) {
        super(props);
        this.state = {
            headers : [
                {'text' : 'Inventory', 'value' : "name"},
                {'text' : 'Price($)', 'value' : "price"},
                {'text' : 'Quantity', 'value' : "quantity"},
                {'text' : 'Vendor', 'value' : "vendor"},
                {'text' : 'Created date', 'value' : "createdDate"},
                {'text' : 'Created by', 'value' : "createdBy"}
            ],
            purchases : [
                {"name" : "Mama Gold Rice", "price" : "15", "quantity" : "40", "vendor" : "Chris Kukah", "createdDate" : "12/02/2021", "createdBy" : "Tunde"},
                {"name" : "Grand Oil", "price" : "10", "quantity" : "23", "vendor" : "Lucy Tofa", "createdDate" : "12/02/2021", "createdBy" : "Jacob"},
                {"name" : "Indomie", "price": "8", "quantity" : "50", "vendor" : "Takah Odu", "createdDate" : "15/02/2021", "createdBy" : "Jacob"},
                {"name" : "Sugar", "price" : "5", "quantity" : "25", "vendor" : "Tessy Emeh", "createdDate" : "18/02/2021", "createdBy" : "Betty"},
            ],
            isListPage : true,
            isAddPage : false
            // selectedItem : ""
        }
    }

    // setSelectedItem= (val) => {
    //     this.setState({selectedItem: val.name},
    //         alert(`${val.name} was clicked`)
    //     );
    // }
    showListPage = () => {
        this.setState({ isListPage: true, isAddPage: false })
    }

    showAddPage = () => {
        this.setState({ isListPage: false, isAddPage: true })
    }
    handleFormSubmit = (val) => {
        let index = 0;
        let purchase = {
            name: val.inventory,
            price: val.price,
            quantity: val.quantity,
            vendor: val.vendor,
            createdDate: val.createdDate,
            createdBy: val.createdBy,
            id: this.state.purchases.length + 1
        };
        this.state.isAddPage ? this.setState(
            {
                purchases: [...this.state.purchases, purchase]
            }
        ) : this.setState(
            {
                purchases: [...this.state.purchases.slice(0, index),
                purchase,
                ...this.state.purchases.slice(index + 1)]
            })
        this.setState({ 
            isListPage: true, isAddPage: false });
    }

    render () {
        return (
            <Section
                mainTitle ='Purchases'
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