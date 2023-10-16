import ubcLogo from "../media/ubc-logo.png";
import React from "react";

export default function Education() {
    return (
        <div className={"w-[380px]"}>
            <h2 className={"text-4xl font-bold my-4 text-[#5271FF]"}>Education</h2>
            <div className={"flex gap-x-2"}>
                <div>
                    <img className={"w-20 h-24 mt-2"} src={ubcLogo} alt={"ubc logo"} />
                </div>
                <div className={"flex flex-col text-lg"}>
                    <p className={"font-bold"}>The University of British Columbia</p>
                    <p>Sep 2019 - Dec 2024</p>
                    <p>Bachelor's of Science in Computer Science</p>
                </div>
            </div>
        </div>
    )
}