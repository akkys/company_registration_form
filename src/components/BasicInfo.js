import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';
// import * as _ from "lodash"

const InitialState = {
		"basicInfo" : 
					{ 
			            fname : "",
			            email : "",
			            password : "",
			            mobile : "",
						title : "" ,
						description : ""
					} 
					
}

class BasicInfo extends Component {
	constructor(props){
		super(props);
		this.state = InitialState;
	}

	handleInput = (e) => {
		e.preventDefault();
		const state = this.state;
		const basicInfo = state.basicInfo;
		const Name = e.target.name;
		// console.log("basic info", basicInfo);
		const updatedValue = e.target.value;
		basicInfo[Name] = updatedValue;
		// console.log("BI", basicInfo);
		// console.log(title);
		// console.log(state);
		// console.log(e.target.name);
		this.setState({ basicInfo: basicInfo });
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log("state", this.state);
		console.log("Submitted.");
		// console.log(InitialState.basicInfo);
		// this.setState(InitialState.basicInfo);
		// }
    	// console.log("InitialState", InitialState);
    	// this.setState(InitialState);
		return this.props.updateCompanyBasicData(this.state.basicInfo);

	}

	render() {
		// console.log("State", this.state);
		const fields =[ 
						{ label: "Proprietor Full name :", name: "fname", placeholder: "Enter Full Name"},
                    	{ label: "Company Name :", name: "title", placeholder: "Enter Company Name"},
                    	{ label: "Mobile Number :", name: "mobile", placeholder: "Enter Personal Contact Number"}	
				      ]

		const mappedFields = fields.map((field, i) => {
			// console.log("fieldName", field);
			return (
					<div key={i}>
						<label>{field.label} </label>
						<input type="text" className="form-control" placeholder={field.placeholder} id="txt-box" name={field.name} value={this.state.basicInfo[field.name]} onChange={this.handleInput} /><br />

				  </div>
				)

		});
		 

		 // console.log(fields);
		 // console.log(mappedFields);

	return(
      <React.Fragment>
      <Navigation />
      <div className="">
        
        <div className="row ">
          <div className="col-sm-4">
          </div>
          <div className="col-sm-4 container1">
            <div className="">
              <p className="cmpTitle">DREAM COMPANY </p>
              <p className="cmpTitle">SOLUTIONS</p>
              <p className="cmpTag">Create Company Form</p><hr />
              <p className="cmpSubTag"><u>Company Basic Details</u><span className="subtag"> (* Fill out all the fields...)</span></p>
		  	</div>
  					{mappedFields}
  			<label>Email Id :</label>
            <input type="email" className="form-control" id="txt-email" placeholder="Enter Email Address" name="email" value={this.state.basicInfo.email} onChange={this.handleInput}/>		
            <br />
            <label>Company Description :</label>
            <textarea type="text" className="form-control" id="txt-area" rows="4" placeholder="About Company..." name="description" value={this.state.basicInfo.description} onChange={this.handleInput}/>
  					<hr />
  					<button type="submit" id="btn-submit" onClick={this.handleSubmit} className="btn btn-primary btn-md btn-block">Save</button>
            <br />
            <div className="row">
              <div className="col-sm-6">
                
              </div>
              <div className="col-sm-6">
                 <Link to="/companyAddressData" id="btn-next" className="btn btn-secondary btn-sm btn-block">Next &raquo;</Link>
              </div>
          </div>
          </div>
        </div>
        
			</div>
      </React.Fragment>
		  
	)}
}

export default BasicInfo;