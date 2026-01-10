import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Fruitasty from './pages/Fruitasty';
import YumYumWaffles from './pages/YumYumWaffles';
import Burgerz from './pages/Burgerz';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fruitasty" element={<Fruitasty />} />
        <Route path="/yumyumwaffles" element={<YumYumWaffles />} />
        <Route path="/burgerz" element={<Burgerz />} />
      </Routes>
    </Router>
  );
}

export default App;
