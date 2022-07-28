import React from "react";
import EditableTimer from './EditableTimer'
class ToggleableTimerForm extends React.Component{
    render(){

      const timers=this.props.timers.map((timer)=>(
        <EditableTimer
        key={timer.id}
        id={timer.id}
        title={timer.title}
        project={timer.project}
        elapsed={timer.elapsed}
        runningSince={timer.runningSince}
        onFormSubmit={this.props.onFormSubmit}
        onDelete={this.props.onDelete}
        />
      ))
        return(
          <div id="timers">
              {timers}
          </div> 
        )
    }
}

export default ToggleableTimerForm;