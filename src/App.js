import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Eboard from './components/Eboard';
import CodeofConduct from './components/CodeofConduct';
import Events from './components/Events';
import ChapterConstitution from './components/ChapterConstitution';
import StayInTouch from './components/StayInTouch';

function App() {
  return (
      <Router>
        <div>
          <Header/>
          <Routes>
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/eboard" component={Eboard} />
          <Route path="/codeofconduct" component={CodeofConduct} />
          <Route path="/events" component={Events} />
          <Route path="/chapterconstitution" component={ChapterConstitution} />
          <Route path="/stayintouch" component={StayInTouch} />
          </Routes>
        </div>
      </Router>
  );
};

export default App;
