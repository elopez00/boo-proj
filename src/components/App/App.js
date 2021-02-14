import React, { Component } from 'react'
import './App.css';

import Login from '../login/Login'
import Card from '../card/Card'
import Dashboard from '../dashboard/Dashboard'

import L from '../modules/L'
import O from '../modules/O'
import V from '../modules/V'
import E from '../modules/E'

class App extends Component {
  state = {
    authenticated: false,
    page: "card"
  }
  
  /**
   * Validates password in state
   */
  validate = () => this.setState({authenticated: true});

  /**
   * Changes wich page to display in DOM
   * @param {String} page name of the page to display 
   */
  changePage = page => this.setState({page});

  /**
   * Manages which page to display
   * @returns {Component} Component to be displayed depending on state variable
   */
  managePage = () => {
    const { page } = this.state;
    switch (page) {
      case ('card') : return <Card changePage={this.changePage} />;
      case ('dashboard') : return <Dashboard changePage={this.changePage} />;
      case ('l') : return <L changePage={this.changePage} />;
      case ('o') : return <O changePage={this.changePage} />;
      case ('v') : return <V changePage={this.changePage} />;
      case ('e') : return <E changePage={this.changePage} /> 
    }
  }

  render() {
    const { authenticated } = this.state;
    return (
      <div className="App">
        { !authenticated ? <Login validate={this.validate} /> : this.managePage() }
      </div>
    )
  }
}

export default App;
