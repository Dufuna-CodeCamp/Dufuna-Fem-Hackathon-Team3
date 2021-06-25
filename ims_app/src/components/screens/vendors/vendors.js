import React, { Component } from 'react';
import Section from '../../includes/section/section';


class Vendors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers : [
                {'text' : 'Vendor\'s Name', 'value' : "name"},
                {'text' : 'Address', 'value' : "address"},
                {'text' : 'Phone Number', 'value' : "phone"},
                {'text' : 'Email', 'value' : "email"},
            ],
            vendors : [
                {"name" : "Victoria Dunah", "address" : "Abuja", "phone" : "08033888552", "email": "victoriadue@mail.com"},
                {"name" : "Sola Adams", "address" : "Lagos", "phone" : "08033665434", "email": "solaadams@mail.com"},
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
                title='Vendors'
                addButtonTitle='Add a new Vendor'
                isListPage
                addSerialNumber
                addActionBtn
                onActionClick={this.setSelectedItem}
                headers={this.state.headers}
                items={this.state.vendors}
            />
        );
    }
}

export default Vendors;