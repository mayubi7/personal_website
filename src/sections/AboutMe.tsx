import React from "react";
import computer from "../images/computer.png";
import {Button, styled} from "@mui/material";
import {CallMade} from "@mui/icons-material";
import resume from "../images/Mariam_Ayubi_Resume.pdf";

const CustomizedButton = styled(Button)({
    textTransform: 'capitalize',
    backgroundColor: '#5271FF',
    color: 'white',
    borderRadius: '50px',
    width: '150px',
    height: '60px',
    fontSize: '20px',
    '&:hover': {
        color: '#5271FF',
        borderColor: '#5271FF',
        backgroundColor: '#edeefc',
    },
}) as typeof Button;

export function AboutMe() {
    return (
        <div className={"flex items-center justify-between h-screen"}>
            <div className={"w-[500px]"}><img src={computer} alt={"computer"}/></div>
            <div className={"flex flex-col items-start text-left max-w-[1100px] gap-y-10"}>
                <span className={"font-bold text-[#5271FF] text-6xl"}>Passionate about life-long learning, I'm continuously searching for new problems to solve.</span>
                <span className={"text-3xl"}>
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