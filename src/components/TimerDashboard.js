import React from "react";
import EditableTimerList from "./EditableTimerList";
import ToggleableTimerForm from "./ToggleableTimerForm";
import './TimerDashboard.css'
import Helpers from '../helpers'
import Client from '../client'
import { v4 as uuidv4 } from 'uuid';

class TimerDashboard extends React.Component{

    state={
        timers:[],
    }

    handleStartClick=(timerId)=>{
        this.startTimer(timerId);
    }

    handleStopClick=(timerId)=>{
        this.stopTimer(timerId);
    }
    componentDidMount(){
        this.loadTimersFromServer();
        setInterval(()=>this.loadTimersFromServer(),5000)
    }
    loadTimersFromServer=()=>{
        Client.getTimers((serverTimers)=>{
            console.log(serverTimers)
            this.setState({timers:serverTimers})
        })
    }

    startTimer=(timerId)=>{
        const now= Date.now();

        this.setState({
            timers:this.state.timers.map((timer)=>{
                if(timer.id === timerId){
                    return{
                        ...timer,
                        runningSince: now
                    }
                }
                return timer;
            }),
        });

        Client.startTimer({id:timerId,start:now})
    }

    stopTimer=(timerId)=>{
        const now= Date.now();

        this.setState({
            timers:this.state.timers.map((timer)=>{
                if(timer.id === timerId){
                    const currentSessionElapsed = now - timer.runningSince;
                    return{
                        ...timer,
                        elapsed:timer.elapsed + currentSessionElapsed,
                        runningSince: null,
                    }
                }
                return timer;
            }),
        });
        Client.stopTimer({id:timerId,stop:now})
    }

    handleCreateFormSubmit=(timer)=>{
        this.createTimer(timer);
    }
    
    handleEditFormSubmit=(timer)=>{
        this.updateTimer(timer)
    }

    handleTrashItem=(timer)=>{
        this.deleteTimer(timer);
    }

    deleteTimer=(timer)=>{
        this.setState({
            timers:this.state.timers.filter((t)=>t.id!==timer)
        });
        Client.deleteTimer({id:timer})
    }

    updateTimer=(attr)=>{
        this.setState({
        timers:this.state.timers.map((timer)=>{
            if(timer.id===attr.id){
                return ({
                    ...timer,
                    title:attr.title,
                    project:attr.project
                })
            }return timer;
        })
    });
    Client.updateTimer({...attr})
    }
    createTimer=(timer)=>{
        const t = Helpers.newTimer(timer);
        this.setState({
            timers:this.state.timers.concat(t)
        });
        Client.createTimer({...t})
    }
    render(){
        return(
            <div className="main ui mt-2">
                <h1 className="ui dividing centered header">Timers</h1>
                    <div className="ui three column centered grid">
                        <div className="column">
                        <EditableTimerList 
                            timers={this.state.timers} 
                            onFormSubmit={this.handleEditFormSubmit} 
                            onDelete={this.handleTrashItem}  
                            onStartClick={this.handleStartClick}
                            onStopClick={this.handleStopClick}
                        />
                        <ToggleableTimerForm 
                            onFormSubmit={this.handleCreateFormSubmit}
                        />
            </div>
            </div>
        </div>
        )
    }
}

export default TimerDashboard;