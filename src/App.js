import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <TrumpContent />
        <Footer />
      </div>
    );
  }
}

class TrumpContent extends Component {
  render() {
    return (
      <div className="TrumpContent">
        <p>Lets put our main content here.</p>
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <header>
        <h2>Trump React header component</h2>
      </header>
    );
  }
}

class Footer extends Component {
  render() {
    return (
      <footer>
        <h5>This is our footer component.</h5>
      </footer>
    );
  }
}

export default App;
