import React from "react";
import './portfolio.css'
import KIT from '../../assets/KIT.png'

const PortfolioCards = (props) => {
    return (
        <>
        <div className="card-main">
            <p>{props.ProjectName} <img src= {KIT}  alt="" /></p>
            <p>{props.Description}</p>
            <a className="btn btn-primary portfolio-btn">Visit Page</a>
        </div>
        </>
    )
}

export default PortfolioCards