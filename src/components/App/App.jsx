import React from 'react';
import NavBar from "../NavBar/NavBar"
import {HashRouter,Route} from "react-router-dom";
import About from '../About/About';
import Contact from '../Contact/Contact';
import Home from '../Home/Home';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';
import "./App.css";
import GoHome from '../GoHome/GoHome';

const App = () => {
    return (
        <div>
          <HashRouter>
              <NavBar/>
              <Route path="/" exact component={Home}></Route>
              <Route path="/about"exact component={About}></Route>
              <Route path="/projects"exact component={Projects}></Route>
              <Route path="/skills"exact component={Skills}></Route>
              <Route path="/contact"exact component={Contact}></Route>
              <GoHome/>
          </HashRouter>
        </div>
    )
}

export default App;
