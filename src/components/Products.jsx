import React, { Component } from "react";
import _ from "lodash";
import { getProducts } from "../services/fakeProductService";
import { getCategories } from "../services/fakeCategoryService";
import Like from "../common/like";
import ListGroup from "../common/listGroup";
import Pagination from "../common/pagination";
import { paginate } from "../utils/paginate";
import ProductsTable from './productsTable';
class Products extends Component {
 state = {
  products: [],
  categories: [],
  pageSize: 3,
  currentPage: 1,
  selectedCategory: {name : "All Categories"},
  sortColumn: { colName: "name", order: "asc" }
};

componentDidMount() {
  const products = getProducts();
  const categories = [{_id: "",name : "All Categories"},...getCategories()];
  this.setState({ products, categories });
}


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


handleSelectCategory = category => {
    this.setState({ selectedCategory: category , currentPage:1});
};


handleSort = sortColumn => {
  this.setState({ sortColumn });
};



  // totalquantity = QtyOfProducts => {
  //   // const products = [...this.state.products];
  //   // const index = products.indexOf(QtyOfProducts);
  
  // };
 

  render() {
    const {
      products: allProducts,
      currentPage,
      selectedCategory,
      pageSize,
      sortColumn
    } = this.state;
    //filter the products basing on category
   const filteredProductsList = selectedCategory._id
   ? allProducts.filter(p => p.category._id === selectedCategory._id)
   : allProducts;
   const sortedProducts = _.orderBy(
    filteredProductsList,
    [sortColumn.colName],
    [sortColumn.order]
  );

     const products = paginate(sortedProducts, currentPage, pageSize);

   
    return (
      <div className="row">
      <div className="col-2">
        <ListGroup
          items={this.state.categories}
          onSelectItem={this.handleSelectCategory}
          selectedItem={this.state.selectedCategory}
        />
      </div>
      <div className="col">
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
        <ProductsTable
           products={products}
           onAddToCart={this.handleAddProductToCart}
           onDeleteFromCart={this.handleDeleteProductFromCart}
           onDeleteFromTable={this.handleDeleteFromProducts}
           onLike={this.handleLike}
           onSort={this.handleSort}
           sortColumn={sortColumn}
         />
        <Pagination
           itemsCount={filteredProductsList.length}
           pageSize={pageSize}
           currentPage={currentPage}
           onPageChange={this.handlePageChange}
       />

      </div>
    </div>
   );
  }
}

export default Products;