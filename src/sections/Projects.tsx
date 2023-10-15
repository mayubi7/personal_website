import React from "react";
import focusKeeper from "../media/focus-keeper.png"
import bringItUp from "../media/bring-it-up.png"
import silverGym from "../media/Silver-gym.png"
import insightUBC from "../media/insight-ubc.png"
import {ProjectCard} from "../components/ProjectCard"

export function Projects() {
    return (
        <div className={"flex flex-col h-screen justify-center"}>
            <h2 className={"text-4xl font-bold"}>Selected Projects</h2>
            <div className={"flex h-[500px] gap-x-5 items-center"}>
                <ProjectCard
                    styles={"bg-[#7451cb]"}
                    headerText={"Bring It Up"}
                    projectDescription={"In a group of 15, we built a web application that helps university students " +
                            "find mental health services that best suits their needs. As a front-end developer " +
                            "on the team, I built UI components using TypeScript, React and Material UI."}
                    image={bringItUp}
                    imageDescription={"bring it up UI"}
                    link={"https://github.com/bring-it-up/bring-it-up"}
                    technologies={"TypeScript, React, Material UI, npm, GitHub"} />
                <ProjectCard
                    styles={"bg-[#F6836B]"}
                    headerText={"Focus Keeper"}
                    projectDescription={"A Google Chrome extension that allows for focused study sessions " +
                        "by starting a pomodoro timer and blocking social media sites. " +
                        "It also has hourly and weekly views that display focus session history and statistics."}
                    image={focusKeeper}
                    imageDescription={"focus keeper UI"}
                    link={"https://github.com/mayubi7/focus_keeper"}
                    technologies={"JavaScript, HTML, CSS, Google Chrome extension APIs"} />
                <ProjectCard
                    styles={"bg-blue-300"}
                    headerText={"Silver's Gym"}
                    projectDescription={"Together with two other teammates, we designed and " +
                        "implemented a relational database for a gym and its common use cases. " +
                        "It supports adding, updating and deleting memberships, managing class enrollments and equipment rentals."}
                    image={silverGym}
                    imageDescription={"silver gym UI"}
                    link={"https://github.com/mayubi7/silver-gym"}
                    technologies={"pHp, Java, ?? TODO"} />
                <ProjectCard
                    styles={"bg-[#7451cb]"}
                    headerText={"Insight UBC"}
                    projectDescription={"Built for a software engineering course, Insight UBC reads and parses UBC course data and provides useful insights." +
                        " This project involved building an EBNF query engine that allows list and aggregate queries on the data."}
                    image={insightUBC}
                    imageDescription={"insight ubc UI"}
                    technologies={"TypeScript, Node, Mocha, Chai, ?? TODO"} />
            </div>
        </div>
    )
}