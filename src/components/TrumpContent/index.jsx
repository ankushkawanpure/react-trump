import React, { Component } from 'react'

import './trump_content.css'
import TrumpPreloader from '../TrumpPreloader'
import BaneAudio from '../BaneAudio'
import DancingTrump from '../DancingTrump'

class TrumpContent extends Component {
  render() {
    return (
      <div className="TrumpContent">
        <BaneAudio />
        <DancingTrump />
        <TrumpPreloader />
      </div>
    );
  }
}

export default TrumpContent
