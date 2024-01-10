import React from 'react';
import Footer from '../components/Footer';

import img1 from "../assets/img1.jpg";
import img2 from "../assets/img2.jpg";
import img3 from "../assets/img3.jpg";
import img4 from "../assets/img4.jpg";
import img5 from "../assets/img5.jpg";
import img6 from "../assets/img6.jpg";
import img7 from "../assets/img7.jpg";
import img8 from "../assets/img8.jpg";
import img9 from "../assets/img9.jpg";
import img10 from "../assets/img10.jpg";
import img11 from "../assets/img11.jpg";
import img12 from "../assets/img12.jpg";
import img13 from "../assets/img13.jpg";
import img14 from "../assets/img14.jpg";
import img15 from "../assets/img15.jpg";
import img16 from "../assets/img16.jpg";
import img17 from "../assets/img17.jpg";
import img18 from "../assets/img18.jpg";
import img19 from "../assets/img19.jpg";
import img20 from "../assets/img20.jpg";
import img21 from "../assets/img21.jpg";
import img22 from "../assets/img22.jpg";
import img23 from "../assets/img23.jpg";
import img24 from "../assets/img24.jpg";
import img25 from "../assets/img25.jpg";
import img26 from "../assets/img26.jpg";
import Image from '../components/Image';

const Fashion = () => {

    const images = [img1,
        img2,
        img3,
        img4,
        img5,
        img6,
        img7,
        img8,
        img9,
        img10,
        img11,
        img12,
        img13,
        img14,
        img15,
        img16,
        img17,
        img18,
        img19,
        img20,
        img21,
        img22,
        img23,
        img24,
        img25,
        img26,
        Image];
    return (
        <div>
            <section className="padding-block-400">
                <div className="container">
                    <div className="one-column">
                        <h1 className='font-200 padding-block-400 fw-semibold'>AVAILABE FASHIONED DESIGNS</h1>
                        <div className="flow-200 catelogue-grid">
                            {images.map((image, index) => (
                                <div className="box" key={index}>
                                    {/* <Image src={image} alt={"Catelogue Image"} /> */}
                                    <Image src={image} alt={"Catelogue Image"} />
                                </div>
                            ))}
                        </div>
                        <button className='catelogue-btn'>LOAD MORE</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Fashion;