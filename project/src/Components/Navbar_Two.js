// React
import React from 'react'
import { NavLink} from 'react-router-dom';

// CSS
import './Navbar_Two.css'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faMusic, faGamepad, faTrophy, faClapperboard, faMasksTheater} from '@fortawesome/free-solid-svg-icons'

// context
import {useCategory} from '../Context/CategoryContext'

// Component
import LeftOpenBar from './LeftOpenBar';


function Navbar_Two() 
{
    const { category, updateCategory } = useCategory();
  return (
    <>
        <LeftOpenBar className='LeftOpenBar'></LeftOpenBar>
        <div className='NavbarTwo_Container'>
            <NavLink to='/' className={`Navlink ${category === 0 ? 'active' : ''}`} onClick={()=> updateCategory(0)}>
                <FontAwesomeIcon className='navbar-two-icon' icon={faHouse} />
            </NavLink>
            <NavLink to='/music' className={`Navlink ${category === 10 ? 'active' : ''}`} onClick={()=> updateCategory(10)}>
                <FontAwesomeIcon className='navbar-two-icon' icon={faMusic} />
            </NavLink>
            <NavLink to='/movie' className={`Navlink ${category === 1 ? 'active' : ''}`} onClick={()=> updateCategory(1)}>
                <FontAwesomeIcon className='navbar-two-icon' icon={faClapperboard} style={{color: "#000000",}} />
            </NavLink>
            <NavLink to='/sport' className={`Navlink ${category === 17 ? 'active' : ''}`} onClick={()=> updateCategory(17)}>
                <FontAwesomeIcon className='navbar-two-icon' icon={faTrophy} />
            </NavLink>
            <NavLink to='/game' className={`Navlink ${category === 20 ? 'active' : ''}`} onClick={()=> updateCategory(20)}>
                <FontAwesomeIcon className='navbar-two-icon' icon={faGamepad} />
            </NavLink>   
            <NavLink to='/travel' className={`Navlink ${category === 23 ? 'active' : ''}`} onClick={()=> updateCategory(23)}>
                <FontAwesomeIcon className='navbar-two-icon' icon={faMasksTheater} />
            </NavLink>
        </div>
    </>
  )
}

export default Navbar_Two