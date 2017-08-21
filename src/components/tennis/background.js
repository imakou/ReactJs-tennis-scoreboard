import React, { Component } from 'react';

class Background extends Component {
    render() {
        return (
            <div className="bg_">
                <div className="bg_grid_dots"></div>
                <video id="bgvid" src="../styles/videos_source_from_ATPWorldTour.mp4" playsInline autoPlay muted loop/>
          </div>
        );
    }
}



export default Background;