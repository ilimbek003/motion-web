import React from 'react';
import from from "../img/Vector.svg";
import image from "../img/image 1.svg";
import images from "../img/image 3.svg";
import {Link} from "react-router-dom";

const Script = () => {
    return (
        <div className="script">
            <div className="container">
                <div>
                    <img className="name" src={from} alt=""/>
                    <h1 className="name--user">Тесттер</h1>
                </div>
                <div>
                    <div className="item">
                        <div className="item--vector">
                            <img src={image} alt=""/>
                            <Link to="/javascript">
                                <h1 className="item--ges">База Javascript</h1>
                            </Link>
                        </div>
                        <div className="item--vector">
                            <img src={images} alt=""/>
                            <Link to="/javascript">
                                <h1 className="item--ges">База Javascript</h1>
                            </Link>

                        </div>
                        <div className="item--vector">
                            <img src={image} alt=""/>
                            <Link to="/javascript">
                                <h1 className="item--ges">База Javascript</h1>
                            </Link>
                        </div>
                        <div className="item--vector">
                            <img src={images} alt=""/>
                            <Link to="/javascript">
                                <h1 className="item--ges">База Javascript</h1>
                            </Link>
                        </div>
                    </div>
                    <div className="item">
                        <div className="item--vector">
                            <img src={image} alt=""/>
                            <Link to="/javascript">
                                <h1 className="item--ges">База Javascript</h1>
                            </Link>
                        </div>
                        <div className="item--vector">
                            <img src={images} alt=""/>
                            <Link to="/javascript">
                                <h1 className="item--ges">База Javascript</h1>
                            </Link>
                        </div>
                        <div className="item--vector">
                            <img src={image} alt=""/>
                            <Link to="/javascript">
                                <h1 className="item--ges">База Javascript</h1>
                            </Link>
                        </div>
                        <div className="item--vector">
                            <img src={images} alt=""/>
                            <Link to="/javascript">
                                <h1 className="item--ges">База Javascript</h1>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Script;