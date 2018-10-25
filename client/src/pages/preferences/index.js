import React, { Component } from 'react';
import { config } from '../../configs';

class Preferences extends Component {
    render() {
        const cardStyle = {
            padding: '15px 8px'
        };
        return (
            <div>
                <div className="page-title">
                    Preferences
                </div>
                <div className="row">
                    <div className="col-md-12" style={cardStyle}>
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Expected Transaction Summary</h5>
                                <div className="row no-gutters padding-10v">
                                    <div className="col-md-1 text-center">1.</div>
                                    <div className="col-md-6">LIC Premium</div>
                                    <div className="col-md-3">Quarterly</div>
                                    <div className="col-md-2 text-center">{config.currency} 15,000</div>
                                </div>
                                <div className="row no-gutters padding-10v">
                                    <div className="col-md-1 text-center">2.</div>
                                    <div className="col-md-6">Kotak Accidental Damage Insurance</div>
                                    <div className="col-md-3">Quarterly</div>
                                    <div className="col-md-2 text-center">{config.currency} 6,750</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        );
    }
}

export default Preferences;