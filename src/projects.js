import React from "react"
import "./projects.css"
import ProjectDetails from "./projectdetails"

export default function Projects() {
    return (
        <div className="projectdiv">
            <div><h1>Projects</h1></div>


            <ProjectDetails 
                projecttitle="Portfolio Website" 
                projectdescription="Designed and developed a personal portfolio website to showcase projects. Created UI with Figma and built the site using ReactJS for seamless navigation." 
                gitlink="https://github.com/Shakeel2k-5/Hostel-Website/Portfolio-Website"
            />

            <ProjectDetails 
                projecttitle="Gate Pass Management System" 
                projectdescription="eveloped a web-based gate pass system using HTML, JavaScript, PHP, CSS, jQuery, and MySQL. Reduced student wait time by 60% by streamlining approval and denial processes. Designed and implemented both frontend and backend functionalities."
                gitlink="https://github.com/Shakeel2k-5/Hostel-Website"
            />

            <ProjectDetails 
                projecttitle="Hostel Checkpoint" 
                projectdescription="Developed a hostel management system ensuring authorized entry using QuaggaJS barcode scanning . Implemented secure data storage using MongoDB, improving verification speed by 40%." 
            />
            
            <ProjectDetails 
                projecttitle="Book Lister" 
                projectdescription="Designed and Developed a library management system using Java and JavaFX for an interactive GUI. The system lists books retrieved from the Goodreads dataset, providing an efficient way to explore and manage library resources."
                
            />

            <ProjectDetails 
                projecttitle="Chess Game" 
                projectdescription="Developed a web game application like Flappy bird which is played by tapping the screen We alternated the game play by using the Gyroscope of the user's mobile"
            />

            <ProjectDetails 
                projecttitle="Tappy Bird" 
                projectdescription=
                "Developed a web game application like Flappy bird which is played by tapping the screen We alternated the game play by using the Gyroscope of the user's mobile"
            />
        </div>
    );
}