import React from "react";
import './about.css'
import Skills from './Skills'
import HTMLCSS from '../../assets/HTMLCSS.png'


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
                        <Skills 
                            Gauge="85%" 
                            Name="HTML and CSS" 
                            ClassName="html" 
                            Image={HTMLCSS} />
                        <Skills 
                            Gauge="75%" 
                            Name="JavaScript" 
                            ClassName="javascript"
                            Image={HTMLCSS} />

                        <Skills 
                            Gauge="65%" 
                            Name="Bootstrap" 
                            ClassName="bootstrap"/>

                        <Skills 
                            Gauge="75%" 
                            Name="Nodejs" 
                            ClassName="nodejs"/>

                        <Skills 
                            Gauge="55%" 
                            Name="NoSql" 
                            ClassName="nosql"/>

                        <Skills 
                            Gauge="70%" 
                            Name="Reactjs" 
                            ClassName="reactjs"/>

                        <Skills 
                            Gauge="75%" 
                            Name="Adobe Suite" 
                            ClassName="adobe"/>
                    </div>
        </div>
    )
}

export default About


