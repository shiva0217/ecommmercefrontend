import React, { Component } from 'react';
class Register extends Component {
    state = {  }
    render() { 
        return ( 
            <div class="container" align ="center">
            <p><label for="uname"><b>Username  :</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
            </p>
            <p><label for="email"><b>E-mail  :</b></label>
            <input type="text" placeholder="Enter Username" name="uname" required/>
            </p>
            <p><label for="psw"><b>Password  :</b></label>
            <input type="password" placeholder="Enter Password" name="psw" required/>
            </p>
            <button type="submit">Register</button>
            </div>
         );
    }
}
 
export default Register;