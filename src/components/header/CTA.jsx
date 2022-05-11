import React from "react";
import CV from '../../assets/cv.pdf'
import Contact from '../contact/Contact'

const CTA = () => {
    return (
        <div className="cta">
            <a href={CV} download className="btn">Download CV</a>
            <a href={Contact} className="btn btn-primary">Reach Out</a>
        </div>
    )
}

export default CTA;