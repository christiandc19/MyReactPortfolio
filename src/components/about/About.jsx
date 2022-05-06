import React from "react";
import './about.css'
import Skills from './Skills'

const About = () => {
    return (
        <div className="container header__container">
            <h1>About</h1>
                <div className="quote">
                    "You can, you should, and if you're brave enough to start, you will." - Stephen King
                </div>

                <div className="bio">
                Lorem ipsum, or lipsum as it is sometimes known, is dummy text used in laying out print, graphic or web designs. The passage is attributed to an unknown typesetter in the 15th century who is thought to have scrambled parts of Cicero's De Finibus Bonorum et Malorum for use in a type specimen book. It usually begins with:

                “Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”                
                </div>

                    <div className="skills-container">
                        <Skills Gauge="90%" Name="HTML and CSS"/>
                        <Skills Gauge="75%" Name="JavaScript"/>
                        <Skills Gauge="75%" Name="Bootstrap"/>
                        <Skills Gauge="75%" Name="Nodejs"/>
                        <Skills Gauge="75%" Name="NoSql"/>
                        <Skills Gauge="75%" Name="Reactjs"/>
                        <Skills Gauge="75%" Name="Adobe Suites"/>
                    </div>
        </div>
    )
}

export default About


