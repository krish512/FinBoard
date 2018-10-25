import React, { Component } from 'react';
import './sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faExchangeAlt, faCog, faFileAlt } from '@fortawesome/free-solid-svg-icons'

export class Sidebar extends Component {
    render() {
        return (
            <div className="sidebar">
                <ul className="sidebar-items">

                    <li className="sidebar-item">
                        <a href="/" className="nav-link active">
                            <FontAwesomeIcon icon={faHome} size="2x" />
                            Home
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="transactions" className="nav-link">
                            <FontAwesomeIcon icon={faExchangeAlt} size="2x" />
                            Transactions
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="reports" className="nav-link">
                            <FontAwesomeIcon icon={faFileAlt} size="2x" />
                            Reports
                        </a>
                    </li>
                    <li className="sidebar-item">
                        <a href="preferences" className="nav-link">
                            <FontAwesomeIcon icon={faCog} size="2x" />
                            Preferences
                        </a>
                    </li>
                </ul>
            </div >
        );
    }
}

export default Sidebar;