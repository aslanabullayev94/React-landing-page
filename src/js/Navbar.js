import React, { Component } from 'react'
import '../styles/Navbar.css'

class Navbar extends Component {
    constructor(props) {
        super(props);
        this.menuToggler = () => {
            document.querySelector(".Navbar-menu-wrapper").classList.toggle('hide-menu');
            document.querySelector(".Navbar-open-icon").classList.toggle('display');
            document.querySelector(".Navbar-close-icon").classList.toggle('display');
        }
    }
    render() {
        return (
            <div className="Navbar">
                <div className="Navbar-top">
                    <div className="Navbar-logo">Camping.</div>
                    <div className="Navbar-toggle-icons">
                        <i
                            className="display Navbar-open-icon fas fa-bars fa-2x"
                            onClick={this.menuToggler}
                        ></i>
                        <i
                            className="Navbar-close-icon far fa-window-close fa-2x"
                            onClick={this.menuToggler}
                        ></i>
                    </div>
                </div>
                <div className="Navbar-menu-wrapper hide-menu">
                    <ul className="Navbar-menu">
                        <div className="Navbar-menu-item">
                            <li>About</li>
                            <li>Contact</li>
                        </div>
                        <div className="Navbar-menu-item">
                            <li>Sign in</li>
                            <li>Sign up</li>
                        </div>
                    </ul>
                </div>
            </div>
        )
    }

}

export default Navbar;