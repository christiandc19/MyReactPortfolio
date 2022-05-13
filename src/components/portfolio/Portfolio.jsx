import React from "react";
import './portfolio.css'
import HeaderSocials from "../header/HeaderSocials";
import PortfolioCards from './PortfolioCards'
import KIT from '../../assets/KIT.png'
import FOREstCAST from '../../assets/FOREstCAST.png'
import WEATHER from '../../assets/WEATHER_APP.png'
import WORKDAY_SCHEDULER from '../../assets/WORKDAY_SCHEDULER.png'
import RUNBUDDY from '../../assets/RUNBUDDY.png'
import NOTE_TAKER from '../../assets/NOTE_TAKER.png'


const Portfolio = () => {
    return (
        <>
        <div class="bg-portfolio"></div>

        <div className="header__container">
            <h1>PROJECTS</h1>
            <p>WORK IN PROGRESS...</p>
            <div className="portfolio-container">
            <PortfolioCards 
                Image={KIT} 
                ProjectName="KIT: Keep In Touch" 
                Description="KIT is an application for students to keep in touch after graduation. It allows users to post update, like and comment on a posts" 
                url="https://blooming-anchorage-21473.herokuapp.com/login"
            />
            <PortfolioCards Image={FOREstCAST} 
                ProjectName="FOREstCAST" 
                Description="Fore-st-cast is a web application where users can get information about different national parks depending on the state they choose."
                url="https://tokhalyan.github.io/fore-st-cast/"
            />
            <PortfolioCards Image={WEATHER}
                ProjectName="THE WEATHER APP" 
                Description="The challenge is to build a weather dashboard that will run in the browser and feature dynamically updated HTML and CSS."
                url="https://christiandc19.github.io/weather-dashboard-challenge/"
            />
            <PortfolioCards Image={WORKDAY_SCHEDULER}
                ProjectName="WORKDAY SCHEDULER" 
                Description="A calendar App that allows a user to save events for each hour of the day. The app will run in the browser. Feature dynamically updated HTML."
                url="https://christiandc19.github.io/work-day-scheduler-challenge/"    
            />
            <PortfolioCards Image={RUNBUDDY}
                ProjectName="RUNBUDDY" 
                Description="Run Buddy, a company that matches runners with personal trainers. A website that offers fitness training services."
                url="https://christiandc19.github.io/run-buddy/"
                />
            <PortfolioCards Image={NOTE_TAKER}
                ProjectName="NOTE TAKER" 
                Description="Note Taker is an App that can be used to write and save notes. This App will use an Express.js backend and will save and retrieve note data."
                url="https://nameless-falls-11259.herokuapp.com/"    
            />
            </div>
            <div className="portfolio-quote">
                    "“Great web design without functionality is like a sports car with no engine.”
– Paul Cookson
                    </div>
                    <div>
                    <HeaderSocials />
                    </div>
                    <div className="follow">
                    <p>Follow Me</p>
                    </div>

        </div>

        </>
    )
}

export default Portfolio