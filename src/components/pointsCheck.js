import React from 'react';
import img from "../img/image 5.svg";
import Logo from "../img/Vector.svg";
import {Link} from "react-router-dom";

const PointsCheck = () => {
    return (
        <div className="container">
            <div className="daf">
                <img className="daf--javafx" src={Logo} alt=""/>
                <h1 className="daf--javafx--terrace">База Javascript</h1>
            </div>
            <div className="daf--javafx--terrace--line"/>
            <div className="stop">
                <h1 className="stop--top">ФИО: Абдукарим</h1>
                <h1 className="stop--top">Балл: 20</h1>
            </div>
            <Link to='/'>
                <button className="btn">Башкы Бет</button>
            </Link>
        </div>
    );
};

export default PointsCheck;