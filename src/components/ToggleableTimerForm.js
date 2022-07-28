import React from "react";
import TimerForm from './TimerForm'
class ToggleableTimerForm extends React.Component{
    state={
        isOpen:false,
    }

    handleFormOpen=(evt)=>{
        this.setState({
            isOpen:true
        });
    }

    handleFormClose=(evt)=>{
        this.setState({
            isOpen:false
        })
    }

    handleFormSubmit=(timer)=>{
        this.setState({
            isOpen:false
        })
        this.props.onFormSubmit(timer);
    }
    
    render(){
        if(this.state.isOpen){
            return(
                <TimerForm 
                onFormSubmit={this.handleFormSubmit}
                onFormClose={this.handleFormClose}/>
            )
        }
        return(
           <div className="ui basic content center aligned segment">
                    <button className="ui basic button icon"
                        onClick={this.handleFormOpen}
                    >
                            <i className="plus icon" />
                    </button>
           </div>
        )
    }
}

export default ToggleableTimerForm;