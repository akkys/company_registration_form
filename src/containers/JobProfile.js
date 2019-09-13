import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';
import { Link } from 'react-router-dom';
// import CreateJob from '../components/CreateJob';

class JobProfile extends Component {
	render() {
		
		const { jobs } = this.props;
		const { company } = this.props;
		console.log("Job Data :", jobs);
		const { createJob } = this.props.jobs;
		console.log("CreateJob", this.props);

		// const jobFields = [ { label: "Job Title" }]

		const mappedJobFields = createJob.map((jobField, i) => {
			console.log("job field", jobField);
			return (
				<React.Fragment>
					<div key={i} className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">Title</label>
						</div>
						<div className="col-sm-8">
							<label className="label-details">{jobField.jobName}</label>
						</div>
						<div className="col-sm-1">
							
						</div>
					</div>
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">Type</label>
						</div>
						<div className="col-sm-8">
							<label className="label-details">{jobField.jobType}</label>
						</div>
						<div className="col-sm-1">
							
						</div>
					</div>
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">Required Skills</label>
						</div>
						<div className="col-sm-8">
							<label className="label-details">{jobField.jobSkills}</label>
						</div>

					</div>
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">CTC / Year</label>
						</div>
						<div className="col-sm-5">
							<label className="label-details">{jobField.jobMinSalary} To {jobField.jobMaxSalary}</label>
						</div>
						<div className="col-sm-1">
							
						</div>
					</div>
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">Job Description</label>
						</div>
						<div className="col-sm-8">
							<label className="label-desc">{jobField.jobDesc}</label>
						</div>
						<div className="col-sm-1">
							
						</div>
					</div><hr /><br />
				</React.Fragment>
			);
		}) 
		
		return (
			<React.Fragment>
				<Navigation />
				<div className="container-profile">
				<div className="row">
					<div className="col-sm-3">
						<h2>Company Name</h2>
					</div>
					<div className="col-sm-8">
						<h2 className="cmp-name">{company.basic.title}</h2>
					</div>
					</div><hr />
					<div className="row">
						<div className="col-sm-1">
						</div>
						<div className="col-sm-9">
							<h3>Job Details</h3><hr />
						</div>
						<div className="col-sm-2">
							<Link to="/createJob" className="btn btn-secondary btn-md btn-block" id="btn-next" >Add Job</Link>
						</div>

					</div>
						
						{mappedJobFields}
					
					<div className="row">
						<div className="col-sm-4"></div>
						<div className="col-sm-4">
							<Link to="/createJob" id="btn-prev" className="btn btn-danger btn-md btn-block">Back</Link>
						</div>
					</div>
					</div>
			</React.Fragment>
		);
	}
}

function mapStateToProps(RootStates){
	// console.log(RootStates);
    return({
        jobs: RootStates.jobs,
        company: RootStates.companyData
    })
}

export default connect(mapStateToProps)(JobProfile);