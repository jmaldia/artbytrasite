import React, { Component } from 'react';
import Sidebar from './components/sidebar/Sidebar'
import ImageList from './components/main/ImageList'
import Contact from './components/main/Contact'
import './App.css';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      showImages: 'home'
    }

    this.switchPage = this.switchPage.bind(this)
  }

  switchPage(page) {
    console.log(page)
    if (page === 'home') {
      this.setState({ showImages: 'home'})
    } else if (page === 'contact') {
      this.setState({ showImages: 'contact'})
    }
  }
  render() {
    return (
      <div className="App">
        <Sidebar switchPage={this.switchPage}/>
        {
          this.state.showImages === 'home' ? <ImageList /> : <Contact />
        }
      </div>
    );
  }
}

export default App;
