import React, { Component } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import Toolbar from './toolbar/toolbar';
import Sidebar from './sidebar/sidebar';
import Homepage from '../screens/homepage/homepage';
import Categories from '../screens/categories/categories';
import Inventories from '../screens/inventories/inventories';
import Vendors from '../screens/vendors/vendors';
import Purchases from '../screens/purchases/purchases';
import Sales from '../screens/sales/sales';


class Nav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isHomePage: false
        }
    }


    componentDidMount() {
        if (window.location.pathname === '/'
            || window.location.pathname === '/homepage')
            this.setState({ isHomePage: true });
    };

    render() {
        return (
            <Router>
                {!this.state.isHomePage && <Toolbar />}
                <div className={!this.state.isHomePage && 'd-flex'} style={{ height: '100vh' }}>
                    {!this.state.isHomePage && <Sidebar />}
                    <Switch>
                        <Route exact path={['/', '/homepage']} component={Homepage} />
                        <Route exact path='/inventories' component={Inventories} />
                        <Route exact path='/categories' component={Categories} />
                        <Route exact path='/inventories' component={Inventories} />
                        <Route exact path='/vendors' component={Vendors} />
                        <Route exact path='/purchases' component={Purchases} />
                        <Route exact path='/sales' component={Sales} />
                    </Switch>
                </div>
            </Router>
        )
    }
}

export default Nav;