import React, { Component } from 'react';
import './trump_content.css'

import TrumpPreloader from '../TrumpPreloader'

class TrumpContent extends Component {
  render() {
    return (
      <div className="TrumpContent">
        <TrumpPreloader />
      </div>
    );
  }
}

export default TrumpContent;