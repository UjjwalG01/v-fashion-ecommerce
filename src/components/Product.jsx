import React from 'react'
import { Link } from 'react-router-dom'

const Product = ({ src, alt = "Product items", title, subtitle, href, children }) => {
    return (
        <li>
            <img src={src} alt={alt} />
            <div className="product-info">
                <div>
                    <h2 className="fs-400 fw-semibold">{title}</h2>
                    <p className="fs-200 fw-semibold product-sub-info">{subtitle}</p>
                </div>
                <Link to={href}>{children}</Link>
            </div>
        </li>
    )
}

export default Product