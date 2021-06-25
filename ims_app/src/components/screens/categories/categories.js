import React, { Component } from 'react';
import AddCategory from '../../includes/form/AddCategory';


class Categories extends Component {

    render () {
        return (
            <div className = "page">
                <p>Welcome to Categories</p>
                <AddCategory />
            </div>
        );
    }
}

export default Categories;