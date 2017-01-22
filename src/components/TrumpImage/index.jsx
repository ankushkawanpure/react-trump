import React, {Component} from 'react';

import './index.css';

import classNames from 'classnames';

export default class ClassName extends Component {



  toggleHair(){

  }

  render() {
    let hairClass = classNames({
      'TrumpHair': true,
      'TrumpHairAnimated': this.state.isPressed,
    });

    return (
      <div className="TrumpImageContainer">
        <div className={hairClass} onClick={toggleHair}></div>
        <div className="TrumpBody"></div>
        <div className="TrumpEyes"></div>
        <div className="BaneMask"></div>
      </div>
    );
  }
}
