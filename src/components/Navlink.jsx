import React from 'react'
import { Link } from 'react-router-dom'

const Navlink = ({ href, label }) => {
    return (
        <li><Link href={href}>{label}</Link></li>
    )
}

export default Navlink