import React from 'react';
import Logo from "../img/Vector.svg"
import img from "../img/image 5.svg"
import {Link} from "react-router-dom";

const Component = () => {
    return (
        <div className="content">
            <div className="container">
                <div className="daf">
                    <img className="daf--javafx" src={Logo} alt=""/>
                    <h1 className="daf--javafx--terrace">База Javascript</h1>
                </div>
                <div className="daf--javafx--terrace--line"/>
                <div>
                    <div className="shadow">
                        <h1 className="shadow--frigid">Суроо:</h1>
                        <h3 className="shadow--frigid--error">Кодто кандай ката бар</h3>
                        <p className="shadow--frigid--error--der">-- бул суроолор бекендтен келет</p>
                    </div>
                    <div className="swine">
                        <img className="swine--swaps" src={img} alt=""/>
                    </div>
                    <div className="medium">
                        <div className="sergeant">
                            <h1 className="sergeant--serve">A</h1>
                            <div>
                                <h1 className="sergeant--serve--fortify">Yes</h1>
                            </div>
                        </div>
                        <div className="sergeant">
                            <h1 className="sergeant--serve">B</h1>
                            <div>
                                <h1 className="sergeant--serve--fortify">Body</h1>
                            </div>
                        </div>
                    </div>
                    <div className="medium">
                        <div className="sergeant">
                            <h1 className="sergeant--serve">C</h1>
                            <div>
                                <h1 className="sergeant--serve--fortify">No</h1>
                            </div>
                        </div>
                        <div className="sergeant">
                            <h1 className="sergeant--serve">D</h1>
                            <div>
                                <h1 className="sergeant--serve--fortify">All</h1>
                            </div>
                        </div>
                    </div>
                   <Link to="/stop">
                       <button className="btn">Токтотуу</button>
                   </Link>
                </div>
            </div>
        </div>
    );
};

export default Component;