import React from 'react';
import { useLocation } from "react-router-dom";
import HomeIcon from '../../../assets/icons/home.svg';
import CategoryIcon from '../../../assets/icons/category.svg';
import InventoryIcon from '../../../assets/icons/inventories.svg';
import VendorIcon from '../../../assets/icons/vendors.png';
import PurchaseIcon from '../../../assets/icons/purchases.png';
import SaleIcon from '../../../assets/icons/sales.png';

import './style.css';

const Sidebar = () => {
    const location = useLocation();
    const { pathname } = location;
    const splitPathname = pathname.split("/");
    return (
        <div className='sidebar'>
            <ul>
                <a href='/homepage'>
                    <li className={splitPathname[1] === "" || splitPathname[1] === "homepage" ? "active" : ""}>
                        <img src={HomeIcon} alt="home icon" />Homepage
                    </li>
                </a>
                <a href='/categories'>
                    <li className={splitPathname[1] === "categories" ? "active" : ""}>
                        <img src={CategoryIcon} alt="category icon" width='16px' />Categories
                    </li>
                </a>
                <a href='/inventories'>
                    <li className={splitPathname[1] === "inventories" ? "active" : ""}>
                        <img src={InventoryIcon} alt="inventory icon" width='18px' />Inventories
                    </li>
                </a>
                <a href='/vendors'>
                    <li className={splitPathname[1] === "vendors" ? "active" : ""}><img src={VendorIcon} alt="vendoricon" className="filter" />
                        Vendors
                    </li>
                </a>
                <a href='/purchases'>
                    <li className={splitPathname[1] === "purchases" ? "active" : ""}><img src={PurchaseIcon} alt="purchaseicon" className="filter" />
                        Purchases
                    </li>
                </a>
                <a href='/sales'>
                    <li className={splitPathname[1] === "sales" ? "active" : ""}><img src={SaleIcon} alt="Sale icon" className="filter" />
                        Sales
                    </li>
                </a>
            </ul>
        </div>
    )
}

export default Sidebar;