import React, { Component } from 'react';
import Section from '../../includes/section/section';
import './style.css';

class Inventories extends Component {
    constructor() {
        super();
        this.state = {
            headers: [
                { 'text': 'Inventory Name', 'value': "name" },
                { 'text': 'Quantity', 'value': "quantity" },
                { 'text': 'Status', 'value': "status" }
            ],
            inventories: [
                { "name": "Mama Gold Rice", "quantity": '0', "status": "out of stock", 'id': '1' },
                { "name": "Indomie", "quantity": '23', "status": "in stock", 'id': '2' },
                { "name": "Dabur Herbal Toothpaste", "quantity": '5', "status": "low stock", 'id': '3' }
            ],
            isListPage: true,
            isAddPage: false
        }
    }

    componentDidMount() {
        const tds = document.getElementsByTagName('td');
        for (let i = 0; i < tds.length; i++) {
            if (tds[i].innerHTML === 'out of stock') {
                tds[i].classList.add('out-of-stock')
            }
            if (tds[i].innerHTML === 'in stock') {
                tds[i].classList.add('in-stock')
            }
            if (tds[i].innerHTML === 'low stock') {
                tds[i].classList.add('low-stock')
            }
        };
        this.setState({ update: true })
    }

    componentDidUpdate() {
        const tds = document.getElementsByTagName('td');
        for (let i = 0; i < tds.length; i++) {
            if (tds[i].innerHTML === 'out of stock') {
                tds[i].classList.add('out-of-stock')
            }
            if (tds[i].innerHTML === 'in stock') {
                tds[i].classList.add('in-stock')
            }
            if (tds[i].innerHTML === 'low stock') {
                tds[i].classList.add('low-stock')
            }
        };
    }

    showListPage = () => {
        this.setState({ isListPage: true, isAddPage: false })
    }

    showAddPage = () => {
        this.setState({ isListPage: false, isAddPage: true })
    }
    handleFormSubmit = (val) => {
        let inventory = {
            name: val.product,
            quantity: val.quantity === ''? '0' : val.quantity,
            status: val.quantity === 0 || val.quantity === ''? 'out of stock' :
                val.quantity > 0 && val.quantity < 10 ? 'low stock' :
                    'in stock',
            id: this.state.inventories.length + 1
        };
        this.setState({
            inventories: [...this.state.inventories, inventory],
            isListPage: true, isAddPage: false
        });
    }

    render() {
        return (
            <Section
                mainTitle='Inventories'
                title='inventory'
                isListPage={this.state.isListPage}
                isAddPage={this.state.isAddPage}
                addSerialNumber
                onAddBtnClick={this.showAddPage}
                headers={this.state.headers}
                items={this.state.inventories}
                onCloseForm={this.showListPage}
                handleFormSubmit={this.handleFormSubmit}
            />
        );
    }
}

export default Inventories;
