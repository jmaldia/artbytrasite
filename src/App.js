import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import ImageList from './components/main/ImageList'
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

    this.switchPage = this.switchPage.bind(this)
  }

  switchPage() {

  }
  render() {
    return (
      <div className="App">
        <Sidebar switchPage={this.switchPage}/>
        <ImageList />
      </div>
    );
  }
}

export default App;
