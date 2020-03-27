import React from "react";
import {Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../asset/logo.svg';

import './header.styles.scss';

const Header = () => (
    <div className='header'>
        <Link className='logo-container' to='/'>
           <Logo className='logo'/>
        </Link>
        <div className='option-container'>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
            </div>
        </div>
    </div>
);

export default Header;
