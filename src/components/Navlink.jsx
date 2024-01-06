import React from 'react'

const Navlink = ({ href, label }) => {
    return (
        <li><a href={href}>{label}</a></li>
    )
}

export default Navlink