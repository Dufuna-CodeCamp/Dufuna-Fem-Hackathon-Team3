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
            isListPage: true,
            isAddPage: false,
            isEditPage: false,
            selectedItem : ""
        }
    }

    setSelectedItem= (val) => {
        this.setState({selectedItem: val});
        this.showEditPage();
    }

    showAddPage = () => {
        this.setState({isListPage: false, isAddPage: true, isEditPage: false})
    }

    showEditPage = () => {
        this.setState({isListPage: false, isAddPage: false, isEditPage: true})
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
            />
        );
    }
}

export default Vendors;