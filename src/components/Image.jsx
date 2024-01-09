import React, { useEffect, useRef, useState } from 'react'

const Image = ({ src, alt, className }) => {
    const [inView, setInView] = useState(false);
    const ref = useRef();

    let callback = (entries, observer) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                console.log(entry)
                setInView(true)
            }
        });
    }

    useEffect(() => {
        let observer = new IntersectionObserver(callback);
        if (ref?.current) observer.observe(ref.current)

        return () => observer.disconnect()
    }, [])

    return inView ? (
        <img loading='lazy' src={src} alt={alt} className={className} />
    ) : <img ref={ref} style={{ width: "100%", height: "100%", backgroundColor: "blueviolet" }} />
}

export default Image