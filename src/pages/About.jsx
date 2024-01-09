import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Button from '../components/Button'
import { FaQuoteLeft, FaRegCircleQuestion, FaTruck } from 'react-icons/fa6'
import { FaSignOutAlt } from 'react-icons/fa'
import { MdOutlineDiscount } from 'react-icons/md'

import parallexImg from "../assets/parallex-img.jpg"
import fashionImg from "../assets/fashion-img.jpg"
import journal1 from "../assets/journal-1.jpg"
import journal2 from "../assets/journal-2.jpg"
import journal3 from "../assets/journal-3.jpg"
import { Link } from 'react-router-dom'
// import Carousel from '../components/Carousel'

const About = () => {
    const data = [
        {
            quote: "A great clothing brand is one that makes you feel confident, comfortable, and stylish all at once. It's not just about the clothes, but also about the experience of wearing them. A great brand should make you feel like you're part of a community, and that you're expressing yourself in a unique way. It's about creating a connection between the brand and the customer, and that connection should be meaningful and long-lasting.",
            writer: "Christopher Dior"
        },
        {
            quote: "The best clothing brands are those that are able to balance quality, affordability, and style. It's not easy to find a brand that can do all three, but when you do, it's a game-changer. Quality is important because it ensures that the clothes will last, and that they'll look good for a long time. Affordability is important because it makes fashion accessible to everyone, regardless of their budget. And style is important because it's what sets a brand apart from the rest.",
            writer: "Maggie Rio"
        },
        {
            quote: "A clothing brand that truly stands out is one that is able to capture the essence of its customers' personalities and lifestyles. It's not just about creating clothes that look good, but also about creating clothes that feel good. A great brand should be able to understand its customers on a deeper level, and create clothes that reflect their unique personalities. It's about creating a sense of identity and belonging, and that's what makes a brand truly special.",
            writer: "John Smith"
        },
    ]
    const [currentIndex, setCurrentIndex] = useState(0);

    const carouselInfiniteScroll = () => {
        if (currentIndex === data.length - 1) {
            return setCurrentIndex(0)
        }
        return setCurrentIndex(currentIndex + 1)
    }

    useEffect(() => {
        const interval = setInterval(() => { carouselInfiniteScroll() }, 3000)
        return () => clearInterval(interval)
    })
    return (
        <>
            <section className="wrapper">
                <div className="container | header">
                    <img loading='lazy' src={parallexImg} className='background' />
                    <div className="flow-100 | text-section | title">
                        <h1 className="fs-primary-heading clr-primary fw-bold">HERE'S ABOUT US!</h1>
                        <p className="fw-semibold">Elevate your style, elevate your confidence!</p>
                        <Button className={"button"} label={`EXPLORE US >`} />
                    </div>
                </div>
                <ul role='list' className='about-section-banner bg-light-100 margin-top'>
                    <li className='about-banner-item'>
                        <div className="sec-icon"><FaTruck /></div>
                        <div className="sec-text">
                            Free shipping Over $200</div></li>
                    <li className='about-banner-item'>
                        <div className="sec-icon"><FaSignOutAlt /></div>
                        <div className="sec-text">Money back Return within 7 days</div></li>
                    <li className='about-banner-item'>
                        <div className="sec-icon"><MdOutlineDiscount /></div>
                        <div className="sec-text">
                            Buy 4 get 5th 50% off</div></li>
                    <li className='about-banner-item'>
                        <div className="sec-icon"><FaRegCircleQuestion /></div>
                        <div className="sec-text">
                            Any questions? experts are ready</div></li>
                </ul>
                <section className="store-started-section padding-block-900 bg-light-100 no-top-margin">
                    <div className="container">
                        <div className="store-card">
                            <div className="about-image-content bg-accent-100"><img src={fashionImg} alt="A girl wearing black dress sitting in street" /></div>
                            <div className="about-image-description flow-200">
                                <h1 className='fw-semibold'>How was <span className='fw-bold'>VFASHION</span> Started?</h1>
                                <p className='font-100'>Welcome to VFASHION, where we believe that fashion is an expression of individuality. Our brand is dedicated to providing high-quality clothing that is both stylish and comfortable. We believe that fashion should be accessible to everyone, which is why we offer a wide range of sizes and styles to suit every taste. Our team of designers is passionate about creating unique pieces that are both timeless and on-trend. We use only the finest materials and pay close attention to every detail to ensure that our clothing is of the highest quality. At VFASHION, we are committed to providing our customers with exceptional service and a shopping experience that is both enjoyable and stress-free. Thank you for choosing VFASHION for all your fashion needs!</p>
                                <button className="button btn-top font-100">ABOUT STORE</button>
                            </div>
                        </div>
                    </div>
                </section>

                <section className='bg-light-100'>
                    <div className="container">
                        <div className="carousel-container">
                            {data.map((item, index) => {
                                return <div style={{ transform: `translateX(-${currentIndex * 100}%)` }} key={index} className="carousel-item">
                                    <div className="content flex">
                                        <div className="quote-icon"><FaQuoteLeft size={40} /></div>
                                        <div>
                                            <div className="quote font-100">{item.quote}</div>
                                            <span className='writer text-primary-400 font-100'>By. {item.writer}</span>
                                        </div>
                                    </div>
                                </div>
                            })}
                        </div>
                    </div>
                </section>

                <section className='bg-light-100'>
                    <div className="container padding-block-900">
                        <div className="journal-title">
                            <h1 className='fw-semibold'>Our Journal</h1>
                            <div className="link-articles font-100"><Link className='no-underline' to={"#"}>Read all Articles &rarr;</Link></div>
                        </div>
                        <div className="journal-columns">
                            <Link className="journal-item no-underline">
                                <div className="image"><img loading='lazy' src={journal3} alt="Our Journal Image 1" /></div>
                                <div className="journal-text">
                                    <div className="date fw-semibold font-200">23 Oct</div>
                                    <div className="journal-title font-100">Top 10 Casual Look Ideas To Dress Up Your Kids</div>
                                </div>
                            </Link>
                            <Link className="journal-item no-underline">
                                <div className="image"><img loading='lazy' src={journal1} alt="Our Journal Image 2" /></div>
                                <div className="journal-text">
                                    <div className="date fw-semibold font-200">02 Dec</div>
                                    <div className="journal-title font-100">Don't stress about the dress, we'll dress you to impress.</div>
                                </div>
                            </Link>
                            <Link className="journal-item no-underline">
                                <div className="image"><img loading='lazy' src={journal2} alt="Our Journal Image 3" /></div>
                                <div className="journal-text">
                                    <div className="date fw-semibold font-200">12 Jan</div>
                                    <div className="journal-title font-100">Every day is a fashion show and the world is your runway.</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </section>
                <Footer />
            </section>
        </>

    )
}

export default About