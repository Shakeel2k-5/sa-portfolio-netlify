import React from "react";
import "./footer.css"
import github from "./sources/bi_github.svg"
import gmail from "./sources/mdi_gmail.svg"
import linkedin from "./sources/akar-icons_linkedin-fill.svg"
import leetcode from "./sources/simple-icons_leetcode.svg"


export default function FooterDiv(){
    return(
        <div>
            <footer>
                
                <div className="contactdiv">
                    <div><a href="mailto:shakeelabdullahahamedbatcha@gmail.com"><img src={gmail} className="contactlogo"/></a></div>
                </div>

                <div className="contactdiv">
                    <div><a href="https://github.com/Shakeel2k-5/"><img src={github} className="contactlogo"/></a></div>
                </div>
                
                <div className="contactdiv">
                    <div><a href="https://www.linkedin.com/in/shakeel-abdullah/"><img src={linkedin} className="contactlogo"/></a></div>
                </div>

                <div className="contactdiv">
                    <div><a href="https://leetcode.com/u/shakeel2005/"><img src={leetcode} className="contactlogo"/></a></div>
                </div>
            </footer>
        </div>
    )
}