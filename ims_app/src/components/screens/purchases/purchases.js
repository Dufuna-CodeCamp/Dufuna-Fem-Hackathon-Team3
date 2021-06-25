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
                {'text' : 'Created date', 'value' : "createdAt"},
                {'text' : 'Created by', 'value' : "createdBy"}
            ],
            purchases : [
                {"name" : "Mama Gold Rice", "price" : "15", "quantity" : "40", "vendor" : "Chris Kukah", "createdAt" : "12/02/2021 10:12", "createdBy" : "Tunde"},
                {"name" : "Grand Oil", "price" : "10", "quantity" : "23", "vendor" : "Lucy Tofa", "createdAt" : "12/02/2021 12:25", "createdBy" : "Jacob"},
                {"name" : "Indomie", "price": "8", "quantity" : "50", "vendor" : "Takah Odu", "createdAt" : "15/02/2021 13:00", "createdBy" : "Jacob"},
                {"name" : "Sugar", "price" : "5", "quantity" : "25", "vendor" : "Tessy Emeh", "createdAt" : "18/02/2021 10:45", "createdBy" : "Betty"},
            ],
            selectedItem : ""
        }
    }

    setSelectedItem= (val) => {
        this.setState({selectedItem: val.name},
            alert(`${val.name} was clicked`)
        );
    }

    render () {
        return (
            <Section
                title='Purchases'
                addButtonTitle='Add New Purchase'
                isListPage
                headers={this.state.headers}
                items={this.state.purchases}
            />
        );
    }
}

export default Purchases;