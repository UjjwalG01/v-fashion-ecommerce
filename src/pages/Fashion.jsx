import React from 'react'
import Footer from '../components/Footer'

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
    return (
        <div>
            <section className="padding-block-400">
                <div className="container">
                    <div className="one-column">
                        <h1 className='font-200 padding-block-400 fw-semibold'>AVAILABE FASHIONED DESIGNS</h1>
                        <div className="flow-200 catelogue-grid">
                            <div className="box"><Image src={img1} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img2} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img3} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img4} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img5} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img6} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img7} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img8} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img9} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img10} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img11} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img12} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img13} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img14} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img15} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img16} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img17} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img18} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img19} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img20} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img21} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img22} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img23} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img24} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img25} alt={"catelogue image"} /></div>
                            <div className="box"><Image src={img26} alt={"catelogue image"} /></div>
                        </div>
                        <button className='catelogue-btn'>LOAD MORE</button>
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Fashion