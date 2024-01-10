import React from 'react'

const ImageModal = ({ handleClose, show, children }) => {
    const showHideClassName = show ? 'modal display-block' : 'modal display-none';
    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                <img src={children} alt="modal" />
                <button onClick={handleClose}>Close</button>
            </section>
        </div>
    )
}



export default ImageModal