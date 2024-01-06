import React from 'react'

const BrandLogo = ({ src, alt }) => {
    return (
        <li>
            <img src={src} alt={alt} />
        </li>
    )
}

export default BrandLogo