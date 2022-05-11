import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {

    const style = { color: "white", fontSize: "1.5em" }

    return (

        

    <div className="header__socials">
        <a href="http://linkedIn.com" target='_blank' style={style}><BsLinkedin/></a>
        <a href="http://github.com" target='_blank' style={style}><BsGithub/></a>
        <a href="http://facebook.com" target='_blank' style={style}><BsFacebook/></a>
        <a href="http://twitter.com" target='_blank' style={style}><BsTwitter/></a>
    </div>
    )
}

export default HeaderSocials;

