import React from 'react'
import './Home.css'

const Home = () => {
    return (
        <div className="Home">
            <div className="content-divided">
                <div className="text-box">
                    <h3> Hi, I'm Neil Kardan <br/>
                    I'm a 4th year Computer Science <br/>
                    student at UCLA.</h3>
                </div>
                <div className="image-hero">
                    <div className="gradient-box"/>
                    <div className="image-box"/>   
                </div>
            </div>
        </div>
    )
}

export default Home;