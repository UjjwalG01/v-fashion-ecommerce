import React from 'react'

import { Link } from 'react-router-dom'
import { GiBeachBag } from 'react-icons/gi'

const CollectionCard = ({ src, price, title, review, description }) => {
    return (
        <div className="flow-200 new-catelogue-grid">
            <div className="catelogue-img">
                <img src={src} alt="Product Image" />
                <span className='product-price font-200 fw-semibold'>${price}</span>
            </div>
            <div className="catelogue-info">
                <div className="product-title">
                    <h1 className='product-heading fs-300 fw-semibold'>{title}</h1>
                    <div className="review fw-semibold fs-200"><Link className='no-underline' to={"#"}>{review} Reviews &rarr;</Link></div>
                </div>
                <div className="product-description">
                    {description}
                </div>
                <div className="product-footer">
                    <button className="btn-product fw-semibold flex"><span><GiBeachBag /></span>SHOP THIS ITEM</button>
                    <div className="color-options">
                        <input readOnly type="color" value="#000" name="black" id="black" />
                        <input readOnly type="color" value="#ff0000" name="red" id="red" />
                        <input readOnly type="color" value="#e6c744" name="yellow" id="yellow" />
                        <input readOnly type="color" value="#b901e7" name="purple" id="purple" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CollectionCard