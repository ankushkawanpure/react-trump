import React, { Component } from 'react'

import './dancing_trump.css'
import TrumpGif from './trump.gif'

class DancingTrump extends Component {
    render() {
        return (
            <img id="dancing_trump" src={TrumpGif} />
        );
    }
}

export default DancingTrump
