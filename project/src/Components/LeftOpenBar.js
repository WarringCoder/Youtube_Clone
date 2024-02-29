// React
import React, {useEffect} from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import './LeftOpenBar.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faGamepad, faTrophy, faClapperboard, faMasksTheater} from '@fortawesome/free-solid-svg-icons'

// images
import youtube from '../img/youtube.png'

// context
import {useLeftBar} from '../Context/LeftBarContext';
import {useCategory} from '../Context/CategoryContext'

function LeftOpenBar() {
    const {barSituation, updateBarSituation} = useLeftBar();
    const { updateCategory } = useCategory();
    useEffect(() => {
  const handleClickOutside = (event) => {
    // Eğer tıklanan alan NavbarOne içerisinde değilse ve bar açıksa, bar'ı kapat
    if (!event.target.closest('.Left-Bar-Container') && barSituation) {
      updateBarSituation(false);
    }
  };

  // Event listener'ı ekleyelim
  document.addEventListener('mousedown', handleClickOutside);

  // Component unmount olduğunda event listener'ı kaldıralım
  return () => {
    document.removeEventListener('mousedown', handleClickOutside);
  };
}, [barSituation, updateBarSituation]);
  return (
    <div className={`Left-Bar-Container ${barSituation ? 'Left-Bar-Container-Visible' : ''}`}>
        <div className="youtube_icons LeftbarYoutube">
            <img className='youtube_img' src={youtube} alt="Youtube" />
            <p className='yt_icon_text'>YouTube <span>TR</span></p>
        </div>
        <div className="linkcontainer">
            <NavLink to='/' className='LeftBarLink' onClick={()=> updateCategory(0)}>
                    <p>Ev</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faHouse} style={{color: "#000000",}}/>
            </NavLink>
            <NavLink to='/music' className='LeftBarLink' onClick={()=> updateCategory(10)}>
                    <p>Müzik</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faMusic} style={{color: "#000000",}} />
            </NavLink>
            <NavLink to='/movie' className='LeftBarLink' onClick={()=> updateCategory(1)}>
                    <p>Film</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faClapperboard} style={{color: "#000000",}} />
            </NavLink>
            <NavLink to='/sport' className='LeftBarLink' onClick={()=> updateCategory(17)}>
                    <p>Spor</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faTrophy} style={{color: "#000000",}}/>
            </NavLink>
            <NavLink to='/game' className='LeftBarLink' onClick={()=> updateCategory(20)}>
                    <p>Oyun</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faGamepad} style={{color: "#000000",}}/>
            </NavLink>
            <NavLink to='/travel' className='LeftBarLink' onClick={()=> updateCategory(23)}>
                    <p>Komedi</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faMasksTheater} style={{color: "#000000",}}/>
            </NavLink>
        </div>
        <div className="LeftBar-Footer">
            <p> &copy; Copyright 2024. by İshak Eren </p>
        </div>
    </div>
  )
}

export default LeftOpenBar