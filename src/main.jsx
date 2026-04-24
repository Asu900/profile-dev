import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { BrowserRouter, Route, Routes } from 'react-router';
import AboutMe from "./pages/AboutMe.jsx";
import ContactMe from './pages/ContactMe.jsx';
import Projects from './pages/Projects.jsx';
import Hero from './components/Hero.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/AboutMe" element={<AboutMe/>} />
        <Route path='/ContactMe' element={<ContactMe/>}/>
        <Route path='/Projects' element={<Projects/>}/>
        <Route path='/Hero' element={<Hero></Hero>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);