import React from "react";
import './portfolio.css'

const PortfolioCards = (props) => {
    return (
        <>
        <div className="card-main">
            <p className="project-name">{props.ProjectName} <img src= {props.Image}  alt="" /></p>
            <p className="project-description">{props.Description}</p>
            <a href={props.url} target="_blank" className="btn btn-primary portfolio-btn">View Project</a>
        </div>
        </>
    )
}

export default PortfolioCards