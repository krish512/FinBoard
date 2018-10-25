import React, { Component } from 'react';
import { config } from '../../configs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons'
import './header.css';

export class Header extends Component {
    render() {
        return (
            <header>
                <nav className="navbar navbar-expand-md fixed-top navbar-light">
                    <div className="navbar-collapse collapse w-100 order-1 order-md-0 dual-collapse2"></div>
                    <div className="mx-auto order-0">
                        <a className="navbar-brand mx-auto" href="/">{config.appName}</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target=".dual-collapse2">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="navbar-collapse collapse w-100 order-3 dual-collapse2">
                        <ul className="navbar-nav ml-auto">
                            <li className="nav-item">
                                <a className="nav-link" href="/auth/logout">
                                    <FontAwesomeIcon icon={faSignOutAlt} />
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </header>
        );
    }
}

export default Header;