import React from 'react';
import Hero from "./components/Hero";
import Main from "./components/main";
import Script from "./components/script";
import About from "./components/about";
import Component from "./components/component";
import PointsCheck from "./components/pointsCheck";
import {Routes,Route} from "react-router-dom";



const App = () => {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Hero/>}/>
                <Route path="/thriller" element={<Main/>}/>
                <Route path="/logo" element={<Script/>}/>
                <Route path="/javascript" element={<About/>}/>
                <Route path="/btn" element={<Component/>}/>
                <Route path="/stop" element={<PointsCheck/>}/>
            </Routes>
        </div>
    );
};

export default App;