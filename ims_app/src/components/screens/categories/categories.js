import React, { Component } from 'react';
import AddCategory from './AddCategory';


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