import React, {Component} from 'react';
import Navigation from './components/Navigation.js'
import Signin from './components/Signin.js'
import './App.css';


class App extends Component {

  constructor() {
    super();
    this.state = {
      route: 'signin',
      isSignedIn: false,
      data: [],
      role: ''
     
    }
  }

  componentDidMount(){
    fetch('http://localhost:3000/')
    .then(response => response.json())
    .then(data => console.log(data))
  }

  onRouteChange = (route) => {
    this.setState({route : route});
  }

  render(){
    return (
      <div className="App">
        <h1> Harsh </h1>
        {this.state.route === 'signin' 
        ? <Signin onRouteChange={this.onRouteChange} />
        : <div>
            <Navigation onRouteChange = {this.onRouteChange}/>
            
          </div>
        }
        
      </div>
    );
  } 
}

export default App;
