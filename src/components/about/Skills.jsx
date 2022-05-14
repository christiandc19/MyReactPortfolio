import React from "react";
import './skills.css'

const Skills = (props) => {
    return (
        <>
        <section className="skills">
                <div className="html-css">
                    <h3>{props.Gauge}</h3>
                        <div class="bar-container">
                        <div class={props.ClassName}></div>
                    </div>
                    <div className="lang"><p>{props.Name}</p></div>

            </div>
        </section>
    </>
        
    )
}


export default Skills