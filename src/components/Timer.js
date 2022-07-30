import React from "react";
import Helpers from "../helpers";
import TimerActionButton from './TimerActionButton';
class Timer extends React.Component{
    
    componentDidMount(){
        this.forceUpdateInterval=setInterval(()=>this.forceUpdate(),50)
    }

    componentWillUnmount(){ 
        clearInterval(this.forceUpdateInterval)
    }


    handleStartClick=(evt)=>{
        this.props.onStartClick(this.props.id);
    }

    handleStopClick=(evt)=>{
        this.props.onStopClick(this.props.id);
    }


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
                <TimerActionButton
                    timerIsRunning={this.props.runningSince!==null}
                    onStartClick={this.handleStartClick}
                    onStopClick={this.handleStopClick}
                />
            </div>
        )
    }
}

export default Timer;