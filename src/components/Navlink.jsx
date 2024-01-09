import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = ({ href, label, onClick }) => {
    return (
        <li><Link onClick={onClick} to={href}>{label}</Link></li>
    )
}

export default Navlink