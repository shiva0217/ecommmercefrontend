import React, { Component } from "react";
import { getProducts } from "../services/fakeProductService";
class Products extends Component {
  state = {
    products: getProducts()
  };

  handleDeleteFromProducts = productToDelete => {
    const actualProducts = this.state.products;
    const filteredProducts = actualProducts.filter(
      product => product._id !== productToDelete._id
    );
    this.setState({ products: filteredProducts });
  };

  handleAddProductToCart = productToAdd => {
    const products = [...this.state.products];
    const index = products.indexOf(productToAdd);
    products[index].numOfItemsInCart++;
    this.setState({ products });
  };

  handleDeleteProductFromCart = productToDeleteFromCart => {
    const products = [...this.state.products];
    const index = products.indexOf(productToDeleteFromCart);
    products[index].numOfItemsInCart--;
    this.setState({ products });
  };

  getTotalNumOfItemsInCart() {
    return this.state.products.reduce((a, c) => a + c.numOfItemsInCart, 0);
  }

  showNoProductsWarning(numOfProducts) {
    if (numOfProducts === 0) {
      return " No products found";
    }
  }


  resetNumOfItemsInCart() {
    const resetcartProducts = this.state.products.map(c=> {
      c.numOfItemsInCart=0
      return c;
    });
    this.setState({ products : resetcartProducts });
  }

 

  render() {
    const { length: count } = this.state.products;

    return (
      <React.Fragment>
        
        <button  className="btn btn-success"
        onClick={() =>  this.resetNumOfItemsInCart()}
        >
          Reset          
        </button>
        <button className="btn btn-primary pull-right">
          <i className="fa fa-shopping-cart" aria-hidden="true" />
          <span className="badge badge-light m-2">
            {this.getTotalNumOfItemsInCart()}
          </span>
        </button>
        <table className="table">
          <thead className="thead-light">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>
                Price <i className="fa fa-eur" aria-hidden="true" />
              </th>
              <th>Category</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.showNoProductsWarning(count)}
            {this.state.products.map(product => (
              <tr key={product._id}>
                <td>
                  <img
                    src={product.image}
                    width={50}
                    height={50}
                    alt={product.name}
                  />
                </td>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>{product.category}</td>
                <td>
                  <button
                    onClick={() => this.handleAddProductToCart(product)}
                    className="btn btn-success"
                  >
                    +
                  </button>
                  <button
                    onClick={() => this.handleDeleteProductFromCart(product)}
                    className="btn btn-warning m-2"
                    disabled={product.numOfItemsInCart === 0 ? "disabled" : ""}
                  >
                    -
                  </button>
               
                  <button
                    onClick={() => this.handleDeleteFromProducts(product)}
                    className="btn btn-danger m-2"
                  >
                    x
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </React.Fragment>
    );
  }
}

export default Products;