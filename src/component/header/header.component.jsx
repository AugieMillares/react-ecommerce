import React from "react";
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../asset/logo.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";


import './header.styles.scss';

const Header = ({currentUser, cartHidden}) => {
    return(
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
            </Link>
            <div className='options'>
                <Link className='option' to='/shop'>SHOP</Link>
                <Link className='option' to='/shop'>CONTACT</Link>
                {
                    currentUser ?
                        <div className='option' onClick={() => auth.signOut()}>SIGN OUT</div>
                        :
                        <Link className='option' to='/signin'>SIGN IN</Link>
                }
                <CartIcon/>
            </div>
            {
                cartHidden ? null : <CartDropdown/>
            }

        </div>
    );
}

const mapStateToProp = createStructuredSelector ({
    currentUser:selectCurrentUser,
    cartHidden: selectCartHidden
});

export default connect(mapStateToProp)(Header);

