import React, { Component } from 'react';
import Product from './Product';
import styles from './ProductList.css.js';
import PropTypes from 'prop-types';

class ProductList extends Component {
    render() {
        const inCart = this.props.inCart;
        const products = this.props.products;
        if (products.length > 0) {
            return (
                <ul style={styles.productList}>
                    {products.map(product => (
                        <li key={product.id} style={styles.productListItem} >
                            <Product  {...product} 
                                      inCart={inCart.includes(product.id)}
                                      addToCart={this.props.addToCart}
                                      removeFromCart={this.props.removeFromCart}
                            />
                        </li>
                    ))}
                </ul>
            );
        } else {
            return null;
        }
    }
}

ProductList.propTypes = {
    addToCart: PropTypes.func.isRequired,
    removeFromCart: PropTypes.func.isRequired,
    inCart: PropTypes.array.isRequired,
    products: PropTypes.array.isRequired
};
export default ProductList;