import React from "react";
import Helpers from "../helpers";
class Timer extends React.Component{
    handleDelete=(evt)=>{
        // console.log(this.props.id)
        this.props.onDelete(this.props.id);
    }
    render(){
        return(
            <div className="ui centered card">
                <div className="content">
                    <div className="header">
                        {this.props.title}
                    </div>
                    <div className="meta">
                        {this.props.project}
                    </div>
                    <div className="center aligned description">
                        <h2>
                            {Helpers.renderElapsedString(this.props.elapsed,this.props.runningSince)}
                        </h2>
                    </div>
                    <div className="extra content">
                        <span className="right floated edit icon" onClick={this.props.editForm}>
                            <i className="edit icon" />
                        </span>
                        <span className="right floated trash icon" onClick={this.handleDelete}>
                            <i className="trash icon" />
                        </span>
                    </div>
                </div>
                <div className="ui bottom attached blue button basic">
                    Start
                </div>
            </div>
        )
    }
}

export default Timer;