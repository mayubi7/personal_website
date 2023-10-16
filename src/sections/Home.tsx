import coding from "../media/coding.png";
import React from "react";
import ContactInfo from "../components/contactInfo";

export function Home() {
    return (
        <div className={"h-screen"}>
        <div className={"flex items-center justify-between h-[93%]"}>
            <div className={"flex flex-col items-start text-left text-6xl"}>
                <span className={"font-bold text-[#5271FF]"}>Mariam Ayubi ―</span>
                <span>a computer science student</span>
                <ContactInfo />
            </div>
            <div className={"w-5/12"}>
                <img src={coding} alt={"female coding"}/>
            </div>
        </div>
        </div>
    )
}