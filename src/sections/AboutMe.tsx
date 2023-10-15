import React from "react";
import computer from "../media/computer.png";
import {CallMade} from "@mui/icons-material";
import resume from "../media/Mariam_Ayubi_Resume.pdf";
import {CustomizedButton} from "../components/CustomizedButton"

export function AboutMe() {
    return (
        <div className={"flex items-center justify-between h-screen"}>
            <div className={"w-[400px]"}><img src={computer} alt={"computer"}/></div>
            <div className={"flex flex-col items-start text-left max-w-[750px] gap-y-10"}>
                <span className={"font-bold text-[#5271FF] text-4xl"}>Passionate about life-long learning, I'm continuously searching for new problems to solve.</span>
                <span className={"text-2xl"}>
                    I'm a fourth-year Computer Science student at the University of British Columbia 👩🏻‍💻.
                    Whether it's web applications that help organizations ensure pay equality among their employees
                    or one that helps university students easily discover mental health services,
                    I enjoy using my technical skills to create positive impact. In my free time, I'm usually reading
                    to acquire new skills 📚 or practicing photography 📸.
                </span>
                <a href={resume} target={"_blank"} rel="noreferrer">
                    <CustomizedButton
                        variant="outlined"
                        size="large"
                        endIcon={<CallMade />}>
                        Resume
                    </CustomizedButton>
                </a>
            </div>
        </div>
    )
}