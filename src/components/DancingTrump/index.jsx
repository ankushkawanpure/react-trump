import React, { Component } from 'react'

import './dancing_trump.css'

import trumpGif from './trump.gif'

class DancingTrump extends Component {
    render() {
        return (
            <img id="dancing_trump" src={trumpGif} />
        );
    }
}

export default DancingTrump
