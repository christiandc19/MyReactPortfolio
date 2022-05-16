import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsMessenger } from 'react-icons/bs'

const HeaderSocials = () => {

    const style = { color: "white", fontSize: "1.5em" }

    return (

        

    <div className="header__socials">
        <a href="https://www.linkedin.com/in/chris-carandang/" target='_blank' style={style}><BsLinkedin/></a>
        <a href="https://github.com/christiandc19" target='_blank' style={style}><BsGithub/></a>
        <a href="https://www.facebook.com/chrisvisits/" target='_blank' style={style}><BsFacebook/></a>
        <a href="https://twitter.com/christiandc19" target='_blank' style={style}><BsTwitter/></a>
        <a href="https://www.instagram.com/christagram_19/" target='_blank' style={style}><BsInstagram/></a>
        <a href="https://www.m.me/chrisvisits/" target='_blank' style={style}><BsMessenger/></a>
    </div>
    )
}

export default HeaderSocials;

