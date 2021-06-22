import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'
import Toolbar from './toolbar/toolbar';
import Sidebar from './sidebar/sidebar';
import Homepage from '../screens/homepage/homepage';
import Inventories from '../screens/invetories/inventories';

const Nav = props => {
    return (
        <Router>
            {(window.location.pathname !== '/' 
            && window.location.pathname !== '/homepage') 
            && <Toolbar />}
            <div className='d-flex' style={{height: '100vh'}}>
            {(window.location.pathname !== '/' 
            && window.location.pathname !== '/homepage') 
            && <Sidebar />}
            <Switch>
                <Route exact path={['/', '/homepage']} component={Homepage} />
                <Route exact path='/inventories' component={Inventories} />
            </Switch>
            </div>
        </Router>
    )
}

export default Nav;