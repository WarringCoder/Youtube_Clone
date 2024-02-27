// React
import React from 'react';
import { NavLink } from 'react-router-dom';

// CSS
import '../Home/Home.css';

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-solid-svg-icons';

// images


// services
import YTServices from '../../Services/YoutubeApi';

function Home() {
  const allvideos = YTServices();
  console.log(allvideos);

  return (
    <div className='Home-Container'>
      {allvideos.map((video, index) => {
    const videoDate = new Date(video.snippet.publishedAt);
    const currentDate = new Date();

    const timeDiff = Math.abs(currentDate - videoDate);
    const hoursAgo = Math.floor(timeDiff / (1000 * 60 * 60));

    const calculateTimeAgo = (hours) => {
        if (hours < 1) {
            return 'Şimdi';
        } else if (hours < 24) {
            return `${hours} saat önce`;
        } else {
            const days = Math.floor(hours / 24);
            return `${days} gün önce`;
        }
    };

    const timeAgoText = calculateTimeAgo(hoursAgo);

    const info = video.contentDetails.duration;
    const startindex = info.indexOf("PT");
    const Hourindex = info.indexOf("H");
    const Minuteindex = info.indexOf("M");
    const Secondindex = info.indexOf("S")

   const Duration = (info, startindex, Hourindex, Minuteindex, Secondindex) => {
  if (info.indexOf('H') !== -1 && info.indexOf('M') !== -1 && info.indexOf('S') !== -1) {
    return (
      <span>
        {info.substring(startindex + 2, Hourindex)}:{info.substring(
          Hourindex + 1,
          Minuteindex
        )}:{info.substring(Minuteindex + 1, Secondindex)}
      </span>
    );
  } else if (info.indexOf('M') !== -1 && info.indexOf('S') !== -1) {
    return (
      <span>
        {info.substring(startindex + 2, Minuteindex)}:{info.substring(
          Minuteindex + 1,
          Secondindex
        )}
      </span>
    );
  } else {
    return <span>{info.substring(startindex + 2 , Secondindex)}</span>;
  }
};

const DurationResult = Duration(
  info,
  startindex,
  Hourindex,
  Minuteindex,
  Secondindex
);


        return (
        <NavLink to={video.Videolink} key={index} >
          <div key={index} className='video-box'>
            <div className='video-image-container'>
              <img src={video.snippet.thumbnails.medium.url} alt={video.snippet.title} className='video-image' />
              <p className='minute'>{DurationResult}</p>
            </div>
            <div className='video-description'>
              <img  src={video.ChannelImage} alt='channel' className='video-channel-image' />
              <div className='content-container'>
                <div className='video-title'>
                  <p>
                    {video.snippet.title.length > 70 ? (
                      <span>{video.snippet.title.slice(0, 65)}...</span>
                    ) : (
                      <span>{video.snippet.title}</span>
                    )}
                  </p>
                </div>
                <div className='video-channel'>
                  <p>{video.snippet.channelTitle}</p>
                </div>
                <div className='video-statics'>
                  <p>
                    {video.statistics.viewCount.length > 6 ? (
                      <span>{video.statistics.viewCount.slice(0, 1)}.{video.statistics.viewCount.slice(1, 2)}M</span>
                    ) : (
                      <span>{video.statistics.viewCount.slice(0, 3)}K</span>
                    )}
                  </p>
                  <FontAwesomeIcon className='statics-icon' icon={faCircle} style={{ color: '#000000' }} />
                  <p> {timeAgoText}</p>
                </div>
              </div>
            </div>
          </div>
        </NavLink>
        );
      })}
    </div>
    
  );
  
}

export default Home;
