import React from 'react'
import './About.css'

const About = () => {
    return (
        <div className="About">
            <h4>about me</h4>
            <div className="content-divided">
                <div className="image-hero">
                    <div className="gradient-box"/>
                    <div className="image-box"/>
                </div>
                <div className="text-box">
                    
                    I graduated from the UCLA Samueli School of Engineering with a B.S. in Computer Science, along with a technical breadth
                    in Linguistics, and in Technology Management.
                    <br/><br/>I'm an Amazon Future Engineer scholar, and have previously interned with Alexa Video, Amazon Music, and Shopping prior to starting full-time at Amazon.
                    <br/><br/>Outside of work, I love sports and art. Some of my hobbies include: rock climbing, tennis, painting, and reading.
                    
                </div>
            </div>
        </div>
    )
}

export default About;