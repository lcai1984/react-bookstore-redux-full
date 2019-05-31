import React, { Component } from 'react';
import styles from './Product.css.js';

class Product extends Component {
    handleClick() {
        if (this.props.inCart) {
            this.props.removeFromCart(this.props.id);
        } else {
            this.props.addToCart(this.props.id);
        }
    }
    render() {
        const { title, author, published, lang, pages, image, price } = this.props
        return (
            <div style={styles.product}>
                <img style={styles.thumbnail} 
                     src={image ? "images/" + image : "images/default.jpg"} 
                     alt={title} />
                <h3>{title}</h3>
                <div>by: {author}</div>
                <div>published: {published}</div>
                <div>language: {lang}</div>
                <div>pages: {pages}</div>
                <div>price: ${price}</div>
                <p>
                    <button onClick={this.handleClick.bind(this)}>
                        {this.props.inCart ? "In Cart" : "Add to Cart"} 
                    </button>
                </p>
            </div>
        );
    }
}
export default Product;