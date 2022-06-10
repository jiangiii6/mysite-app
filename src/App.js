import React, { Component }  from 'react';
import { Route, BrowserRouter as Routes, Switch } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import Others from './components/Others';
import './index.css';

function App() {
  return (
    <Routes>
    <main>
     <Header />
     <Home />  
     </main>
   <Others />
    <Footer />
    </Routes>
  );
}

export default App;
