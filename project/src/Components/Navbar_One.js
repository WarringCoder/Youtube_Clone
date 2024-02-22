import React from 'react'

// CSS
import './Navbar_One.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faMagnifyingGlass, faMicrophone, faArrowUp } from '@fortawesome/free-solid-svg-icons'

// images
import youtube from '../img/youtube.png'
import profil from '../img/profil.jpg'
import bell from '../img/bell.png'



function Navbar_One() {
  return (
    <div className='NavbarOne_Container'>
        <div className="left-part">
            <FontAwesomeIcon className='navbar_bar' icon={faBars} />
            <div className="youtube_icons">
                <img className='youtube_img' src={youtube} alt="Youtube" />
                <p className='yt_icon_text'>YouTube <span>TR</span></p>
            </div>
        </div>
        <div className="middle-part">
            <form action="#">
                <input className='search-bar' type="text" placeholder='Ara' />
                <button className='search-bar-button'><FontAwesomeIcon icon={faMagnifyingGlass}/></button>
            </form>
            <div className='microphone'>
                <FontAwesomeIcon icon={faMicrophone} style={{color: "#000000",}} />
            </div>
        </div>
        <div className="right-part">
            <div className='upload-container'>
                <FontAwesomeIcon icon={faArrowUp} style={{color: "#000000",}} />
                <div className="upload-border-bottom"></div>
            </div>
            <img className='bell-icon' src={bell} alt="Bell" />
            <img className='user_img' src={profil} alt="Profil" />
        </div>

    </div>
  )
}

export default Navbar_One