import React from 'react'

// CSS
import './Navbar_Two.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faGamepad, faTrophy, faFire} from '@fortawesome/free-solid-svg-icons'

// images


function Navbar_Two() {
  return (
    <div className='NavbarTwo_Container'>
        <FontAwesomeIcon className='navbar-two-icon' icon={faHouse} />
        <FontAwesomeIcon className='navbar-two-icon' icon={faMusic} />
        <FontAwesomeIcon className='navbar-two-icon' icon={faGamepad} />
        <FontAwesomeIcon className='navbar-two-icon' icon={faTrophy} />
        <FontAwesomeIcon className='navbar-two-icon' icon={faFire} />
    </div>
  )
}

export default Navbar_Two