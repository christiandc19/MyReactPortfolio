import React from "react";
import './portfolio.css'
import PortfolioCards from './PortfolioCards'


const Portfolio = () => {
    return (
        <div className="container header__container">
            <h1>Portfolio</h1>
            <p>WORK IN PROGRESS...</p>
            <div className="portfolio-container">
            <PortfolioCards ProjectName="KIT: Keep In Touch"/>
            <PortfolioCards ProjectName="FOREstCAST"/>
            <PortfolioCards ProjectName="Weather App"/>
            <PortfolioCards ProjectName="Run Buddy"/>
            <PortfolioCards ProjectName="FOREstCAST"/>
            <PortfolioCards ProjectName="README Generator"/>
            </div>
        </div>
    )
}

export default Portfolio