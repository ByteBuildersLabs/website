import React from 'react';
import './main.css';

function Background() {
  return (
    <div className="video-background">
      <iframe 
        src="https://www.youtube.com/embed/6WxfleWs-Ck?autoplay=1&mute=1&loop=1&playlist=6WxfleWs-Ck" 
        frameBorder="0" 
        allow="autoplay; encrypted-media" 
        allowFullScreen 
        title="video"
      ></iframe>
      <div className="content">
        {/* Your content here */}
        <h1>Welcome to My Website</h1>
        <p>This is an example of a video background.</p>
      </div>
    </div>
  )
}

export default Background;
