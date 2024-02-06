import React from 'react';
import { BrowserRouter as Router, Route, Routes, BrowserRouter } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Eboard from './components/Eboard';
import CodeofConduct from './components/CodeofConduct';
import Events from './components/Events';
import ChapterConstitution from './components/ChapterConstitution';
import StayInTouch from './components/StayInTouch';
import Footer from './components/Footer';

function App() {
  return (
        <div className="app-container"> 
          <BrowserRouter>
            <Header/>
            <Routes>
              <Route path="/"  element={<Home/>} />
              <Route path="/about" element= {<About/>}/>
              <Route path="/eboard" element={<Eboard/>} />
              <Route path="/codeofconduct" element={<CodeofConduct/>} />
              <Route path="/events" element={<Events/>} />
              <Route path="/chapterconstitution" element={<ChapterConstitution/>} />
              <Route path="/stayintouch" element={<StayInTouch/>} />
            </Routes>
            <Footer/>
          </BrowserRouter>
        </div>

  );
};
export default App;