import React, { Component } from 'react';
import Section from '../../includes/section/section';


class Sales extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers : [
                {'text' : 'Item Sold', 'value' : "name"},
                {'text' : 'Sold at', 'value' : "createdAt"},
                {'text' : 'Sold by', 'value' : "createdBy"},
            ],
            sales : [
                {"name" : "Maggi", "createdAt" : "3/02/2021", "createdBy" : "Lois"},
                {"name" : "Kitchen Table", "createdAt" : "6/08/2023", "createdBy" : "Taiwo"}
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