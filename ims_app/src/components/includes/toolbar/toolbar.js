import React, { Component } from 'react';
import LogoImage from '../../../assets/icons/logo.png';
import GearIcon from '../../../assets/icons/Gear.png';
import HelpIcon from '../../../assets/icons/Help.png';
import BellIcon from '../../../assets/icons/Doorbell.png';
import ProfileIcon from '../../../assets/images/Picture.png';

import './style.css';
 
class Toolbar extends Component {
    render() {
        return (
            <div id='toolbar'>
                <ul className='toolbar'>
                    <li><a  className= "logo" href='/homepage'><img src= {LogoImage} alt="logo"/></a></li>
                    <h1 className= "name">Omnix</h1>
                    <li><a className= "settings" href='/setting'><img src= {GearIcon} alt="settings" /></a></li>
                    <li><a className= "help" href='/help'><img src={HelpIcon} alt="help"/></a></li>
                    <li><a className= "notification" href='/notification'><img src={BellIcon} alt="notification"/></a></li>
                    <li><a className= "profile" href='/profile'><img src={ProfileIcon} alt="Profile"/></a></li>
                </ul>
            </div>
        )
    }
}

export default Toolbar;