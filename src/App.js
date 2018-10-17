import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import ImageList from './components/main/ImageList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ImageList />
      </div>
    );
  }
}

export default App;
