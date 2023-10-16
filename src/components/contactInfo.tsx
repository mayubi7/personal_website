import linkedinLogo from "../media/linkedin-logo.png";
import githubLogo from "../media/github-logo.png";
import React from "react";

type ContactInfoProps = {
    animateBounce?: boolean;
};

export default function ContactInfo({animateBounce = false} : ContactInfoProps) {
    let styles = "flex gap-5 mt-6 hover:cursor-pointer";
    styles = animateBounce ? `${styles} animate-bounce` : styles;
    return (
        <div className={styles}>
            <img className={"w-[45px]"} src={linkedinLogo} alt={"linkedin logo"} onClick={()=>{window.open("https://www.linkedin.com/in/mariam-ayubi/")}}/>
            <img className={"w-[45px]"} src={githubLogo} alt={"github logo"} onClick={()=>{window.open("https://github.com/mayubi7")}}/>
        </div>
    )
}