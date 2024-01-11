import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import Navlink from './Navlink'
import logo2 from "../assets/icon2.png"

const Footer = ({ className }) => {
    return (
        <footer className={`bg-dark-900 text-light-100 padding-block-700 ${className}`}>
            <div className="container">
                <div className="even-columns | footer-content">
                    <div className="flow-300 | footer-left-container">
                        <Link className="logo text-light-100 font-size-500 fw-bold" to={"/"}>
                            <img className="logo-icon" src={logo2} alt="Logo" />VFASHION</Link>
                        <p className="font-size-200">Complete your style with awesome clothes from us.</p>
                        <ul role="list" aria-label="social-links" className="social-links">
                            <li><Link aria-label="facebook" to={"#"}><FaFacebook /></Link></li>
                            <li><Link aria-label="instagram" to={"#"}><FaInstagram /></Link></li>
                            <li><Link aria-label="twitter" to={"#"}><FaTwitter /></Link></li>
                            <li><Link aria-label="linkedin" to={"#"}><FaLinkedin /></Link></li>
                        </ul>
                    </div>
                    <nav className="footer-nav">
                        <div className="flow-300 | single-col">
                            <ul role="list">
                                <li><p>Company</p></li>
                                <Navlink href={"/about"} label={"About"} />
                                <Navlink href={"#"} label={"Contact"} />
                                <Navlink href={"#"} label={"Support"} />
                                <Navlink href={"#"} label={"Careers"} />
                            </ul>
                        </div>

                        <div className="flow-300 | single-col">
                            <ul role="list">
                                <li><p>Quick Link</p></li>
                                <Navlink href={"#"} label={"Share Location"} />
                                <Navlink href={"#"} label={"Orders Tracking"} />
                                <Navlink href={"#"} label={"Size Guide"} />
                                <Navlink href={"#"} label={"FAQs"} />
                            </ul>
                        </div>

                        <div className="flow-300 | single-col">
                            <ul role="list">
                                <li><p>Legal</p></li>
                                <Navlink href={"#"} label={"Terms & conditions"} />
                                <Navlink href={"#"} label={"Privacy Policy"} />
                                <Navlink target={"_blank"} href={"https://www.figma.com/file/cc43P2ku48sDtnT0ywHVng/Shopping-Website-(Community)?type=design&node-id=2-2&mode=design&t=sHZUzmvbx3rkJZgf-0"} label={"FIGMA FILE"} className='flex'>
                                    <img className='figma-logo' src="https://2.bp.blogspot.com/-KVFNcyNJpmc/XIe-Sqa674I/AAAAAAAAIuk/VRK5WWydfD4yjMq_AkU6B2h3WAROEvOMgCK4BGAYYCw/s1600/logo%2Bfigma%2Bicon.png" alt="" />
                                </Navlink>
                                <li>
                                    <button className="button btn-top | btn-sm-show"><Link to={"/signin"}>Sign Up</Link></button>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>
        </footer>
    )
}

export default Footer