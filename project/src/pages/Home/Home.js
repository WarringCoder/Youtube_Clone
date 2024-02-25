// React
import React from 'react';

// CSS
import '../Home/Home.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// images
import dnm from '../../img/dnm.png';

// services

function Home() {


  return (
    <div className='Home-Container'>
      <div className="video-box">
        <div className="video-image-container">
          <img src={dnm} alt="dnm" className="video-image" />
          <p className="minute">1:04</p>
        </div>
        <div className="video-description">
          <div className='video-channel-image-container'>
            <img src={dnm} alt="dnm" className="video-channel-image" />
          </div>
          <div className="content-container">
            <div className="video-title"><p>Xhaka'dan inanılmaz bir şaka!</p></div>
            <div className="video-channel"><p>Tivibu Spor</p></div>
            <div className="video-statics"><p>44K views</p><FontAwesomeIcon className='statics-icon' icon={faCircle} style={{ color: "#000000", }} /><p> 17 hours ago</p></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
