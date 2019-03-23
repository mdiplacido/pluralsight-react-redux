import React from 'react';
import { NavLink } from 'react-router-dom';
import LoadingDots from './loading-dots';

export interface HeaderProps {
    loading: boolean;
}

const Header = (props: HeaderProps) => {
    return (
        <nav>
            <NavLink to="/home" activeClassName="active">Home</NavLink>
            {" | "}
            <NavLink to="/courses" activeClassName="active">Courses</NavLink>
            {" | "}
            <NavLink to="/cart" activeClassName="active">Cart</NavLink>
            {" | "}
            <NavLink to="/checkout" activeClassName="active">Checkout</NavLink>
            {" | "}                        
            <NavLink to="/about" activeClassName="active">About</NavLink>
            {
                props.loading &&
                <LoadingDots dots={20} interval={100} />
            }
        </nav>
    )
}

export default Header
