import linkedinLogo from "../images/linkedin-logo.png";
import githubLogo from "../images/github-logo.png";
import coding from "../images/coding.png";
import React from "react";

export function Home() {
    return (
        <div className={"flex h-screen items-center justify-between space-between"}>
            <div className={"flex flex-col items-start text-left lg:text-8xl md:text-6xl sm:text-4xl"}>
                <span className={"font-bold text-[#5271FF]"}>Mariam Ayubi ―</span>
                <span>a computer science student</span>
                <div className={"flex gap-5 justify-start text-sm w-1/5 mt-10"}>
                    <div>
                        <img src={linkedinLogo} alt={"linkedin logo"} onClick={()=>{window.open("https://www.linkedin.com/in/mariam-ayubi/")}}/>
                    </div>
                    <div>
                        <img src={githubLogo} alt={"github logo"} onClick={()=>{window.open("https://github.com/mayubi7")}}/>
                    </div>
                </div>
            </div>
            <div className={"w-1/3"}>
                <img src={coding} alt={"female coding"}/>
            </div>
        </div>
    )
}