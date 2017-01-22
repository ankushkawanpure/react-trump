import React, { Component } from 'react';
import Sound from 'react-sound';

class BaneAudio extends Component {
    render() {
        return (
            <Sound
                url="BANE_URL"
                playStatus={Sound.status.PLAYING}
                playFromPosition={0 /* in milliseconds */}
                onLoading={this.handleSongLoading}
                onPlaying={this.handleSongPlaying}
                onFinishedPlaying={this.handleSongFinishedPlaying} />
        );
    }

    handleSongLoading() {
        //alert("loading");
    }

    handleSongPlaying() {
        //alert("playing");
    }

    handleSongFinishedPlaying() {
        //alert("done");
    }
}

export default BaneAudio;