import Timeline from "@mui/lab/Timeline";
import TimelineItem, {timelineItemClasses} from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import visierLogo from "../media/visier-logo.jpeg";
import awsLogo from "../media/aws-logo.png";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import sierraLogo from "../media/sierra-wireless-logo.png";
import React from "react";

type ExperienceItemProps = {
    logo: string;
    position: string;
    timeframe: string;
    descriptionList: string[];
}

const experienceData: ExperienceItemProps[] = [
    {
        logo: awsLogo,
        position: 'Software Dev Engineer',
        timeframe: 'May - Aug 2024',
        descriptionList: [
            'Designed and implemented a predictive capacity forecast for the SQS Frontend team utilizing Kotlin, ' +
            'Python, and Ruby to optimize resource allocation for peak events (Prime Day, Black Friday, etc.)' +
            ' based on historical traffic and the capacity model, resulting in improved system performance' +
            ' and cost efficiency.',
            'Developed a full-stack capacity forecasting solution from design to completion, including architecture ' +
            'design, coding, data engineering (Amazon RDS, S3, Lambda), machine learning (Amazon Forecast), and ' +
            'visualization (CloudWatch), delivering actionable insights for capacity planning.'
        ]
    },
    {
        logo: visierLogo,
        position: 'Software Developer',
        timeframe: 'Jan-Aug 2023',
        descriptionList: [
            'Resolved 95+ tickets, addressing bugs in the enterprise solution Visier People with Scala, ' +
            'JavaScript, and Angular, and crafted customer-facing features for Smart Compensation using Kotlin,' +
            ' PostgreSQL, TypeScript, React, Tailwind CSS, and Material UI.',
            'Delivered high-impact features for Smart Compensation, including the backend logic for a complex new' +
            ' bonus pay workflow with intricate calculations, within tight deadlines.'
        ]
    },
    {
        logo: sierraLogo,
        position: 'Software Test Engineer',
        timeframe: 'Jan-Aug 2022',
        descriptionList: [
            'Executed firmware and drivers tests of 5G IoT modules on Windows, Linux, ROCKPro ' +
            'and Raspberry Pi platforms.',
            'Developed automated test scripts in Python using internal and external libraries, such as PyWin32.'
        ]
    }
];

function ExperienceTimelineItem(props: ExperienceItemProps) {
    return (
        <TimelineItem>
            <TimelineSeparator>
                <div className={"w-40 h-20"}>
                    <img className={"w-40 h-20"} src={props.logo} alt={"logo"}/>
                </div>
                <TimelineConnector/>
            </TimelineSeparator>
            <TimelineContent>
                <div className={"text-lg"}>
                    <h3 className={"pt-2 text-xl font-bold"}>{props.position}</h3>
                    <p>{props.timeframe}</p>
                    <ul className={"py-4 list-disc"}>
                        {props.descriptionList.map((item) => (
                            <li className="py-2">
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
            </TimelineContent>
        </TimelineItem>
    )
}

export default function ExperienceTimeline() {
    return (
        <div className={"flex flex-col justify-center w-[900px]"}>
            <h2 className={"text-4xl ml-4 mb-4 font-bold text-[#5271FF]"}>Experience</h2>
            <Timeline className={"w-full"}
                      sx={{
                          [`& .${timelineItemClasses.root}:before`]: {
                              flex: 0,
                              padding: 0,
                          },
                      }}
            >
                {experienceData.map((item) => (
                    <ExperienceTimelineItem {...item} />
                ))}
            </Timeline>
        </div>
    );
}