import React, { Component } from 'react'

import './trump_preloader.css'
import TrumpSvg from './TrumpSvg'

class TrumpPreloader extends Component {
  render() {
    return (
      <div className="wrap">
        <TrumpSvg></TrumpSvg>
      </div>
    );
  }
}

export default TrumpPreloader
