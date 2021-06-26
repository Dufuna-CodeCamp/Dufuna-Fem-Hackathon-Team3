import React, { Component } from 'react';
import Edit from '../../../assets/icons/Edit.svg'
import './style.css';

class Table extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div id='tablediv'>
                <table className='mt-2' style={{ width: '100%' }}>
                    <thead>
                        {this.props.addSerialNumber &&
                            (
                                <th>
                                    S/N
                                </th>
                            )}
                        {this.props.headers.map((header, index) => {
                            return (
                                <th key={index}>
                                    {header.text}
                                </th>
                            )
                        })
                        }
                        {this.props.addActionBtn &&
                            (
                                <th>
                                    Action
                                </th>
                            )}
                    </thead>
                    {this.props.items.length > 0 &&
                        <tbody>
                            {this.props.items.map((item, index) => {
                                return (
                                    <tr>
                                        {this.props.addSerialNumber &&
                                            (
                                                <td>
                                                    {(index + 1 < 10 ? '0' : '') + (index + 1)}
                                                </td>
                                            )
                                        }
                                        {this.props.headers.map((value, index) => {
                                            const val = this.props.headers[index].value;
                                            return (
                                                <td>
                                                    {item[val] || ''}
                                                </td>
                                            )
                                        })
                                        }
                                        {this.props.addActionBtn &&
                                            (
                                                <td onClick={() => this.props.onActionClick(item)}
                                                    style={{ cursor: 'pointer' }}>
                                                    <img
                                                        src={Edit}
                                                        alt='Edit icon'
                                                        width='20em'
                                                    />
                                                </td>
                                            )
                                        }
                                    </tr>
                                )
                            })
                            }
                        </tbody>
                    }
                </table>
                {!this.props.items.length > 0 &&
                    <p className='text-center mt-3 pr-5'
                        style={{ fontSize: '18px' }}
                    >There is no item on this list</p>}
            </div>
        )
    }
}

export default Table;