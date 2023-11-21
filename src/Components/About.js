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
                    
                    I’m a fourth year Computer Science major and Linguistics minor at UCLA. 
                    <br/><br/>I’ve previously interned at Amazon Shopping in experimentation and A/B testing in 2023 (Seattle), Amazon Music in 2022 (San Francisco), and Alexa Video (Seattle) in 2021.
                    <br/><br/>Outside of CS, I love sports and art. Some of my hobbies include: rock climbing, tennis, painting, and reading! 
                    
                </div>
            </div>
        </div>
    )
}

export default About;