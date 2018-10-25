import React, { Component } from 'react';
import { Header } from '../../components';
import { Sidebar } from '../../components';
import Home from '../home';
import Preferences from '../preferences';
import Transactions from '../transactions';
import NotFound from '../notFound';
import { Route, Switch, Redirect } from 'react-router'
import { BrowserRouter as Router } from "react-router-dom";

class HomeContainer extends Component {
    render() {
        return (
            <div>
                <Header></Header>
                <Sidebar></Sidebar>
                <div className="content">
                    <div className="container-fluid">
                        <Router>
                            <Switch>
                                <Route path='/home' component={Home} />
                                <Redirect exact from='/' to='/home' />
                                <Route path='/preferences' component={Preferences} />
                                <Route path='/transactions' component={Transactions} />
                                <Route component={NotFound} />
                            </Switch>
                        </Router>
                    </div>
                </div>
            </div >
        );
    }
}

export default HomeContainer;