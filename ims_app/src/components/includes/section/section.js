import React, { Component } from 'react'
import AddButton from '../addButton/addButton';
import Table from '../table/table';
import Form from '../../screens/form'
import './style.css';

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
                <p className='title mb-3 mt-2' style={{ paddingLeft: '30px' }}>
                    {this.props.mainTitle}
                </p>
                {this.props.isListPage && <div
                    className='pl-3'
                    style={{ height: '36px', backgroundColor: '#C4C4C4' }}>
                    <AddButton
                        title={this.props.title}
                        onAddBtnClick={this.props.onAddBtnClick}
                    />
                </div>
                }
                {this.props.isAddPage &&
                    <div className='greyback'>Add a new {this.props.title}</div>}
                {this.props.isEditPage &&
                    <div className='greyback'>Edit {this.props.title}</div>}
                {this.props.isListPage &&
                    <Table
                        addActionBtn={this.props.addActionBtn}
                        addSerialNumber={this.props.addSerialNumber}
                        headers={this.props.headers}
                        items={this.props.items}
                        onActionClick={this.props.onActionClick}
                    />
                }
                {
                    !this.props.isListPage &&
                    <Form
                        name={this.props.title}
                        type={this.props.isAddPage ? 'add' :
                            this.props.isEditPage ? 'edit' :
                                undefined
                        }
                        item={this.props.selectedItem}
                        handleFormSubmit={(val) => this.props.handleFormSubmit(val)}
                        closeForm={this.props.onCloseForm}
                    />
                }
            </div>
        )
    }
}

export default Nav;