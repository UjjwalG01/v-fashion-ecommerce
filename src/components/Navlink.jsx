import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = ({ href, label, onClick, children, className, target }) => {
    return (
        <li><Link target={target} className={className} onClick={onClick} to={href}>{label}{children}</Link></li>
    )
}

export default Navlink