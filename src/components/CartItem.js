import React, { Component } from 'react';
import styles from './CartItem.css.js';

class CartItem extends Component {
    render() {
        return (
            <div style={styles.cartItem} className="row">
                <div className="col-md-8">{this.props.title}</div>
                <div className="col-md-4">{this.props.price}</div>  
            </div>
        );
    }
}
export default CartItem;