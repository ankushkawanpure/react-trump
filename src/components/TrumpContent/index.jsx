import React, { Component } from 'react';
import './trump_content.css'

import TrumpPreloader from '../TrumpPreloader'
import BaneAudio from '../BaneAudio'

class TrumpContent extends Component {
  render() {
    return (
      <div className="TrumpContent">
        <BaneAudio />
        <TrumpPreloader />
      </div>
    );
  }
}

export default TrumpContent;