import React, { Component } from 'react';
import Section from '../../includes/section/section';
import './style.css';

class Inventories extends Component {
    constructor() {
        super();
        this.state = {
            headers : [
                {'text' : 'Inventory Name', 'value' : "name"},
                {'text' : 'Quantity', 'value' : "quantity"},
                {'text' : 'Status', 'value' : "status"}
            ],
            inventories : [
                {"name" : "Mama Gold Rice", "quantity" : '0', "status" : "out of stock"},
                {"name" : "Indomie", "quantity" : '23', "status" : "in stock"},
                {"name" : "Dabur Herbal Toothpaste", "quantity" : '5', "status" : "low stock"}
            ],
            isListPage: true,
            isAddPage: false
        }
    }

    componentDidMount() {
        const tds = document.getElementsByTagName('td');
        for (let i = 0; i < tds.length; i++) {
            if(tds[i].innerHTML === 'out of stock') {
                tds[i].classList.add('out-of-stock')
            }
            if(tds[i].innerHTML === 'in stock') {
                tds[i].classList.add('in-stock')
            }
            if(tds[i].innerHTML === 'low stock') {
                tds[i].classList.add('low-stock')
            }
        };
    }

    showAddPage = () => {
        this.setState({isListPage: false, isAddPage: true})
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
            />
        );
    }
}

export default Inventories;
