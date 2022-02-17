import React from 'react';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

/* COMPONENTS*/
import {Header} from "./components/header/heder";
import {Navbar} from "./components/navbar/navbar";
import {Profile} from "./components/profile/profile";
import {Dialogs} from "./components/dialogs/dialogs";
import {Music} from "./components/music/music";
import {News} from "./components/new/news";
import {Settings} from "./components/setting/settings";

function App() {
    return (
        <Router>
            <div className="app-wrapper">
                <Header/>
                <Navbar/>
                <div className="app-wrapper-content">
                    <Routes>
                        <Route path="/Profile" element={<Profile/>}/>
                        <Route path="/Dialogs" element={<Dialogs/>}/>
                        <Route path="/News" element={<News/>}/>
                        <Route path="/Music" element={<Music/>}/>
                        <Route path="/Settings" element={<Settings/>}/>
                    </Routes>
                </div>
            </div>
        </Router>

    );
}

export default App;
