import {CustomizedButton} from "./CustomizedButton";
import {CallMade} from "@mui/icons-material";
import React from "react";

type ProjectCardProps = {
    styles: string;
    headerText: string;
    projectDescription: string;
    image: string;
    imageDescription: string;
    technologies: string;
    link?: string;
};

export function ProjectCard({styles, headerText, projectDescription, image, imageDescription, technologies, link}: ProjectCardProps) {
    return (
        <div className={`group basis-1/4 h-[400px] text-white rounded-xl hover:basis-1/3 hover:h-[450px] hover:shadow-lg duration-300 ease-in-out ${styles}`}>
            <h3 className={"text-lg font-bold m-6"}>{headerText}</h3>
            <p className={"mx-6 group-hover:hidden w-60"}>{projectDescription}</p>
            <div className={"flex flex-col group-hover:gap-10 m-6 w-80 hidden group-hover:block transition duration-300 delay-500"}>
                <img className={"mb-4"} src={image} alt={imageDescription}/>
                <p className={"mb-4"}>{"Technologies: " + technologies}</p>
                {typeof link == "string" &&
                    <CustomizedButton
                        variant="outlined"
                        endIcon={<CallMade/>}
                        onClick={() => {
                            window.open(link)
                        }}>
                        Learn more
                    </CustomizedButton>
                }
            </div>
        </div>
    );
}