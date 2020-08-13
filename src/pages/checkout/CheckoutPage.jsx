import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectCartItems,
  selectCartItemsTotal
} from '../../redux/cart/CartSelector';

import CheckoutItem from '../../components/checkout-item/CheckoutItem';

import './CheckoutPage.scss';

const CheckoutPage = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.length !== 0 ? (
      cartItems.map(cartItem => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))
    ) : (
      <span className='empty-words'>Your cart is empty.</span>
    )}

    <div className="total">
      <span>Total: ${total}</span>
    </div>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartItemsTotal
});

export default connect(mapStateToProps)(CheckoutPage);