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
    this.handleSubmitToMailchimp = this.handleSubmitToMailchimp.bind(this)
  }

  switchPage(page) {
    console.log(page)
    if (page === 'home') {
      this.setState({ showImages: 'home'})
    } else if (page === 'contact') {
      this.setState({ showImages: 'contact'})
    }
  }

  handleSubmitToMailchimp(event) {
    fetch("https://artbytra.us18.list-manage.com/subscribe/post?u=c06cc0149c6cd09190ed8e651&amp;id=b77563ae6b", {
        method: 'post',
        body : JSON.stringify({
          EMAIL: event.target.value,
          name: "b_c06cc0149c6cd09190ed8e651_b77563ae6b"
        }),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      })
      .catch(function(error) {
        console.log("error---", error)
      });
  }

  render() {
    return (
      <div className="App">
        <Sidebar switchPage={this.switchPage}/>
        {
          this.state.showImages === 'home' ? <ImageList /> : <Contact handleSubmitToMailchimp={this.handleSubmitToMailchimp}/>
        }
      </div>
    );
  }
}

export default App;
