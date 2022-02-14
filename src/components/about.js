import React from 'react';
import Logo from "../img/Vector.svg"
import image from "../img/image 1.svg";
import {Link} from "react-router-dom";



const About = () => {
    return (
        <div className="about">
            <div className="container">
                <div>
                    <img className="cont" src={Logo} alt=""/>
                    <div className="cont--items">
                        <div>
                            <img className="cont--items--bag" src={image} alt=""/>
                        </div>
                        <div>
                            <h1 className="cont--items--bag--rip">База Javascript</h1>
                            <Link to="/btn">
                                <button className="cont--items--bag--rip--btn">Баштоо </button>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};

export default About;