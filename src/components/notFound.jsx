import React, { Component } from 'react';
import gif from "../data/images/notfound.gif"
class pageNotFound extends Component {
    state = {  }
    render() { 
        return ( 
            <body>
                <div align ="center">
                  <img src ={gif} alt = "error 404 not found"/>
                </div>
            </body>
         );
    }
}
 
export default pageNotFound;