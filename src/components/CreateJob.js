import React, { Component } from 'react';
// import Navigation from './Navigation';
import { Link } from 'react-router-dom';
import * as _ from "lodash"

const Initial_State = {
				"createJob" : 
							{
								jobName: "",
								jobType: "",
								jobSkills: "",
								jobMinSalary: "",
								jobMaxSalary: "",
								jobDesc: ""	
							}
					}

class CreateJob extends Component {
	constructor(props){
		super(props);
		const State = _.cloneDeep(Initial_State)
		// console.log("States", State);

		this.state = State;
		// console.log("Initial_State", Initial_State);
	}

	handleInputTxt = (e) => {
		const state = this.state;
		const createJob = state.createJob;
		const Name = e.target.name;
		const Values = e.target.value;
		createJob[Name] = Values;
		this.setState({ createJob: createJob });
		// console.log("C J", createJob);
	}

	handleSubmit = (e) => {
		e.preventDefault();
    	console.log("Props", this.props);
    	console.log("State", this.state);
    	console.log("Submitted");
    	const result = this.state.createJob;
    	const jobResult = Object.assign({}, result);
    	console.log("Job result", jobResult);
    	console.log("Initial_State", Initial_State);	

    	this.setState(Initial_State);
    	return this.props.updateJobDetails(jobResult);


	}

	render() {
		// console.log("State", this.state);
		const jobFields = [ { label: "Title :", name: "jobName", placeholder: "Enter Job Title"},
								{ label: "Type :", name: "jobType", placeholder: "Enter job type" },
								{ label: "Skills :", name: "jobSkills", placeholder: "Enter required skills" }
							]
		
		const mappedJobFields = jobFields.map((jobField, i) => {
					return (
									<div key={i}>
										<label>{jobField.label}</label>
										<input type="text" name={jobField.name} placeholder={jobField.placeholder} id="txt-box" className="form-control" value={this.state.createJob[jobField.name]} onChange={this.handleInputTxt}/>
										<br />
									</div>
						)
		})

		return (
			<React.Fragment>
				
				<div className="row">
					<div className="col-sm-4">
					</div>
					<div className="col-sm-4 container1">
						<div className="">
			              <p className="cmpTitle">DREAM COMPANY </p>
			              <p className="cmpTitle">SOLUTIONS</p>
			              <p className="cmpTag">Job Creation Form</p><hr />
			              <p className="cmpSubTag"><u>Job Details</u><span className="subtag"> (* Fill out all the fields...)</span></p>
						</div>

						{mappedJobFields}
						<label className="">CTC / Year:</label>
						<div className="row">
							<div className="col-sm-6">
								<input type="textarea" placeholder="Min Salary" id="txt-box" className="form-control" name="jobMinSalary" value={this.state.createJob.jobMinSalary} onChange={this.handleInputTxt} />
							</div>
							<div className="col-sm-6">
								<input type="text" placeholder="Max Salary" id="txt-box" className="form-control" name="jobMaxSalary" value={this.state.createJob.jobMaxSalary} onChange={this.handleInputTxt} />
							</div>
						</div><br />
						<label>Description :</label>
			            <textarea type="text" className="form-control" id="txt-area" rows="4" placeholder="About job..." name="jobDesc" value={this.state.createJob.jobDesc} onChange={this.handleInputTxt}/>	
			            <hr />
			            <button type="submit" id="btn-submit" className="btn btn-primary btn-md btn-block" onClick={this.handleSubmit}>Save & Submit</button>
			            <br />
			            <Link to="/viewJobs" id="btn-prev" className="btn btn-info btn-md btn-block">View Jobs</Link>
					</div>
				</div>
				<div className="row">
					<div className="col-sm-4"></div>
					<div className="col-sm-4">

					</div>
				</div>
			</React.Fragment>
		);
	}
}

export default CreateJob;
