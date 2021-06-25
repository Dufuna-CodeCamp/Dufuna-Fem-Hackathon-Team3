import React, { Component } from 'react';
import Logo from '../../../assets/images/HomeLogo.png';
import Button from '../../includes/button/button';
import './style.css';

class Homepage extends Component {
    render() {
        return (
            <div id='container'>
                <div id='vertical-center'>
                    <div className='text-center mb-3'>
                        <a href='/categories'>
                            <img src={Logo} alt='homepage logo' width='55%' style={{cursor: 'pointer'}}/>
                        </a>
                    </div>
                    <div className='text-center'>
                        <p className='d-flex align-items-center justify-content-center mb-1'>
                            Welcome to
                            <span className='font2' style={{fontSize: '30px'}}>
                            &nbsp;Omnix</span>
                        </p>
                        <p className='mb-2'>Inventory Management System</p>
                        <Button
                            name='Proceed'
                            href='/inventories'
                            style={{width:'200px'}}
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default Homepage;
