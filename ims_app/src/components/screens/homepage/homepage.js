import React, { Component } from 'react';

class Homepage extends Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <p>Welcome to IMS</p>
                    <p className='text-white'><a href='/inventories'>Proceed</a></p>
                </header>
            </div>
        );
    }
}

export default Homepage;
