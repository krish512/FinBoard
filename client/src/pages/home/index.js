import React, { Component } from 'react';
import { config } from '../../configs';

class Home extends Component {
    render() {
        const cardStyle = {
            padding: '15px 8px'
        };
        const monthNames = ["January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];

        const d = new Date();
        return (
            <div>
                <div className="page-title">
                    Summary
                    <div className="float-right">{monthNames[d.getMonth()]}</div>
                </div>
                <div className="row">
                    <div className="col-md-3 px-2 text-center">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text colorPrimary">Fixed Expenses</p>
                                <h5 className="card-title">{config.currency} 76,000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 px-2 text-center">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text colorPrimary">Spared Amount</p>
                                <h5 className="card-title">{config.currency} 28,000</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 px-2 text-center">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text colorPrimary">Expected Transactions</p>
                                <h5 className="card-title">8</h5>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-3 px-2 text-center">
                        <div className="card">
                            <div className="card-body">
                                <p className="card-text colorPrimary">Fixed Expenses</p>
                                <h5 className="card-title">{config.currency} 76,000</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12" style={cardStyle}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Expected Transaction Summary</h5>
                                <div className="row no-gutters padding-10v">
                                    <div className="col-md-1 text-center">1.</div>
                                    <div className="col-md-6">LIC Premium</div>
                                    <div className="col-md-3">{monthNames[d.getMonth()]} 3, {d.getFullYear()} - Quarterly</div>
                                    <div className="col-md-2 text-center colorPrimary">{config.currency} 15,000</div>
                                </div>
                                <div className="row no-gutters padding-10v">
                                    <div className="col-md-1 text-center">2.</div>
                                    <div className="col-md-6">Airtel Mobile Bill</div>
                                    <div className="col-md-3">{monthNames[d.getMonth()]} 7, {d.getFullYear()} - Quarterly</div>
                                    <div className="col-md-2 text-center colorPrimary">{config.currency} 472</div>
                                </div>
                                <div className="row no-gutters padding-10v">
                                    <div className="col-md-1 text-center">3.</div>
                                    <div className="col-md-6">DEN TV Bill</div>
                                    <div className="col-md-3">{monthNames[d.getMonth()]} 11, {d.getFullYear()} - Quarterly</div>
                                    <div className="col-md-2 text-center colorPrimary">{config.currency} 260</div>
                                </div>
                                <div className="row no-gutters padding-10v">
                                    <div className="col-md-1 text-center">4.</div>
                                    <div className="col-md-6">Kotak Accidental Damage Insurance</div>
                                    <div className="col-md-3">{monthNames[d.getMonth()]} 19, {d.getFullYear()} - Quarterly</div>
                                    <div className="col-md-2 text-center colorPrimary">{config.currency} 6,750</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Home;