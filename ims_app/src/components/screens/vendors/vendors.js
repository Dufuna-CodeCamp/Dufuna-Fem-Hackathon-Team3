import React, { Component } from 'react';
import Section from '../../includes/section/section';


class Vendors extends Component {
    constructor(props) {
        super(props);
        this.state = {
            headers: [
                { 'text': 'Vendor\'s Name', 'value': "name" },
                { 'text': 'Address', 'value': "address" },
                { 'text': 'Phone Number', 'value': "phone" },
                { 'text': 'Email', 'value': "email" },
            ],
            vendors: [
                { "name": "Victoria Dunah", "address": "Abuja", "phone": "08033888552", "email": "victoriadue@mail.com", "id": "1" },
                { "name": "Sola Adams", "address": "Lagos", "phone": "08033665434", "email": "solaadams@mail.com", 'id': '2'},
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
        let vendor = {
            name: val.vendorName,
            address: val.address,
            phone: val.phoneNumber,
            email: val.email,
            id: this.state.vendors.length + 1
        };
        if (this.state.isEditPage)
            index = this.state.selectedItem.id - 1;
        this.state.isAddPage ? this.setState(
            {
                vendors: [...this.state.vendors, vendor]
            }
        ) : this.setState(
            {
                vendors: [...this.state.vendors.slice(0, index),
                vendor,
                ...this.state.vendors.slice(index + 1)]
            })
        this.setState({ isListPage: true, isAddPage: false, isEditPage: false });
    }

    render() {
        return (
            <Section
                mainTitle='Vendors'
                title='vendor'
                isListPage={this.state.isListPage}
                isAddPage={this.state.isAddPage}
                isEditPage={this.state.isEditPage}
                addSerialNumber
                onAddBtnClick={this.showAddPage}
                addActionBtn
                onActionClick={this.setSelectedItem}
                headers={this.state.headers}
                items={this.state.vendors}
                selectedItem={this.state.selectedItem}
                onCloseForm={this.showListPage}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}

export default Vendors;