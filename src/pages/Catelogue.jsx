import React from 'react'
import Footer from '../components/Footer'
import CollectionCard from '../components/CollectionCard'

// Images for the products
import product1 from "../assets/product1.png"
import product2 from "../assets/product2.png"
import product3 from "../assets/product3.png"
import product4 from "../assets/product4.png"
import product5 from "../assets/product5.png"

const Catelogue = () => {
    return (
        <div>
            <section className="padding-block-400">
                <div className="container">
                    <div className="new-catelogue-column">
                        <h1 className='font-100 text-center underline fw-semibold'>ALL OUR COLLECTIONS</h1>
                        <CollectionCard src={product1} price={"31"} title={"Cozy Comfort Benience"} review={"284"} description={"If you’re looking for a dress that is both stylish and unique, then this tiered dress is an excellent choice. The mix of red and pink hues creates a vibrant appearance that is sure to turn heads. The intricate designs add to its visual appeal, making it a statement piece. The overall style of the dress suggests a free-spirited, bohemian aesthetic that is perfect for any occasion."} />
                        <CollectionCard src={product2} price={"16"} title={"Cozy Comfort Benience"} review={"645"} description={"The dress is a light-colored, possibly white or cream, loose-fitting garment with blue embroidered patterns adorning the neckline, sleeves, and body. The dress is displayed on a mannequin against a white background. It has a V-neckline adorned with intricate blue embroidery that extends to the upper part of the sleeves and body. The sleeves are three-quarter length, wide and also feature similar blue embroidery. The body of the dress is loose-fitting and appears to be made of a light, breathable fabric suitable for warm weather. The overall style of the dress suggests a casual yet elegant aesthetic."} />
                        <CollectionCard src={product3} price={"25"} title={"Cozy Comfort Benience"} review={"301"} description={"Introducing our Classic Checkered Tote, a blend of elegance and functionality that is perfect for the modern woman on the go. The bag features a timeless checkered pattern in black and grey tones, ensuring it pairs seamlessly with any outfit. Crafted with precision, it boasts durable handles for comfortable carrying and ample interior space to house all your essentials. The gold-tone hardware adds a touch of luxury, making this tote not just a carry-all but a statement piece."} />
                        <CollectionCard src={product4} price={"28"} title={"Cozy Comfort Benience"} review={"203"} description={"If you’re looking for a dress that is both elegant and comfortable, then this bodysuit dress is an excellent choice. The wrap design creates a flattering V-neckline that adds to its aesthetic appeal. The long sleeves are snug, indicating the use of stretchable fabric. The dress is solid colored, making it easy to pair with other accessories. The bottom part of the bodysuit is not clearly visible but it seems to have a fitted structure."} />
                        <CollectionCard src={product5} price={"34"} title={"Cozy Comfort Benience"} review={"344"} description={"If you’re looking for a jacket that is both stylish and versatile, then this denim jacket is an excellent choice. The distressed design adds a touch of edginess to the classic blue denim color. The button-up front and chest pockets with button flaps are functional and practical. The jacket is worn open, revealing the white garment underneath, making it easy to pair with other accessories. The overall style of the jacket suggests a casual yet fashionable aesthetic."} />
                    </div>
                </div>
            </section>
            <Footer />
        </div>
    )
}

export default Catelogue