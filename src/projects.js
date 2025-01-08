import React from "react"
import "./projects.css"
import github from "./sources/bi_github.svg"
import ProjectDetails from "./projectdetails"

export default function Projects() {
    return (
        <div className="projectdiv">
            <div><h1>Projects</h1></div>

            <ProjectDetails 
                projecttitle="Hostel Management System" 
                projectdescription="I did a project for managing my college’s Gate pass issued by the Hostel wardens for the students. By using HTML, JavaScript, PHP, CSS, jQuery, and hosting it. The wandering of the students for getting a Gate pass during holidays is reduced and Approval and Denial of the gate pass request is made easier for the Hostel warden. I have done all the frontend and backend works in this website." 
                gitlink="https://github.com/Shakeel2k-5/Hostel-Website"
            />

            <ProjectDetails 
                projecttitle="Tappy Bird" 
                projectdescription=
                "Developed a web game application like Flappy bird which is played by tapping the screen We alternated the game play by using the Gyroscope of the user’s mobile"
                gitlink="https://github.com/Shakeel2k-5/"
            />
        </div>
    );
}