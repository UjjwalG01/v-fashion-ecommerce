import React from 'react'

const Button = ({ className, label, type }) => {
    return (
        <button type={type | 'button'} className={className}>{label}</button>
    )
}

export default Button