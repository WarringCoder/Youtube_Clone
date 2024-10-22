import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faMagnifyingGlass, faMicrophone, faArrowUp } from '@fortawesome/free-solid-svg-icons';

import youtube from '../img/youtube.png';
import profil from '../img/profil.jpg';
import bell from '../img/bell.png';

import { useLeftBar } from '../Context/LeftBarContext';
import { useCategory } from '../Context/CategoryContext';

import './Navbar_One.css';

function Navbar_One() {
  const { barSituation, updateBarSituation } = useLeftBar();
  const { updateCategory } = useCategory();
  const [searchTerm, setSearchTerm] = useState('');

  // YouTube API arama işlemi
  const handleSearch = async () => {
    if (!searchTerm.trim()) return; // Boş arama yapılmasını engelle

    try {
      const apiKey = 'AIzaSyAk7MFNOKgjwgYyNNrcnSIFs7SQaPjlQ5o'; // API anahtarınızı buraya ekleyin
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?q=${encodeURIComponent(searchTerm)}&part=snippet&maxResults=5&key=${apiKey}`
      );

      if (!response.ok) {
        throw new Error('YouTube API request failed');
      }

      const data = await response.json();
      // Veriyi kullanarak istediğiniz işlemleri gerçekleştirin
      console.log(data);
    } catch (error) {
      console.error('Error fetching YouTube search:', error);
    }
  };

  // searchTerm değiştiğinde arama yap
  useEffect(() => {
    if (searchTerm) {
      handleSearch();
    }
  }, [searchTerm]);

  return (
    <div className='NavbarOne_Container'>
      {/* Sol Kısım */}
      <div className="left-part">
        <FontAwesomeIcon 
          onClick={() => updateBarSituation(!barSituation)} 
          className='navbar_bar' 
          icon={faBars} 
        />
        <div className="Youtube-icon-link activee" onClick={() => updateCategory(0)}>
          <div className="youtube_icons">
            <img className='youtube_img' src={youtube} alt="Youtube" />
            <p className='yt_icon_text'>YouTube <span>TR</span></p>
          </div>
        </div>
      </div>

      {/* Orta Kısım */}
      <div className="middle-part">
        <form onSubmit={(e) => e.preventDefault()}>
          <input
            className='search-bar'
            type="text"
            placeholder='Ara'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className='search-bar-button' type="button" onClick={handleSearch}>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
        <div className='microphone'>
          <FontAwesomeIcon icon={faMicrophone} style={{ color: "#000000" }} />
        </div>
      </div>

      {/* Sağ Kısım */}
      <div className="right-part">
        <div className='upload-container'>
          <FontAwesomeIcon icon={faArrowUp} style={{ color: "#000000" }} />
          <div className="upload-border-bottom"></div>
        </div>
        <img className='bell-icon' src={bell} alt="Bell" />
        <img className='user_img' src={profil} alt="Profil" />
      </div>
    </div>
  );
}

export default Navbar_One;
