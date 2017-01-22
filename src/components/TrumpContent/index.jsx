import React, {Component} from 'react';
import './trump_content.css'

import TrumpImage from '../TrumpImage';

class TrumpContent extends Component {
  render() {
    return (
      <div className="TrumpContent">
        <TrumpImage/>
      </div>
    );
  }
}

export default TrumpContent;
