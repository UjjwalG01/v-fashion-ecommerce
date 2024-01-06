import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Navlink from './Navlink';
import { GiHamburgerMenu } from "react-icons/gi";
import { MdClose } from "react-icons/md";

import logo from "../assets/icon.png"
import { PageContext } from "../App";

const Header = () => {

    const { clicked, setClicked, handleNavClick } = useContext(PageContext)

    window.onresize = () => {
        setClicked(false)
    }
    return (
        <header className={`${clicked && 'primary-header'}`}>
            <div className="container">
                <div className="nav-wrapper">
                    <Link className="logo fw-bold" to={"/"}>
                        <img className="logo-icon" src={logo} alt="Logo" />
                        <span className="fs-500 fw-bold">VFASHION</span></Link>
                    <button onClick={handleNavClick} className="mobile-nav-toggle" aria-controls="primary-navigation">
                        {clicked ? (
                            <MdClose className="icon icon-close" />
                        ) : (
                            <GiHamburgerMenu className="icon icon-hamburger" />
                        )}
                        <span className="visually-hidden">Menu</span>
                    </button>
                    <nav className={`primary-navigation ${clicked ? 'show' : ''}`} id="primary-navigation">
                        <ul role="list" className="nav-list">
                            <Navlink href={"/catalogue"} label={"Catalogue"} />
                            <Navlink href={"/fashion"} label={"Fashion"} />
                            <Navlink href={"/favourite"} label={"Favourite"} />
                            <Navlink href={"/lifestyle"} label={"LifeStyle"} />
                            <li><button className="btn-sm-hidden | button btn-top">Sign Up</button></li>
                        </ul>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header