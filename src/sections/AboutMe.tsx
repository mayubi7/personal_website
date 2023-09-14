import React from "react";
import computer from "../images/computer.png";

export function AboutMe() {
    return (
        <div className={"flex items-center justify-between h-screen"}>
            <div className={"w-[500px]"}><img src={computer} alt={"computer"}/></div>
            <div className={"flex flex-col items-start text-left max-w-[1100px] gap-y-10"}>
                <span className={"font-bold text-[#5271FF] text-6xl"}>Passionate about life-long learning, I'm continuously searching for new problems to solve.</span>
                <span className={"text-3xl"}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu
                    fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa
                    qui officia deserunt mollit anim id est laborum.
                </span>
            </div>
        </div>
    )
}