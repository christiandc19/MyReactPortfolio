import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import ChrisLogo from '../../assets/chris_logo.png'
import HeaderSocials from './HeaderSocials';
const Header = () => {
    return (
            
        <header>
            <section className="intro__container">


            <div className="me intro-flex2">
                    <img src= {ME}  alt="" />
                </div>


                <div className="intro_flex_items">
                <p>Hello I'm</p>
                <div className="logo"><img src= {ChrisLogo} alt='logo'/></div>
                <h5 className="text-light">| Full Stack Developer  |  Artist  | </h5>
                <CTA />
                </div>


                <div className="intro_flex_items">
                <HeaderSocials />
                </div>

                <div className="intro_quote">
                    "You can, you should, and if you're brave enough to start, you will." - Stephen King
                </div>

            </section>

                
        </header>    

    )
}

export default Header