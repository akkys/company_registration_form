import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateJobDetails } from '../actions/Action';
import CreateJob from '../components/CreateJob';

class CreateJobData extends Component {
    render() {
        // const 
        // console.log("this.props ", this.props)
        return (
        	<div>
            	<CreateJob updateJobDetails={this.props.updateJobDetails} />	
            </div>
        );
    }
}

function mapStateToProps(RootStates){
	// console.log("RootStates", RootStates);
    return({
        jobs: RootStates.createJob
        
    })
}


export default connect(mapStateToProps, { updateJobDetails })(CreateJobData);
