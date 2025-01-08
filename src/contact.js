import React from "react";
import "./contact.css"
import gmail from "./sources/mdi_gmail.svg"
import linkedin from "./sources/akar-icons_linkedin-fill.svg"
import github from "./sources/bi_github.svg"
import leetcode from "./sources/simple-icons_leetcode.svg"


export default function Contact(){
    return(
        <div className="contactdiv">
            <div><h1>Contact</h1></div>

            <div className="detailsdiv">
                <div className="detail">
                    <div className="detaillogo"><img src={gmail}/></div>
                    <div><a href="mailto:shakeelabdullahahamedbatcha@gmail.com" className="detailcontent">shakeelabdullahahamedbatcha@gmail.com</a></div>
                </div>
                <div className="detail">
                    <div className="detaillogo"><img src={linkedin}/></div>
                    <div><a href="https://www.linkedin.com/in/shakeel-abdullah/" className="detailcontent">https://www.linkedin.com/in/shakeel-abdullah/</a></div>
                </div>
                <div className="detail">
                    <div className="detaillogo"><img src={github}/></div>
                    <div><a href="https://github.com/Shakeel2k-5/" className="detailcontent">https://github.com/Shakeel2k-5/</a></div>
                </div>
                <div className="detail">
                    <div className="detaillogo"><img src={leetcode}/></div>
                    <div><a href="https://leetcode.com/u/shakeel2005/" className="detailcontent">https://leetcode.com/u/shakeel2005/</a></div>
                </div>
            </div>
        </div>
    )
}