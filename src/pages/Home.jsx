import vibingGirl from "../assets/landing-img_out.png";
import item1 from "../assets/item1.png"
import item2 from "../assets/item2.png"
import item3 from "../assets/item3.png"

import fav1 from "../assets/fav1.png"
import fav2 from "../assets/fav2.png"
import yellowImg from "../assets/girl-in-red-transformed.png"

// Carousel Images import
import HM from "../assets/h_m-remove.png";
import OBEY from "../assets/obey-remove.png";
import SHOPIFY from "../assets/shopify-remove.png";
import LACOSTE from "../assets/lacoste-remove.png";
import LEVI from "../assets/levis-remove.png";
import AMAZON from "../assets/amazon-remove.png";

import { FaArrowRightLong } from "react-icons/fa6";
import { Suspense, lazy } from "react";
import Image from "../components/Image";

const Button = lazy(() => import("../components/Button"));
const BrandLogo = lazy(() => import("../components/BrandLogo"));
const Product = lazy(() => import("../components/Product"));
const Footer = lazy(() => import("../components/Footer"));

// import Button from "../components/Button";
// import BrandLogo from "../components/BrandLogo";
// import Product from "../components/Product";
// import Footer from "../components/Footer";


function Home() {
    return (
        <>
            <main>
                <section className="padding-block-400">
                    <div className="container">
                        <div className="even-columns first-even-column gray-background">
                            <div className="flow-100 | text-section">
                                <h1 className="fs-primary-heading fw-bold | yellow-rect">LET'S EXPLORE UNIQUE CLOTHES.</h1>
                                <p className="fw-regular">Live for Influential and Innovative fashion!</p>
                                <Suspense fallback={"loading"}><Button className={"button"} label={"Shop Now"} /></Suspense>
                            </div>
                            <div className="img-section">
                                {/* <Image src={vibingGirl} alt={"A girl with pink dress enjoying the vibe."} /> */}
                                <img src={vibingGirl} alt="A girl with pink dress enjoying the vibe." />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-primary-400 text-light-100 padding-block-400">
                    <div className="carousel">
                        <div className="carousel-items">
                            <ul>
                                <Suspense fallback={"loading"}><BrandLogo src={HM} alt={"H&M logo"} /></Suspense>
                                <Suspense fallback={"loading"}><BrandLogo src={OBEY} alt={"OBEY logo"} /></Suspense>
                                <Suspense fallback={"loading"}><BrandLogo src={SHOPIFY} alt={"SHOPIFY logo"} /></Suspense>
                                <Suspense fallback={"loading"}><BrandLogo src={LACOSTE} alt={"LACOSTE logo"} /></Suspense>
                                <Suspense fallback={"loading"}><BrandLogo src={LEVI} alt={"LEVI logo"} /></Suspense>
                                <Suspense fallback={"loading"}><BrandLogo src={AMAZON} alt={"AMAZON logo"} /></Suspense>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="padding-block-900">
                    <div className="container">
                        <div>
                            <h2 className="fs-secondary-heading fw-bold padding-block-400 | text-center-sm">NEW ARRIVALS</h2>
                            <div className="product-items">
                                <ul role="list" className="even-columns | product">
                                    <Suspense><Product src={item1} title={"Hoodies & Sweetshirt"} subtitle={"Explore Now!"} href={"#"}>
                                        <FaArrowRightLong className="arrow" />
                                    </Product></Suspense>

                                    <Suspense><Product src={item2} title={"Coats & Parkas"} subtitle={"Explore Now!"} href={"#"}>
                                        <FaArrowRightLong className="arrow" />
                                    </Product></Suspense>

                                    <Suspense><Product src={item3} title={"Tees & T-Shirt"} subtitle={"Explore Now!"} href={"#"}>
                                        <FaArrowRightLong className="arrow" />
                                    </Product></Suspense>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padding-block-900 | payday-section">
                    <div className="no-container">
                        <div className="even-columns | payday-content">
                            <div className="image-section"><img src={yellowImg} alt="" /></div>
                            <div className="flow-300 | payday-sale">
                                <h1 className="fs-primary-heading-xl fw-bold | sale-title">PAYDAY SALE&nbsp; NOW</h1>
                                <h3 className="fs-500 fw-semibold">Spend minimal $100 get 30% off voucher code for your next purchase</h3>
                                <h3 className="fs-500 fw-bold">1 January - 30 January 2024</h3>
                                <h3 className="fs-500 fw-regular | no-top-margin">*Terms & Conditions apply</h3>
                                <Button className={"button"} label={"SHOP NOW"} />
                            </div>
                        </div>
                    </div>
                </section>

                <section className="padding-block-900">
                    <div className="container">
                        <div>
                            <h2 className="fs-secondary-heading fw-bold padding-block-400 | text-center-sm">Young's Favourite</h2>
                            <div className="product-items | favourite">
                                <ul role="list" className="even-columns | fav-columns">
                                    <Suspense><Product src={fav1} title={"Trending on instagram"} subtitle={"Explore Now!"} href={"#"}>
                                        <FaArrowRightLong className="arrow" />
                                    </Product></Suspense>

                                    <Suspense><Product src={fav2} title={"All Under $40"} subtitle={"Explore Now!"} href={"#"}>
                                        <FaArrowRightLong className="arrow" />
                                    </Product></Suspense>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                <section className="bg-primary-400 padding-block-900 text-light-100">
                    <div className="container">
                        <div className="one-column flow-200">
                            <p className="fs-700 fw-bold">JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</p>
                            <p className="fs-400 fw-regular">Type your email down below and be young wild generation</p>
                            <form action="#" className="input-form">
                                <input className="fs-200" type="email" placeholder="Add your email here." />
                                <Button type={"submit"} className={"button | email-btn"} label={"SEND"} />
                            </form>
                        </div>
                    </div>
                </section>
            </main>
            <Suspense fallback="loading.."><Footer /></Suspense>
        </>

    )
}

export default Home
