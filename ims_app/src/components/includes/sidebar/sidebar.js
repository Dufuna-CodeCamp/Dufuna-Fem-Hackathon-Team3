import React, { Component } from 'react';
import HomeIcon from '../../../assets/icons/home.svg';
import CategoryIcon from '../../../assets/icons/category.svg';
import InventoryIcon from '../../../assets/icons/inventories.svg';
import VendorIcon from '../../../assets/icons/vendors.png';
import PurchaseIcon from '../../../assets/icons/purchases.png';
import SaleIcon from '../../../assets/icons/sales.png';

import './style.css';

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <ul>
                    <li><a href='/homepage'><img src={HomeIcon} alt="home icon"/>Homepage</a></li>
                    <li><a href='/categories'><img src={CategoryIcon} alt="category icon" />Categories</a></li>
                    <li><a href='/inventories'><img src={InventoryIcon} alt="inventory icon"/>Inventories</a></li>
                    <li><a href='/vendors'><img src={VendorIcon} alt="vendoricon" class="filter"/>Vendors</a></li>
                    <li><a href='/purchases'><img src={PurchaseIcon} alt="purchaseicon" class="filter"/>Purchases</a></li>
                    <li><a href='/sales'><img src={SaleIcon} alt="Sale icon" class="filter"/>Sales</a></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;