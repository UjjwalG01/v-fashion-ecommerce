import React from 'react'
import { Link } from 'react-router-dom'

import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin } from "react-icons/fa";

import Navlink from './Navlink'

const Footer = () => {
    return (
        <footer className="bg-dark-900 text-light-100 padding-block-700">
            <div className="container">
                <div className="even-columns | footer-content">
                    <div className="flow-300 | footer-left-container">
                        <Link className="logo text-light-100 font-size-500 fw-bold" to={"/"}><svg xmlns="http://www.w3.org/2000/svg" className="svg" stroke="white" viewBox="0 0 32 30" fill="none">
                            <path d="M31.1718 3.20422C21.8451 -0.11135 11.7076 -0.3852 2.21558 2.42202C1.83828 2.5123 1.48304 2.67769 1.17108 2.90831C0.859111 3.13893 0.596816 3.43004 0.39985 3.76427C0.202884 4.09851 0.0752869 4.469 0.0246769 4.85363C-0.0259332 5.23827 0.00148172 5.62916 0.105285 6.00297C0.624801 8.08787 1.38259 10.4833 2.29272 12.6551C2.30835 12.7059 2.33276 12.6815 2.33276 12.6307C2.20093 11.6122 2.98411 10.3261 4.5202 9.85832C11.9023 7.50895 19.8468 7.61413 27.1641 10.1581C27.434 10.2504 27.7196 10.2878 28.0042 10.2679C28.2887 10.2481 28.5664 10.1715 28.8209 10.0426C29.0754 9.91372 29.3015 9.7352 29.4859 9.51755C29.6702 9.29991 29.8092 9.04754 29.8945 8.77535C30.8046 5.84575 31.1718 3.85654 31.2626 3.35851C31.2782 3.26574 31.1962 3.23059 31.1718 3.2052V3.20422ZM8.66949 9.64935C7.55136 9.88274 6.0055 10.2499 4.84538 10.6347C2.52611 11.4344 2.63353 14.2566 3.86885 15.157C3.95967 14.6336 4.5202 13.9217 5.14518 13.6815C7.46054 12.7713 9.9468 12.2274 12.4604 12.0028C11.1831 11.4843 9.93703 10.7411 8.68609 9.64837L8.66949 9.64935ZM27.1328 15.2996C23.8008 13.734 20.1887 12.8523 16.5101 12.7065C12.8315 12.5608 9.16094 13.1539 5.71547 14.451C4.61101 14.8679 3.91963 16.2117 4.61101 17.487C5.81883 19.6707 7.18954 21.7602 8.71148 23.7378C8.49274 22.98 8.87945 21.5767 10.3638 21.1178C14.4691 19.8561 18.7766 20.3912 21.6398 21.5504C22.4484 21.8756 23.5929 21.6783 24.2345 20.7174C25.3286 19.0319 26.3237 17.2842 27.2148 15.4832C27.2549 15.4021 27.2149 15.3416 27.1328 15.2996ZM20.4807 25.4165C19.2797 24.81 18.1814 24.0189 17.2259 23.0718C16.7835 22.6294 16.1322 21.9937 15.4457 21.2359C13.8783 21.2359 12.3569 21.3931 10.73 21.9127C9.21928 22.3853 9.07768 24.1304 9.73879 25.0405C10.8569 26.434 11.6411 27.1859 12.892 28.4789C13.555 29.1291 14.4452 29.4954 15.3738 29.5C16.3024 29.5045 17.1962 29.147 17.8655 28.5033C18.842 27.5268 19.4426 26.8754 20.5461 25.6245C20.6115 25.5581 20.5861 25.4419 20.4797 25.4165H20.4807Z" fill="black" />
                        </svg>VFASHION</Link>
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
                                <Navlink href={"#"} label={"About"} />
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
                                <li>
                                    <button className="button btn-top | btn-sm-show">Sign Up</button>
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