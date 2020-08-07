import React from 'react';
import video from '../../assets/video.mp4';
import './style.css';

function assembleVideo() {
    return (
        <div className="container video-container mt-5">
            <video loop="true" muted="" autoPlay="true" preload="auto" width="100%" className="">
                <source src={video} type="video/mp4">
                </source>
            </video>
        </div>
    );
}

export default assembleVideo;