import './App.css';
import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Home from './container/Home/Home';
import About from './container/About/About';
import Favorite from './container/Favorite/Favorite';
import ModelsPage from './container/ModelsPage/ModelsPage';
import Sponsor from './container/Sponsor/Sponsor';
import Footer from './container/Footer/Footer';
import Scrollup from './components/Scrollup/Scrollup';

export const Context = React.createContext();

function App() {

  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <Context.Provider value={[selectedProduct, setSelectedProduct]}>
    <Navbar />
    <Home />
    <About />
    <Favorite />
    <ModelsPage />
    <Sponsor />
    <Footer />
    <Scrollup />
    </Context.Provider>
  )
}

export default App
