import logo from './logo.svg';
import './App.css';
import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarList from './CarList';

export class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoaded: false
    }
  }

  componentDidMount() {
    this.setState({
      isLoaded: true
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1>CarMERN</h1>
          <p>Full Stack Web Application</p>
        </header>
        <br></br>
        <CarList />
      </div>
    )
  }
}

export default App;
