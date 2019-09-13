import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Navigation from '../components/Navigation';

class CompanyProfile extends Component {

	render() {
		console.log("Company Data ", this.props)
		const { company } = this.props
		
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
					<div className="col-sm-1">
						<Link to="/" className="btn btn-danger btn-md btn-block" id="btn-prev">Edit</Link>
					</div>
					</div><hr />
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">Proprietor Name</label>
						</div>
						<div className="col-sm-8">
							<label className="label-details">{company.basic.fname}</label>
						</div>
						<div className="col-sm-1">
							<Link to="/" className="btn btn-danger btn-md btn-block" id="btn-prev">Edit</Link>	
						</div>
					</div>
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">Contact Number</label>
						</div>
						<div className="col-sm-8">
							<label className="label-details">{company.basic.mobile}</label>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">Email Address</label>
						</div>
						<div className="col-sm-8">
							<label className="label-email">{company.basic.email}</label>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">About Company</label>
						</div>
						<div className="col-sm-8">
							<label className="label-desc">{company.basic.description}</label>
						</div>

					</div><hr />
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">Client Name</label>
						</div>
						<div className="col-sm-8">
							<label className="label-details">{company.clients.cname}</label>
						</div>
						<div className="col-sm-1">
							<Link to="/client_info" className="btn btn-danger btn-md btn-block" id="btn-prev">Edit</Link>
					</div>
					</div>
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">No. of Bond year</label>
						</div>
						<div className="col-sm-8">
							<label className="label-details">{company.clients.cbond}</label>
						</div>
					</div><hr />
					<div className="row">
						<div className="col-sm-1"></div>
						<div className="col-sm-2">
							<label className="label-name">Address</label>
						</div>
						<div className="col-sm-8">
							<p className="label-details"> {company.address.street},<br />
							 {company.address.city} - {company.address.pincode},<br />
							 {company.address.state}, {company.address.country}.</p>	
						</div>
						<div className="col-sm-1">
							<Link to="/address_info" className="btn btn-danger btn-md btn-block" id="btn-prev">Edit</Link>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-4"></div>
						<div className="col-sm-4">
							<Link to="/createJob" id="btn-create" className="btn btn-primary btn-md btn-block">Create Job</Link>
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
		company: RootStates.companyData
		
	})
}


export default connect(mapStateToProps)(CompanyProfile);
