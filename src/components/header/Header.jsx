import React from "react";
import { Fade } from "react-awesome-reveal";

import './header.css'
import CTA from './CTA'
import ME from '../../assets/me.png'
import ChrisLogo from '../../assets/chris_logo.png'
import HeaderSocials from './HeaderSocials';

const Header = () => {
    return (
    
        <header>
             <div class="bg"></div>
            <div class="bg bg2"></div>
            <div class="bg bg3"></div> 
            <Fade>
            <section className="intro__container">
            
                <div className="me">
                    <img src= {ME}  alt="" />
                </div>
            

                <div className="intro_flex_items logo">
                    <p>Hello I'm</p>
                    <div><img src= {ChrisLogo} alt='logo'/>
                    <h5 className="text-light">Full Stack Developer  |  Artist   </h5>
                </div>

                    <CTA />
                
                    <div className="intro_quote">
                    “Design doesn’t mean that every person [is] gonna like, love it, but that’s the creativity of [an] eye which creates something different.”
– Bijay Chhetri                    </div>
                    <div className="header__socials">
                    <HeaderSocials />
                    </div>
                    <div className="follow">
                    <p>Follow Me</p>
                    </div>
                </div>
             
            </section>
            </Fade>
        </header>    
       
    )
}

export default Header