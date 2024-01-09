import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import signin from "../assets/signin.png";

const SignIn = () => {
    return (
        <div>
            <section className="padding-block-400">
                <div className="container">
                    <div className="signin gray-background">
                        <div className="flow-100 signin-container">
                            <h1 className="font-size-500 fw-semibold">Sign In</h1>
                            <div action="#">
                                <div className="input-field">
                                    <label htmlFor="username">Username: </label>
                                    <input type="text" placeholder='Username' />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="email">Email: </label>
                                    <input type="email" placeholder='Enter your email' />
                                </div>
                                <div className="input-field">
                                    <label htmlFor="password">Password: </label>
                                    <input type="password" placeholder='Enter password' />
                                </div>
                                <button className='button | signin-btn' type='submit'>Submit</button>
                            </div>
                            <p className="font-size-200 margin-top padding-block-400 fw-regular">Already have account? <Link className='no-underline' to={"/login"}>Login</Link>.</p>
                        </div>
                        <div className="img-section btn-top | signin-img">
                            <img src={signin} alt="a signin form" />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default SignIn