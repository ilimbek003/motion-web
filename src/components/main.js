import React from 'react';
import from from "../img/Vector.svg"
import {Link} from "react-router-dom";


const Main = () => {
    return (
        <div className="main">
            <div className="container">
                <div className="title">
                    <div>
                        <img className="name" src={from} alt=""/>
                        <h1 className="name--user">Username</h1>
                    </div>
                    <div className="form">
                        <input type="text" name="text" autoComplete="off" required/>
                        <label htmlFor="text" className="label-name">
                          <span className="content-name">
                             name
                          </span>
                        </label>
                    </div>
                    <Link to="/logo">
                        <button className="btn">войти</button>

                    </Link>

                </div>
            </div>
        </div>
    );
};

export default Main;