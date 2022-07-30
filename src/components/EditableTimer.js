import React from "react";
import TimerForm from "./TimerForm";
import Timer from "./Timer";

class EditableTimer extends React.Component{
    state={
        editFormOpen:false
    }
    handleFormSubmit =(timer)=>{
        this.props.onFormSubmit(timer);
        this.closeEditForm();
    }
    handleEditForm=()=>{
            this.openEditForm();
    }

    openEditForm=()=>{
        this.setState({
            editFormOpen:true
        })
    }
    
    closeEditForm=()=>{
        this.setState({
            editFormOpen:false
        })
    }
    render(){
        if(this.state.editFormOpen){
            return(
                <TimerForm
                    id={this.props.id}
                    title={this.props.title}
                    project={this.props.project}
                    onFormClose={this.closeEditForm}
                    onFormSubmit={this.handleFormSubmit}
                />
                )
        }
        return(
            <Timer
            id={this.props.id}
            title={this.props.title}
            project={this.props.project}
            elapsed={this.props.elapsed}
            editForm={this.handleEditForm}
            runningSince={this.props.runningSince}
            onDelete={this.props.onDelete}
            onStartClick={this.props.onStartClick}
            onStopClick={this.props.onStopClick}
            />
        )
    }
}

export default EditableTimer;