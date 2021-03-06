import React from "react";
import {connect} from 'react-redux';
import {createStructuredSelector} from "reselect";

import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selector";
import StripeCheckoutButton from '../../component/stripe-button/stripe-button.component';

import './checkout.styles.scss'
import CheckoutItem from "../checkout-item/checkout-item.components";

const CheckoutPage = ({cartItems, cartTotal}) => (
    <div className='checkout-page'>
        <div className='checkout-header'>
            <div className='header-block'>
                <span>Product</span>
            </div>
            <div className='header-block'>
                <span>Description</span>
            </div>
            <div className='header-block'>
                <span>Quantity</span>
            </div>
            <div className='header-block'>
                <span>Price</span>
            </div>
            <div className='header-block'>
                <span>Remove</span>
            </div>
        </div>
        {
            cartItems.map((cartItem) =>  <CheckoutItem key={cartItem.id} item={cartItem}/>)
        }
        <div className='total'>
            <span>TOTAL ${cartTotal}</span>
        </div>
        <StripeCheckoutButton price={cartTotal} />
    </div>
);

const mapStateToProps =  createStructuredSelector({
   cartItems:selectCartItems,
   cartTotal:selectCartTotal
});

export default connect(mapStateToProps)(CheckoutPage);