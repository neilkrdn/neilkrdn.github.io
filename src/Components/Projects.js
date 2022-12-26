import './Projects.css'
import RecentReads from './Projects-Blurbs/RecentReads.js'
import BruinSource from './Projects-Blurbs/BruinSource.js'

const Projects = () => {
    return (
        <div className="Projects">
            <h4>projects</h4>
            <div className="recentreads"><RecentReads/></div>
            <div className="bruinsource"><BruinSource/></div>
        </div>
    )
}

export default Projects;