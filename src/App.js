import React, { Component }  from 'react';
import { Route, BrowserRouter as Routes, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Others from './components/Others';
import Portfolio from './components/Portfolio';
import './index.css';

function App() {
  return (
    <Routes>
    <main>
     <Header />
     <Home />  
     </main>
   <Others />
   <Portfolio />
    <Footer />
    </Routes>
  );
}

export default App;
