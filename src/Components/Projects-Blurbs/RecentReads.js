import './RecentReads.css';
import {Link} from "react-router-dom";

const RecentReads = () => {
    return (
        <div className="RecentReads">
            <div className="content-divided">
                <div className="project-icon">
                    <Link to="recentreads"><div className="recent-reads-icon"/></Link>
                </div>
                <div className="project-description">
                    <div className="project-title">
                        recent reads
                    </div>
                    <div className="project-body">
                       <br/> a blog platform to post reviews about books i've recently finished
                    </div>
                    <div className="project-link">
                        <br/> view source
                    </div>
                </div>
            </div>
            

        </div>
    )
}

export default RecentReads;