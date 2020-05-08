import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import logo from './logo.svg';
import './App.css';

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

library.add(faGithub, faLinkedinIn, faInstagram);

export default class App extends React.Component {
  componentDidMount() {
    document.title = "Mesa Perry";
  }

  render() {
    return (
      <Router basename="/">
        <Switch>
          <Route path="/experience">
            <Experience />
          </Route>
          <Route path="/portfolio">
            <Portfolio />
          </Route>
          <Route path="/">
            <About />
          </Route>
        </Switch>
      </Router>
    );
  }
}

class NavigationBar extends React.Component {
  render() {
    return (
      <div className="horizontal">
        <Link className="text_color1 clickable navi_button" to="/">About</Link>
        <Link className="text_color1 clickable navi_button" to="/experience">Experience</Link>
        <Link className="text_color1 clickable navi_button" to="/portfolio">Portfolio</Link>
        <a
          className="text_color1 clickable navi_button"
          target="_blank"
          rel="noopener noreferrer"
          href="https://drive.google.com/open?id=1gxt6W-gEsK1tu5ikDbddddwjn1tme1Rl"
        >Resume</a>
      </div>
    );
  }
}

class SocialBar extends React.Component {
  render() {
    return (
      <div className="horizontal">
        <a href="https://github.com/mesperrus/">
          <FontAwesomeIcon
            icon={['fab', 'github']}
            size="3x"
            className="text_color1 clickable social_button"
          />
        </a>
        <a href="https://www.linkedin.com/in/mesa-perry-558715193/">
          <FontAwesomeIcon
            icon={['fab', 'linkedin-in']}
            size="3x"
            className="text_color1 clickable social_button"
          />
        </a>
        <a href="https://www.instagram.com/mesa.perry/">
          <FontAwesomeIcon
            icon={['fab', 'instagram']}
            size="3x"
            className="text_color1 clickable social_button"
          />
        </a>
      </div>
    );
  }
}

class About extends React.Component {
  render() {
    const isMobile = window.innerWidth <= 720;

    if (!isMobile) {
      return (
        <div className="color1 container">
          <div className="color2 inner">
            <div className="vertical">
              <NavigationBar />
              <h1 className="text_color1 title">Mesa Perry</h1>
            </div>
            <p className="info">
              Ayo -- welcome to my humble abode.
              I'm a student and software developer from
              University of Illinois Urbana-Champaign.
            </p>
            <p className="info">
              My experience includes a deep learning internship at
              ST Engineering and various personal projects.
              Feel free to visit some of my work above,
              or check me out on other sites below.
            </p>
            <SocialBar />
          </div>
        </div>
      );
    }

    else {
      return (
        <h1>mobile</h1>
      )
    }
  }
}

class Experience extends React.Component {
  render() {
    // document.getElementById("root").style.justifyContent = "start";
    return (
      <div className="color1 container">
        <div className="color2 inner">
          <div className="vertical">
            <NavigationBar />
            <h1 className="text_color1 title">Experience</h1>
          </div>
          <p className="info">
            Coming soon...
          </p>
          <SocialBar />
        </div>
      </div>
    );
  }
}

class Portfolio extends React.Component {
  render() {
    // document.getElementById("root").style.justifyContent = "start";
    return (
      <div className="color1 container">
        <div className="color2 inner">
          <div className="vertical">
            <NavigationBar />
            <h1 className="text_color1 title">Portfolio</h1>
          </div>
          <p className="info">
            Coming soon...
          </p>
          <SocialBar />
        </div>
      </div>
    );
  }
}