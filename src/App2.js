import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SideMenu from './Components/SideMenu';


class App extends Component {
  render() {
    return (
      <div className="main">
     <SideMenu />
      </div>
    );
  }
}

export default App;