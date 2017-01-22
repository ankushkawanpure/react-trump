
import React, { Component } from 'react'

import TrumpImage from '../TrumpImage';

import './trump_content.css'
import TrumpPreloader from '../TrumpPreloader'
import BaneAudio from '../BaneAudio'


class TrumpContent extends Component {
  render() {
    return (
      <div className="TrumpContent">
        <TrumpImage/>
        <BaneAudio />
      </div>
    );
  }
}

export default TrumpContent;
