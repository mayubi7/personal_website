import {Button, styled} from "@mui/material";
import React from "react";

const NavBarButton = styled(Button)({
    textTransform: 'capitalize',
    color: 'black',
    fontSize: '16px',
}) as typeof Button;

export default function NavigationBar() {
    return (
        <div className={"flex w-screen h-[60px] justify-between"}>
            <div className={"flex items-center ml-8 gap-x-2 text-xl"}>
                <span className={"text-2xl animate-waving-hand"}>👋</span>
                <span className={"font-semibold"}> Mariam A.</span>
            </div>
            <div className={"flex justify-end items-center mr-8 w-3/4 text-l gap-x-4"}>
                <a href={"#about-me"}><NavBarButton>About Me</NavBarButton></a>
                <a href={"#projects"}><NavBarButton>Projects</NavBarButton></a>
                <a href={"#experience"}><NavBarButton>Experience</NavBarButton></a>
                <a href={"#contact"}><NavBarButton>Contact</NavBarButton></a>
            </div>
        </div>
    );
}