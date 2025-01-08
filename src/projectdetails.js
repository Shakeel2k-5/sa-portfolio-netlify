import React from "react";
import "./projectdetails.css"
import github from "./sources/bi_github.svg"

export default function ProjectDetails({ projecttitle, projectdescription, gitlink }) {
    return (
        <div className="projectdetailsdiv">
            <div className="projecttitle">{projecttitle}</div>
            <div className="projectdescription"><p>{projectdescription}</p></div>
            <div className="githublinkdiv">
                <div><img src={github} className="githublogo" alt="GitHub Logo" /></div>
                <div><a href={gitlink} target="_blank" rel="noopener noreferrer">{gitlink}</a></div>
            </div>
        </div>
    );
}