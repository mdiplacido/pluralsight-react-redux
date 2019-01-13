import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class HomeContainer extends Component {
    render() {
        return (
            <div className="jumbotron">
                <h1>Pluralsight Administration</h1>
                <p>React, Redux and React Router in TS for ultra-responsive web apps.</p>
                <Link to="About" className="btn btn-primary btn-lg">Learn more</Link>
            </div>
        )
    }
}
