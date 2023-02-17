import React from 'react'
import './RecentReads.css'
import Header from '../Components/Header.js'

const RecentReads = () => {
    return (
        <React.Fragment>
            <Header showOthers={false}/>
            <h1 style={ {textAlign: 'center', justifyContent: 'center'}}>
                Oops! You caught me. I haven't reimplemented this yet.<br/>
                This is a big part of my website re-design. <br/>
                Check back soon!
            </h1>
        </React.Fragment>
    )
}

export default RecentReads;