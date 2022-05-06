import React from "react";
import './portfolio.css'
import PortfolioCards from './PortfolioCards'


const Portfolio = () => {
    return (
        <div className="container header__container">
            <h1>Portfolio</h1>
            <p>WORK IN PROGRESS...</p>
            <div className="portfolio-container">
            <PortfolioCards ProjectName="KIT: Keep In Touch" Description="Aperiam consequuntur qui placeat amet. Et commodi voluptatem in adipisci quia qui molestias voluptate."/>
            <PortfolioCards ProjectName="FOREstCAST" Description="Aperiam consequuntur qui placeat amet. Et commodi voluptatem in adipisci quia qui molestias voluptate."/>
            <PortfolioCards ProjectName="Weather App" Description="Aperiam consequuntur qui placeat amet. Et commodi voluptatem in adipisci quia qui molestias voluptate."/>
            <PortfolioCards ProjectName="Run Buddy" Description="Aperiam consequuntur qui placeat amet. Et commodi voluptatem in adipisci quia qui molestias voluptate."/>
            <PortfolioCards ProjectName="FOREstCAST" Description="Aperiam consequuntur qui placeat amet. Et commodi voluptatem in adipisci quia qui molestias voluptate."/>
            <PortfolioCards ProjectName="README Generator" Description="Aperiam consequuntur qui placeat amet. Et commodi voluptatem in adipisci quia qui molestias voluptate."/>
            </div>
        </div>
    )
}

export default Portfolio