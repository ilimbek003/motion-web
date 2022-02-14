import React, {useState} from 'react';
import Logo from "../img/Vector.svg"
import {Link} from "react-router-dom";

const Hero = () => {


    return (
        <div className="hero">
            <div className="container">
                <div className="big">
                    <div>
                        <span className="big--span"/>
                        <img className="big--span--logo" src={Logo} alt=""/>
                        <h1 className="big--span--logo--text">Sing in</h1>
                    </div>
                    <div className="form" >
                        <input type="text" name="text" autoComplete="off" required />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">
                             email
                          </span>
                        </label>
                    </div>
                    <div className="form">
                        <input type="text" name="text" autoComplete="off" required />
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">
                             Password
                          </span>
                        </label>
                    </div>
                    <Link to="/thriller">
                        <button className="btn">войти</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Hero;