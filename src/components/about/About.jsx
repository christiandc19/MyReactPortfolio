import React from "react";
import './about.css'
import Skills from './Skills'
import  meAbout from '../../assets/me_about.png'
import HeaderSocials from "../header/HeaderSocials";

const About = () => {
    return (
            <>
            <div class="bg-about"></div>
            <div className="primary-title about-container">
                <h1>ABOUT</h1>
                    <p className="bio"> My name is Chris Carandang, I’m a Web Developer/Artist, currently living in Los Angeles California. Aside from web development, I enjoy spending my time with nature, outdoor activities, travelling, camps, photography and beer. </p>

            <div className="me-about">
            {/* <img src={meAbout}  alt="" /> */}
            </div>

            </div>
            <h1>SKILLS</h1>

            <div className="container about-skills-container">
                <Skills
                    Gauge="85%"
                    Name="HTML/CSS"
                    ClassName="html"
                />
                <Skills
                    Gauge="50%"
                    Name="JavaScript"
                    ClassName="javascript"
                />

                <Skills
                    Gauge="65%"
                    Name="Bootstrap"
                    ClassName="bootstrap" />

                <Skills
                    Gauge="50%"
                    Name="Nodejs"
                    ClassName="nodejs" />

                <Skills
                    Gauge="55%"
                    Name="NoSql"
                    ClassName="nosql" />

                <Skills
                    Gauge="60%"
                    Name="Reactjs"
                    ClassName="reactjs" />

                <Skills
                    Gauge="75%"
                    Name="Photoshop"
                    ClassName="adobe" />
            </div>
            <p className="quote"> "“Website without visitors is like a ship lost in the horizon.” ― Dr. Christopher Dayagdag</p>
            <div>
            <HeaderSocials />
                    </div>
                    <div className="follow">
                    <p>Follow Me</p>
                    </div>
            </>
    )
}

export default About


