// React
import { useState } from 'react'

// Font Awesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faChevronRight, faChevronLeft} from '@fortawesome/free-solid-svg-icons'

//CSS 
import './Navbar_Three.css'

import React from 'react'

function Navbar_Three() {
    const [isLeftScrollVisible, setLeftScrollVisible] = useState(false);
    const [isRightScrollVisible, setRightScrollVisible] = useState(true);
    const [isRem, setRem] = useState(0);
    const handleRightScrollVisible = () =>
    {
       
        setRem(isRem - 9);
        setLeftScrollVisible(true);
    }

     const VisibleRight = () =>
    {
        if(isRem === -45)
        {
            setRightScrollVisible(false)
        }
    }

    const handleLeftScrollVisible = () =>
    {
        setRem(isRem +9);
        setRightScrollVisible(true);
       
    }

    const VisibleLeft = () =>
    {
        if(isRem === -9)
        {
            setLeftScrollVisible(false)
        }
    }

    const handleCombinedClick1 = () =>
    {
        handleLeftScrollVisible();
        VisibleLeft();
    }

    const handleCombinedClick2 = () =>
    {
        handleRightScrollVisible();
        VisibleRight();
    }
    return (
            <div className='Navbar-Three-Container' style={{ left: `${isRem}rem`}}>
                <div className="left-scroll" onClick={handleCombinedClick1} style={{ display: isLeftScrollVisible ? 'inherit' : 'none' }}>
                    <div className='left-circle'>
                        <FontAwesomeIcon icon={faChevronLeft} />
                    </div>
                </div>
                <div className='Navbar-Three-Content'>
                    <div className='Navbar-Category'><p> All </p></div>
                    <div  className='Navbar-Category'><p> Mixes</p></div >
                    <div  className='Navbar-Category'><p>Music</p></div >
                    <div  className='Navbar-Category'><p>React</p></div >
                    <div  className='Navbar-Category'><p>Javascript</p></div >
                    <div  className='Navbar-Category'><p>Fottball</p></div >
                    <div  className='Navbar-Category'><p>Classic</p> <p> Music </p></div >
                    <div  className='Navbar-Category'><p> Space </p></div >
                    <div  className='Navbar-Category'><p> Elon </p> <p> Musk </p></div >
                    <div  className='Navbar-Category'><p> Motvation </p></div >
                    <div  className='Navbar-Category'><p> Movie </p></div >
                    <div  className='Navbar-Category'><p> Interstellar </p></div >
                    <div  className='Navbar-Category'><p> Podcast </p></div >
                    <div  className='Navbar-Category'><p> Sleeping </p><p> Music </p></div >
                    <div  className='Navbar-Category'><p> Mathematica </p></div >
                    <div  className='Navbar-Category'><p> Nolan </p></div >
                    <div  className='Navbar-Category'><p> Extrime </p></div >
                    <div  className='Navbar-Category'><p> Techonology </p></div >
                    <div  className='Navbar-Category'><p> Fun </p></div >
                    <div  className='Navbar-Category'><p> Interesting</p></div >  
                    <div  className='Navbar-Category'><p> Fitness </p></div >
                </div>
                <div className="right-scroll" onClick={handleCombinedClick2} style={{ display: isRightScrollVisible ? 'inherit' : 'none' }}>
                    <div className='right-circle'>
                        <FontAwesomeIcon icon={faChevronRight} />
                    </div>
                </div>
            </div>
    )
}

export default Navbar_Three