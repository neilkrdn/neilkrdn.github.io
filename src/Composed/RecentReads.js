import React from 'react'
import './RecentReads.css'
import Header from '../Components/Header.js'
import RecentReadsPost from '../Components/RecentReadsPost'
import { Component } from 'react';
import { getDatabase, ref, get, child} from "firebase/database";
import {HashLink as Link} from "react-router-hash-link";

const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -100; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
  }

class RecentReads extends Component 
{
    constructor() 
    {
        super();
        this.state = {
            postNumber: 0,
            blogPosts: []
        };
        this.handlePostChange = this.handlePostChange.bind(this);
        this.handlePostBack = this.handlePostBack.bind(this);
    }

    handlePostChange()
    { 
        let numPosts = 0;
        const dbRef = ref(getDatabase());
        get(child(dbRef, `blogs`)).then((snapshot) => {
  
        if (snapshot.exists()) {
            console.log("nice!");
            numPosts = (Object.keys(snapshot.val()).length-1)
            if (this.state.postNumber < numPosts)
            {
              console.log("Increment")
              this.setState({ postNumber: this.state.postNumber + 1 })
            }
            else 
            {
              this.setState({ postNumber: 0 })
              console.log("Decrement")
            }
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
    }
    
    handlePostBack()
    {
      let numPosts = 0;
      const dbRef = ref(getDatabase());
        get(child(dbRef, `blogs`)).then((snapshot) => {
        if (snapshot.exists()) {
            console.log("nice!");
            numPosts = (Object.keys(snapshot.val()).length-1)
            if (this.state.postNumber > 0 )
            {
              console.log("Decrement")
              this.setState({ postNumber: (this.state.postNumber - 1 )})
            }
            else 
            {
              this.setState({ postNumber: numPosts })
              console.log("Increment")
            }
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
    }

    accessBlogPosts()
    {
        const dbRef = ref(getDatabase());
        get(child(dbRef, `blogs`)).then((snapshot) => {
        if (snapshot.exists()) {
            this.generateBlogPosts(snapshot)
        } else {
            console.log("No data available");
        }
        }).catch((error) => {
            console.error(error);
        });
    }

    generateBlogPosts(snapshot)
    {
        if (this.state.blogPosts.length < Object.keys(snapshot.val()).length) {
            for (var i = Object.keys(snapshot.val()).length-1; i >= 0; i--)
            {
                var keys = Object.keys(snapshot.val());
                var tempPost=(snapshot.val()[keys[i]].blogPost)
                const post = <RecentReadsPost 
                    key={i}
                    title={tempPost.title}
                    subtitle={tempPost.subtitle}
                    description={tempPost.description}
                    signature={tempPost.signature}
                    read={tempPost.read}
                    write={tempPost.write}
                    date={tempPost.date}
                    time={tempPost.time}
                />
                this.setState((prevState) => ({blogPosts: [...prevState.blogPosts, post] }))
                console.log(this.state.blogPosts)
                console.log(post)
            }
        }
    }

    render() {
        this.accessBlogPosts();
        return ( 
            <div className="RecentReads">
                <Header showOthers={false}/>
                <div className="box">
                    <div className="title" >
                        <img className="recentreads" src={require('../Assets/recentreads-wide.png')} alt="recentreads logo"/>
                    </div>
                </div>
                <div className="postContent">
                    {this.state.blogPosts[this.state.postNumber]}
                </div>

                <div className="buttons">
                    <Link smooth scroll={el => scrollWithOffset(el)} to="/recentreads" className="recolor"><button onClick={this.handlePostBack} className="backArticle">Back</button></Link>
                    <Link smooth scroll={el => scrollWithOffset(el)} to="/recentreads"><button onClick={this.handlePostChange} className="forwardArticle">Next</button></Link>                   
                </div>
            </div>
        )
    }
}

export default RecentReads;