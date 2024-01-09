import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';

const ComingSoon = ({ page }) => {
    return (
        <div className='margin-top'>
            <div className='text-center flow-300 margin-top | coming-soon'>
                <h1 className='fs-900 fw-bold'>{page} page will be updated soon!</h1>
                <p className='fs-700'>This page is under development.</p>
            </div>
            <Footer />
        </div>
    )
}

export default ComingSoon;