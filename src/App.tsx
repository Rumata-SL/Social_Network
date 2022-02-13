import React from 'react';
/*import logo from './logo.svg';*/
/*import logo from './image/logo_social_network.png';*/
/*import logos from './image/content_logo.jpg';*/
import './App.css';
import {Header} from "./components/heder/heder";
import {Nav} from "./components/nav/nav";
import {Profile} from "./components/profile/profile";

function App() {
    return (
        <div className="app-wrapper">
            <Header/>
            <Nav/>
            <Profile/>
        </div>
        /*<div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.tsx</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
        </div>*/
    );
}

export default App;
