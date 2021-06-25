import React, { Component } from 'react'
import AddButton from '../addButton/addButton';
import Table from '../table/table';

class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHomePage: false,
            pathname: ''
        }
    }

    render() {
        return (
            <div className='page'>
                <p className='title mb-3 mt-2' style={{paddingLeft: '30px'}}>{this.props.title}</p>
                <div
                    className='pl-3'
                    style={{ height: '36px', backgroundColor: '#C4C4C4' }}>
                    <AddButton addButtonTitle={this.props.addButtonTitle} />
                </div>
                {this.props.isListPage &&
                        <Table 
                            addActionBtn={this.props.addActionBtn}
                            addSerialNumber={this.props.addSerialNumber}
                            headers={this.props.headers}
                            items={this.props.items}
                            onActionClick={this.props.onActionClick}
                        />
                }
            </div>
        )
    }
}

export default Nav;