
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarra from './components/Navbarra';
import { Route, Routes } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Gamelist from './components/Gamelist';

function App() {
  return (
    <div className="App">
     <Navbarra/>
     <Routes>
        <Route path="/" element={ <Gamelist/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="contact" element={ <Contact/> } />
      </Routes>
    </div>
  );
}

export default App;
