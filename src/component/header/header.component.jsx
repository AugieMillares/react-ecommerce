import React from "react";
import {connect} from 'react-redux';
import { createStructuredSelector } from 'reselect'

import {auth} from '../../firebase/firebase.utils';

import {ReactComponent as Logo} from '../../asset/logo.svg';
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import {selectCartHidden} from "../../redux/cart/cart.selector";
import {selectCurrentUser} from "../../redux/user/user.selector";

import {HeaderContainer,LogoContainer,Options, OptionLink } from './header.styles'


const Header = ({currentUser, cartHidden}) => {
    return(
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo'/>
            </LogoContainer>
            <Options>
                <OptionLink to='/shop'>SHOP</OptionLink>
                <OptionLink to='/shop'>CONTACT</OptionLink>
                {
                    currentUser ?
                        <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink>
                        :
                        <OptionLink to='/signin'>SIGN IN</OptionLink>
                }
                <CartIcon/>
            </Options>
            {
                cartHidden ? null : <CartDropdown/>
            }

        </HeaderContainer>
    );
}

const mapStateToProp = createStructuredSelector ({
    currentUser:selectCurrentUser,
    cartHidden: selectCartHidden
});

export default connect(mapStateToProp)(Header);

