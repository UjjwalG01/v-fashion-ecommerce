import React from 'react'
import { LuLoader2 } from "react-icons/lu";


const Loading = () => {
    return (
        <div className='loading-main'>
            <div className="loading-content">
                <LuLoader2 className='spinner font-200' />
                <h1 className='font-100'>Loading...</h1>
            </div>
        </div>
    )
}

export default Loading