import React, { Component } from 'react';
import CartItem from './CartItem';
import styles from './Cart.css.js';

class Cart extends Component {
    handleSubmitCart() {
        this.props.submitCart(this.props.inCart);
    }
    render() {
        let total = 0;
        this.props.inCart.forEach(item => {
            total += Number(item.price);
        })
        return (
            <div style={styles.cart}>
                <h3>Shopping Cart</h3>
                <div>
                    { this.props.inCart.map(item => ( 
                        <CartItem {...item} />  
                    ))}
                </div>
                <div>Total: ${total} USD</div>
                <div>
                    <button onClick={this.handleSubmitCart.bind(this)} >
                    Check Out
                    </button>
                </div>
            </div>
        );
    }
    
}
export default Cart;