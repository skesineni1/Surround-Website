import React, { Component } from "react";
import { Link } from "gatsby";
import logo from "../../images/iconfinder_Science__Technology_35_2633208.svg";
export default class Navbar extends Component {
state = {
    navbarOpen: false,
    css: "collapse navbar-collapse show",
    links: [
    {
        id: 1,
        path: "/",
        text: "Home"
    },
    {
        id: 2,
        path: "/",
        text: "Docs"
    },
    {
        id: 3,
        path: "/Blog",
        text: "Blog"
    },
    {
        id: 4,
        path: "https://github.com/a2i2/surround",
        text: "GitHub"
    }
    ]
};
navbarHandler = () => {
    this.state.navbarOpen
    ? this.setState({
        navbarOpen: false,
        css: "collapse navbar-collapse"
        })
    : this.setState({
        navbarOpen: true,
        css: "collapse navbar-collapse show"
        });
};
render() {
    return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
        <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
        
        </Link>
        <button
        className="navbar-toggler"
        type="button"
        onClick={this.navbarHandler}
        >
        <span className="navbar-toggler-icon" />
        </button>
        <div className={this.state.css}>
        <ul className="navbar-nav mx-auto">
            {this.state.links.map(link => {
            return (
                <li key={link.id} className="nav-item">
                {link.id===4 &&
                    <a href={link.path} target="_blank" className="nav-link text-capitalize ">
                    {link.text}
                    </a>}
                {link.id !=4 &&
                    <Link to={link.path} className="nav-link text-capitalize ">
                    {link.text}
                    </Link>}
                </li>
            );
            })}

            <li className="nav-item  ml-sm-5">
            
            </li>
        </ul>
        </div>
    </nav>
    );
}
}