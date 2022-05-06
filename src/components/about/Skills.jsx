import React from "react";
import './skills.css'

const Skills = (props) => {
    return (
        <>

        <section className="skills">
                <div className="html-css">
                    <h3>{props.Gauge}</h3>
                    <div class="bar-container">
                        <div class="progress-bar-skills"></div>
                    </div>
                    <p>{props.Name}</p>
                </div>
        </section>
    </>
        
    )
}

export default Skills