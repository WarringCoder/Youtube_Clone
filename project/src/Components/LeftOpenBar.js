// React
import React from 'react'
import { NavLink } from 'react-router-dom'

// CSS
import './LeftOpenBar.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faGamepad, faTrophy, faClapperboard, faMasksTheater} from '@fortawesome/free-solid-svg-icons'

function LeftOpenBar() {
  return (
    <div className='Left-Bar-Container'>
        <div className="linkcontainer">
            <NavLink to='/' className='LeftBarLink'>
                    <p>Ev</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faHouse} style={{color: "#000000",}}/>
            </NavLink>
            <NavLink to='/music' className='LeftBarLink'>
                    <p>Müzik</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faMusic} style={{color: "#000000",}} />
            </NavLink>
            <NavLink to='/movie' className='LeftBarLink'>
                    <p>Film</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faClapperboard} style={{color: "#000000",}} />
            </NavLink>
            <NavLink to='/sport' className='LeftBarLink'>
                    <p>Spor</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faTrophy} style={{color: "#000000",}}/>
            </NavLink>
            <NavLink to='/game' className='LeftBarLink'>
                    <p>Oyun</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faGamepad} style={{color: "#000000",}}/>
            </NavLink>
            <NavLink to='/travel' className='LeftBarLink'>
                    <p>Komedi</p>
                    <FontAwesomeIcon className='Leftbaricon' icon={faMasksTheater} style={{color: "#000000",}}/>
            </NavLink>
        </div>
    </div>
  )
}

export default LeftOpenBar