//React
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// CSS
import './App.css'


// components
import NavbarOne from './Components/Navbar_One'
import NavbarTwo from './Components/Navbar_Two'
import NavbarThree from './Components/Navbar_Three';

//Pages
import Home from './pages/Home/Home';
import Music from './pages/Music/Music';
import Game from './pages/Game/Game';
import Sport from './pages/Sport/Sport';
import Trend from './pages/Trend/Trend';



function App() {
  return (
    <Router>
    <div>
      <div className="Navbar-full-container">
        <NavbarOne></NavbarOne>
        <NavbarTwo></NavbarTwo>
        <NavbarThree></NavbarThree>
      </div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/music' element={<Music />} />
        <Route path='/game' element={<Game />} />
        <Route path='/sport' element={<Sport />} />
        <Route path='/trend' element={<Trend />} />
      </Routes>
    </div>
    </Router>
  );
}

export default App;
