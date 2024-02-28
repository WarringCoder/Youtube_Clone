//React
import { useState } from 'react';
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
import Movie from './pages/Movie/Movie';
import Travel from './pages/Travel/Travel';

// context
import { CategoryProvider } from './Context/CategoryContext';


function App() {
  const [category, setCategory] = useState(0)
  return (
    <Router>
    <CategoryProvider>
      <div>
        <div className="Navbar-full-container">
          <NavbarOne></NavbarOne>
          <NavbarTwo category={category} setCategory={setCategory}></NavbarTwo>
          <NavbarThree></NavbarThree>
        </div>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/music' element={<Music />} />
          <Route path='/game' element={<Game />} />
          <Route path='/sport' element={<Sport />} />
          <Route path='/movie' element={<Movie />} />
          <Route path='/travel' element={<Travel />} />
        </Routes>
      </div>
    </CategoryProvider>
    </Router>
  );
}

export default App;
