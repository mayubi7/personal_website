import connect from "../media/connect.png"
import React from "react";
import ContactInfo from "../components/contactInfo";

export default function Contact() {
    return (
        <div id={"contact"} className={"flex flex-col items-center justify-center h-screen"}>
            <div className={"flex items-end h-2/3"}>
                <img className={"w-[500px]"} src={connect} alt={"collaboration graphic"} />
            </div>
            <div className={"flex flex-col items-center bg-blue-200 w-screen pt-4 h-1/3"}>
                <h2 className={"text-5xl"}>Let's get in touch!</h2>
                <ContactInfo animateBounce={true}/>
            </div>
        </div>
    );
}