import React, { Component } from 'react';
import './App.css';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import TrumpContent from '../../components/TrumpContent';

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

export default App;
