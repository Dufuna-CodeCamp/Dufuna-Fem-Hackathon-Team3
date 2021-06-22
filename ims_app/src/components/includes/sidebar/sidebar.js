import React, { Component } from 'react';
import { ReactComponent as CategoryIcon } from '../../../assets/icons/Categories.svg';
import './style.css';

class Sidebar extends Component {
    render() {
        return (
            <div className='sidebar'>
                <ul>
                    <li><a href='/homepage'><CategoryIcon />Homepage</a></li>
                    <li><a href='/inventories'>Inventories</a></li>
                </ul>
            </div>
        )
    }
}

export default Sidebar;