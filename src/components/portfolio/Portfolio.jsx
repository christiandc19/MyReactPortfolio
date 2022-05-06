import React from "react";
import './portfolio.css'
import PortfolioCards from './PortfolioCards'


const Portfolio = () => {
    return (
        <div className="container header__container">
            <h1>Portfolio</h1>
            <p>WORK IN PROGRESS...</p>
            <PortfolioCards ProjectName="KIT: Keep In Touch"/>
            <PortfolioCards ProjectName="FOREstCAST"/>
        </div>
    )
}

export default Portfolio