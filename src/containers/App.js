import React, { Component } from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';

import * as actionCreators from '../actions';
import Cart from '../components/Cart';
import ProductList from '../components/ProductList';


class App extends Component {
 
  getProduct(products, item) {
    return products.find(product => item === product.id);
  }
 
  shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
  }
  componentDidMount() {
    fetch('http://localhost:3000/data/products.json')
      .then(response => response.json()
      .then(products => this.shuffleArray(products))
      .then(products => {
        this.props.loadProducts(products);
      }));
  }
  render() {
    let items = [];
    if (this.props.products.length > 0) {
      items = this.props.items.map(id => this.getProduct(this.props.products, id));
    }
    
    return (
      <div className="container">
        <header className="row">
          <div className="col-md-12">
            <h1>Welcome to React Bookstore</h1>
          </div>
        </header>
  
        <div className="row">
          <div className="col-md-8">
            <ProductList  addToCart={this.props.addToCart}
                          removeFromCart={this.props.removeFromCart}
                          products={this.props.products} 
                          inCart={this.props.items} 
            />
          </div>
          <div className="col-md-4">
            <Cart 
              inCart={items} 
              removeFromCart={this.props.removeFromCart} 
              submitCart={this.props.submitCart} 
            />
          </div>
        </div>
  
        <footer>
  
        </footer>
      </div>
    );
  }
}

const mapStateToProps = (state, proprs) => {
  return {
    items: state.cart.items,
    products: state.products.products
  }
};
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
};
export default connect(mapStateToProps, mapDispatchToProps) (App);
