import Timeline from "@mui/lab/Timeline";
import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import visierLogo from "../media/visier-logo.jpeg";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import sierraLogo from "../media/sierra-wireless-logo.png";
import React from "react";


export default function ExperienceTimeline() {
    return (
        <div className={"flex flex-col justify-center h-[400px] w-[900px]"}>
            <h2 className={"text-4xl ml-4 font-bold text-[#5271FF]"}>Experience</h2>
            <Timeline className={"w-full h-[500px]"}
                      sx={{
                          [`& .${timelineItemClasses.root}:before`]: {
                              flex: 0,
                              padding: 0,
                          },
                      }}
            >
                <TimelineItem>
                    <TimelineSeparator>
                        <div className={"w-40 h-20"}>
                            <img className={"w-40 h-20"} src={visierLogo} alt={"visier logo"}/>
                        </div>
                        <TimelineConnector/>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={"text-lg"}>
                            <h3 className={"pt-2 text-xl font-bold"}>Software Developer</h3>
                            <p>Jan-Aug 2023</p>
                            <ul className={"py-4"}>
                                <li>
                                    Contributed to the development and release of Visier’s new software solution,
                                    Smart Compensation, by resolving upwards of 95 tickets in a fast-paced environment
                                    with weekly sprints and tight deadlines.
                                </li>
                                <li>
                                    Shared ownership of 2 epics with a senior frontend developer to implement the backend
                                    of these features in Kotlin and assist with frontend tasks in React, TypeScript,
                                    Tailwind CSS and Material UI.
                                </li>
                            </ul>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <div className={"w-40 h-24"}>
                            <img className={"w-40 h-24"} src={sierraLogo} alt={"sierra wireless logo"}/>
                        </div>
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className={"text-lg"}>
                            <h3 className={"pt-8 text-xl font-bold"}>Software Test Engineer</h3>
                            <p>Jan-Aug 2022</p>
                            <ul className={"py-4"}>
                                <li>
                                    Executed firmware and drivers tests of 5G IoT modules on Windows, Linux, ROCKPro and Raspberry Pi platforms.
                                </li>
                                <li>
                                    Developed automated test scripts in Python using internal and external libraries, such as PyWin32.
                                </li>
                            </ul>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
}