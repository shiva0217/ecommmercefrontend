import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Login  extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container" align ="center">
        <p><label for="uname"><b>Username  :</b></label>
        <input type="text" placeholder="Enter Username" name="uname" required/>
        </p>
        <p><label for="psw"><b>Password  :</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required/>
        </p>
        <button type="submit">Login</button>
        <button type="submit"><Link to="/Register">Register</Link></button>
       
      </div>
    
     
         );
    }
}
 
export default Login;