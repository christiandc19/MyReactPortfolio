import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs'
import { BsFacebook } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'

const HeaderSocials = () => {
    return (
    <div className="header__socials">
        <a href="http://linkedIn.com" target='_blank'><BsLinkedin/></a>
        <a href="http://github.com" target='_blank'><BsGithub/></a>
        <a href="http://facebook.com" target='_blank'><BsFacebook/></a>
        <a href="http://twitter.com" target='_blank'><BsTwitter/></a>

    </div>
    )
}

export default HeaderSocials;

