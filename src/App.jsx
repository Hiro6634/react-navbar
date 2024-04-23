import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import { About, Contact, Home, Services } from './components/pages';

const  App = () => {
  return( 
  <div className="App">
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About></About>} />
      <Route path="/services" element={<Services></Services>} />
      <Route path="/contact" element={<Contact></Contact>} />
    </Routes>
  </div>);
}

export default App
