import React, { component, useState, useEffect, useContext } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    
} from "react-router-dom";
import PageNotFound from "./component/PageNotFound";
import Home from "./component/home";
import Scroll from "./component/scroll";
import Schedule from "./component/schedule";
import Statement from "./component/statement";
import Team from "./component/team";
import Organizer from "./component/organizer";
import Judges from "./component/judges";
import About from "./component/about";
import Logo from "./img/logo.jpg";
import { ContactSupportOutlined } from "@material-ui/icons";
import { Link, animateScroll as scroll } from "react-scroll";

function Content() {
    const [btntoggle, setbtntoggle] = useState(true);
    function SetButton() {
        setbtntoggle(!btntoggle);
        console.log("jbkjsb");
        if(btntoggle){
            console.log("on");

        }else{console.log("close");}
    }
    return (
        <div>
         
            <div className="">
           
                <nav class="navbar navbar-expand-lg  position-fixed ">
                    <a class="navbar-brand navbarimg" href="#home">
                        <img src={Logo} alt="logo" />
                    </a>
                  
                    {/* <button
                        class="navbar-toggler bg-light"
                        type="button"
                        onClick={SetButton}
                        data-toggle="collapse"
                        data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span
                            class={
                                btntoggle
                                    ? "navbar-toggler-icon "
                                    : "fa fa-close"
                            }
                        ></span>
                    </button> */}

                    <div
                        class="collapse navbar-collapse "
                        id="navbarSupportedContent navbar"
                    >
                        <ul class="navbar-nav mr-auto nav-link nav-links navbarul">
                            <li class="nav-item active navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    Home{" "}
                                </Link>
                            </li>
                            <li class="nav-item navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="Schedule"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    Schedule{" "}
                                </Link>
                            </li>
                            <li class="nav-item navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="ProblemStatement"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    Problem statement{" "}
                                </Link>
                            </li>
                            <li class="nav-item active navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="organizer"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    {" "}
                                    Organizer{" "}
                                </Link>
                            </li>
                            <li class="nav-item active navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="judges"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    {" "}
                                    Judges{" "}
                                </Link>
                            </li>
                            <li class="nav-item active navbarli">
                                <Link
                                    activeClass="active"
                                    class=""
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-79}
                                    duration={500}
                                    className="navbara"
                                >
                                    {" "}
                                    About Us{" "}
                                </Link>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
            <Home />
            <Schedule />
            <Statement />
            <Organizer /><hr></hr>
            <Judges />
            <About />
            <Scroll showBelow={250} />
        </div>
    );
}
const content = <Content></Content>;
ReactDOM.render(content, document.getElementById("root"));
