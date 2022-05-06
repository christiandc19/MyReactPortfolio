import React from "react";
import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import ChrisLogo from '../../assets/chris_logo.png'
import HeaderSocials from './HeaderSocials';
const Header = () => {
    return (
            
        <header>
            <section className="container header__container">
                <p>Hello I'm</p>
                <div className="logo"><img src= {ChrisLogo} alt='logo'/></div>
                <h5 className="text-light">| Full Stack Developer | Artist | </h5>
                <CTA />
                <HeaderSocials></HeaderSocials>
                <div className="me">
                    <img src= {ME}  alt="" />
                </div>
            </section>
        </header>    

    )
}

export default Header