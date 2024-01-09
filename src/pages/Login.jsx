import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Link } from 'react-router-dom'

import signin from "../assets/signin.png";

const Login = () => {
    return (
        <div>
            <section className="padding-block-400">
                <div className="container">
                    <div className="signin gray-background">

                        <div className="flow-100 signin-container">
                            <h1 className="font-size-500 fw-semibold">Login</h1>
                            <div action="#">
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
                            <p className="font-size-200 margin-top padding-block-400 fw-regular">Don't have an account <Link className='no-underline' to={"/signin"}>Signin</Link>.</p>
                        </div>
                        <div className="img-section btn-top | signin-img">
                            <img src={signin} alt="a signin form" />
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Login