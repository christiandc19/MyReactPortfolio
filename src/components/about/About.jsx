import React from "react";
import './about.css'
import Skills from './Skills'
// import HTMLCSS from '../../assets/HTMLCSS.png'
// import Javascript from '../../assets/javascript_logo.png'



const About = () => {
    return (
        <div className="container about-container">

            <div className="primary-title">
                <h1>About</h1>
                <p className="quote"> "You can, you should, and if you're brave enough to start, you will." - Stephen King </p>
                <p className="bio"> My name is Chris, I’m a Web Developer/Artist, Currently living in Los Angeles California. Aside from web development, I enjoy spending my time with nature, outdoor activities, travelling, camps, photography and beer. </p>
            </div>

            <div className="about-skills-container">
                <Skills
                    Gauge="85%"
                    Name="HTML/CSS"
                    ClassName="html"
                // Image={HTMLCSS} 
                />
                <Skills
                    Gauge="75%"
                    Name="JavaScript"
                    ClassName="javascript"
                // Image={Javascript} 
                />

                <Skills
                    Gauge="65%"
                    Name="Bootstrap"
                    ClassName="bootstrap" />

                <Skills
                    Gauge="75%"
                    Name="Nodejs"
                    ClassName="nodejs" />

                <Skills
                    Gauge="55%"
                    Name="NoSql"
                    ClassName="nosql" />

                <Skills
                    Gauge="70%"
                    Name="Reactjs"
                    ClassName="reactjs" />

                <Skills
                    Gauge="75%"
                    Name="Photoshop"
                    ClassName="adobe" />
            </div>
        </div>
    )
}

export default About


