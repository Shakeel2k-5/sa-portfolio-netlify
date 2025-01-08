import React from "react";
import "./home.css"

export default function Home(){
    const handleDownload = () => {
        const fileUrl = process.env.PUBLIC_URL + 'profile.pdf';
    
        fetch(fileUrl)
          .then(response => response.blob())
          .then(blob => {
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.style.display = 'none';
            a.href = url;
            a.download = 'profile.pdf';
            document.body.appendChild(a);
            a.click();
            window.URL.revokeObjectURL(url);
          })
          .catch(() => alert('File download failed.'));
    };

    return(
        <div className="greetingdiv">
            <div className="intro">
                <div className="intro-1">
                    <div className="greetingtext">Hi, I am </div>
                    <div className="name">Shakeel Abdullah Ahamed Batcha</div> 
                </div>
            </div>

            <div>
                <span className="role">Web developer / UI UX Designer </span>
            </div>

            <div className="buttondiv">
                <button className="download-btn" onClick={handleDownload}>Download Resume</button>
            </div>
        </div>
    )
}