import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import ImageList from './components/main/ImageList'
import Contact from './components/main/Contact'
import About from './components/main/About'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImages: <ImageList />
    }

    this.switchPage = this.switchPage.bind(this)
  }

  switchPage(page) {
    if (page === 'home') {
      this.setState({ showImages: <ImageList />})
    } else if (page === 'contact') {
      this.setState({ showImages: <Contact />})
    } else {
      this.setState({ showImages: <About />})
    }
  }

  render() {
    return (
      <div className="App">
        <Sidebar switchPage={this.switchPage}/>
        { this.state.showImages }
      </div>
    );
  }
}

export default App;
