import React from "react";
import ExperienceTimeline from "../components/ExperienceTimeline";
import Skills from "../components/Skills";
import Education from "../components/Education";

export default function Experience() {
    return (
        <div id={"experience"} className={"flex h-max justify-center items-center"}>
            <ExperienceTimeline/>
            <div className={"flex flex-col gap-y-4"}>
                <Skills />
                <Education />
            </div>
        </div>
    );
}