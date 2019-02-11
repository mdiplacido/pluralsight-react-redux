import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingDots from './loading-dots';

const Header = () => {
    return (
        <nav>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
            {" | "}
            <NavLink to="/about" activeClassName="active">About</NavLink>
            <LoadingDots dots={20} interval={100} />
        </nav>
    )
}

export default Header
