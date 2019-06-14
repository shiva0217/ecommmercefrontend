import React, { Component } from "react";
import { getProducts } from "../services/fakeProductService";
import Like from "../common/like";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
class Products extends Component {
 state = {
   products: getProducts(),
   pageSize: 2,
   currentPage: 1
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
  handleLike = likedProduct => {
    const products = [...this.state.products];
    const index = products.indexOf(likedProduct);
    products[index].liked = !products[index].liked;
    this.setState({ products });
  };
  handlePageChange = page => {
    this.setState({ currentPage: page });
  };
 

  // totalquantity = QtyOfProducts => {
  //   // const products = [...this.state.products];
  //   // const index = products.indexOf(QtyOfProducts);
  
  // };
 

  render() {
    const { length: count } = this.state.products;
    const { products: allProducts, currentPage, pageSize } = this.state;
    const products = paginate(allProducts, currentPage, pageSize);
 
    return (
      <React.Fragment>
        <body background="bgimage.jpg"></body>
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
        <table className="table table-condensed bg-light" >
          <thead className="thead-dark">
            <tr class="info">
              <th>Image</th>
              <th>Name</th>
              <th>
                Price <i className="fa fa-eur" aria-hidden="true" />
              </th>
              <th>Category</th>
              <th>Action</th>
              <th>
                Qty of <i className="fa fa-shopping-cart" aria-hidden="true" />
              </th>
            </tr>
          </thead>
          <tbody>
            {this.showNoProductsWarning(count)}
            {products.map(product => (
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
                  <Like
                    liked={product.liked}
                    onClick={() => this.handleLike(product)}
                  />
                  <button
                    onClick={() => this.handleDeleteFromProducts(product)}
                    className="btn btn-danger m-2"
                  >
                    x
                  </button>
                </td>
                <td>
                <span className="badge badge-light m-2">
                 {/* {this.totalquantity()} */}
                </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <Pagination
         itemsCount={count}
         pageSize={this.state.pageSize}
         currentPage={this.state.currentPage}
         onPageChange={this.handlePageChange}
       />

      </React.Fragment>
    );
  }
}

export default Products;