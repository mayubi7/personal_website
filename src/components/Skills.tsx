import React from "react";


export default function Skills() {
    return (
        <div className={"w-[380px]"}>
            <h2 className={"text-4xl font-bold mb-4 text-[#5271FF]"}>Skills</h2>
            <div className={"flex flex-col text-lg gap-y-1"}>
                <p><span className={"font-semibold"}>Languages:</span> Java, Kotlin, JavaScript, TypeScript, Scala, C/C++, Python, R</p>
                <p><span className={"font-semibold"}>Web:</span> HTML, CSS, React, TailwindCSS, Material UI, Node.js, Angular</p>
                <p><span className={"font-semibold"}>Testing:</span> JUnit, Mockk, Cypress, Mocha, Chai</p>
                <p><span className={"font-semibold"}>Version Control:</span> Git, Bitbucket</p>
            </div>
        </div>
    );
}