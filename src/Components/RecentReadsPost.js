import { Component } from "react";
import './RecentReadsPost.css';
class RecentReadsPost extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: this.props.title,
            subtitle: this.props.subtitle,
            description: this.props.description,
            signature: this.props.signature,
            read: this.props.read,
            write: this.props.write
        }
    }

    render() {
        return (
            <div className="RecentReadsPost">
                <div className="row">
                    <div className="column1">
                        <div className="Title">
                            {this.state.title}
                        </div>
                        <div className="Subtitle">
                            {this.state.subtitle}
                        </div>
                    </div>
                    <div className="column2">
                        <div className="Read">
                            Read in {this.state.read}
                        </div>
                        <div className="Write">
                            Written on {this.state.write}
                        </div>
                    </div>
                </div> 
                <div className="Description">
                    <NewlineText text={this.state.description}></NewlineText>
                </div>
                <div className="Signature">
                    {this.state.signature}
                </div>
                
            </div>
        )
    }
}
function NewlineText(props) 
{
    const text = props.text;
    const newText = text.split('\n').map(str => <p><br></br>{str}</p>);
    return newText;
}

export default RecentReadsPost;