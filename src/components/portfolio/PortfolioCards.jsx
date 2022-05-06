import React from "react";
import './portfolio.css'
import KIT from '../../assets/KIT.png'

const PortfolioCards = (props) => {
    return (
        <>
        <div className="card-main">
            <p>{props.ProjectName} <img src= {KIT}  alt="" /></p>
        </div>
        </>
    )
}

export default PortfolioCards