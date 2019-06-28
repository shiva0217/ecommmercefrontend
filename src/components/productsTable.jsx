import Like from "../common/like";
import React, { Component } from "react";
class ProductsTable extends Component {
 showNoProductsWarning(numOfProducts) {
   if (numOfProducts === 0) {
     return " No products found";
   }
 }

 getSortIcon = colName => {
  const { sortColumn } = this.props;
  //show the sort icon only on the clicked column
  //so for other columns return null
  if (sortColumn.colName !== colName) return null;

  if (sortColumn.order === "asc")
    return <i className="fa fa-sort-asc" aria-hidden="true" />;
  else return <i className="fa fa-sort-desc" aria-hidden="true" />;
};

 raiseSort(colName) {
   //clone your sortColumn
   const sortColumn = { ...this.props.sortColumn };
   //if the user clicks second time on the same column
   if (sortColumn.colName === colName) {
     sortColumn.order = sortColumn.order === "asc" ? "desc" : "asc";
   } else {
     //User clicked on a new column , so we will sort it by ascending order
     //intially by default
     sortColumn.order = "asc";
     sortColumn.colName = colName;
   }
   this.props.onSort(sortColumn);
 }

 render() {
   const {
     products,
     onAddToCart,
     onDeleteFromCart,
     onDeleteFromTable,
     onLike
   } = this.props;
   return (
     <table className="table">
       <thead className="thead-light">
         <tr>
           <th>Image</th>
           <th className="clickable" onClick={() => this.raiseSort("name")}>
             Name {this.getSortIcon("name")}
           </th>
           <th className="clickable" onClick={() => this.raiseSort("price")}>
             Price <i className="fa fa-eur" aria-hidden="true" />
             {this.getSortIcon("price")}
           </th>
           <th
             className="clickable"
             onClick={() => this.raiseSort("category.name")}
           >
             Category {this.getSortIcon("category.name")}
           </th>
           <th>Action</th>
         </tr>
       </thead>
       <tbody>
         {products.length === 0 ? (
           <tr>
             <td>{this.showNoProductsWarning(products.length)}</td>
           </tr>
         ) : (
           products.map(product => (
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
               <td>{product.category.name}</td>
               <td>
                 <button
                   onClick={() => onAddToCart(product)}
                   className="btn btn-success"
                 >
                   +
                 </button>
                 <button
                   onClick={() => onDeleteFromCart(product)}
                   className="btn btn-warning m-2"
                   disabled={product.numOfItemsInCart === 0 ? "disabled" : ""}
                 >
                   -
                 </button>
                 <Like liked={product.liked} onClick={() => onLike(product)} />
                 <button
                   onClick={() => onDeleteFromTable(product)}
                   className="btn btn-danger m-2"
                 >
                   x
                 </button>
               </td>
             </tr>
           ))
         )}
       </tbody>
     </table>
   );
 }
}

export default ProductsTable;