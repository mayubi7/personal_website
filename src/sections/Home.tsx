import linkedinLogo from "../images/linkedin-logo.png";
import githubLogo from "../images/github-logo.png";
import coding from "../images/coding.png";
import React from "react";

export function Home() {
    return (
        <div className={"flex items-center justify-between h-screen"}>
            <div className={"flex flex-col items-start text-left text-8xl"}>
                <span className={"font-bold text-[#5271FF]"}>Mariam Ayubi ―</span>
                <span>a computer science student</span>
                <div className={"flex gap-5 mt-10"}>
                    <img src={linkedinLogo} alt={"linkedin logo"} onClick={()=>{window.open("https://www.linkedin.com/in/mariam-ayubi/")}}/>
                    <img src={githubLogo} alt={"github logo"} onClick={()=>{window.open("https://github.com/mayubi7")}}/>
                </div>
            </div>
            <div className={"w-5/12"}>
                <img src={coding} alt={"female coding"}/>
            </div>
        </div>
    )
}