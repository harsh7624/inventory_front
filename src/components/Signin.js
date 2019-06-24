import React from 'react';

class Signin extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            signInEmail: '',
            signInPassword: ''
        }
    }

    onEmailChange = (event) => {
        this.setState({signInEmail: event.target.value})
    }

    onPasswordChange = (event) => {
        this.setState({signInPassword: event.target.value})
    }

    onSubmitSignIn = () => {

        fetch('http://localhost:3000/signin', {
            method : 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email : this.state.signInEmail,
                password: this.state.signInPassword
            })
        })
          .then(response => response.json())
          .then(data => {
              if(data.email){
                  this.props.onRouteChange('home');
              }
          })
        //console.log(this.state);
        
    }

    checkRole = () => {
        console.log('asdf');
        fetch('http://localhost:3000/checkRole', {
            method : 'post',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({
                email : this.state.signInEmail,
                
            })
        })
          .then(response => response.json())
          .then(data => {
              console.log('inside checkROLE')
              this.setState({role: data})
          })
    }

    render() {
        const {onRouteChange} = this.props;
        return(
            <div>
              
                <h2>Sign In</h2>
                <div>
                  <label  htmlFor="email-address">Email</label>
                  <input 
                    onChange = {this.onEmailChange}
                    type="email"
                    name="email-address"
                    id="email-address" 

                  />
                </div>
                <div>
                  <label  htmlFor="password">Password</label>
                  <input
                    onChange = {this.onPasswordChange}
                    type="password"
                    name="password"
                    id="password" 
                  />
                </div>
             
                  <div>
                  <input
                     // onClick={this.onSubmitSignIn}
                      onClick={() => {
                       this.onSubmitSignIn();
                       // this.checkRole();
                     }}
                      type="submit"
                      value="Sign in"
                  />    
                  </div>
              
            </div>
      
      );
    }
   
}

export default Signin;