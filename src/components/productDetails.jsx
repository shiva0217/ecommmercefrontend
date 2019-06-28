import React, { Component } from 'react';
import Products from './Products';
class ProductDetails extends Component {
    state = {  }
    handlesave = ()=>{

    };
    render() { 
        return ( 
            <div>
                <h1>Products Dtails - {this.props.match.params._id}</h1>
                <button onClick={this.handlesave}>save</button>
            </div>
         );
    }
}
 
export default ProductDetails;