import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const InitialState = {
		"addressData" : 
			{
		       	street : "",
	        	city : "",
	        	state : "",
	        	pincode : "",
	        	country : ""
	        }
		}

class AddressInfo extends Component {
		constructor(props) {
        super(props);
        this.state = InitialState;
    }

    handleInput = (e) => {
    	// console.log(e.target.name);
    	// this.setState({ [e.target.name] : e.target.value });
    	e.preventDefault();
    	const state = this.state;
    	const addressData = state.addressData;
    	const Name = e.target.name;
    	const Values = e.target.value;
    	addressData[Name] = Values;
    	this.setState({ addressData : addressData });
    }

    handleSubmit = (e) => {
    	e.preventDefault();
    	// console.log(e.target.value);
    	// this.setState(InitialState);
    	console.log("state", this.state);
        console.log("Submitted.");
    	return this.props.updateCompanyAddress(this.state.addressData);
    }
    render() {
    	// console.log("State", this.state);
    	const fields = [ { label: "Street Address", name: "street", placeholder: "Enter Street Address" } ]

    	const addFields = [ { label: "City", name: "city", placeholder: "Enter City Name" },
                            { label: "Pincode", name: "pincode", placeholder: "Enter Pincode" }
				          ]

	   	const addCFields = [ { label: "State", name: "state", placeholder: "Enter State Name" },
                             { label: "Country", name: "country", placeholder: "Enter Country Name" }
			 		        ]						    				

    	const mappedFields = fields.map((field, i) => {
    		// console.log("fieldName", field);
    		// console.log("mappedFields", mappedFields);
    		return(
    			<div key={i}>
    			<label>{field.label} :</label>
           		<input type="text" className="form-control" id="txt-box" placeholder={field.placeholder} name={field.name} value={this.state.addressData[field.name]} onChange={this.handleInput} /><br />
    			</div>
    			)
    	});

			const mappedaddFields = addFields.map((addField, i) => {
				return(
					<div key={i}>
    			<label>{addField.label} :</label>
           		<input type="text" className="form-control" id="txt-box" placeholder={addField.placeholder} name={addField.name} value={this.state.addressData[addField.name]} onChange={this.handleInput} /><br />
    			</div>
				)
			});
			const mappedaddCFields = addCFields.map((addCField, i) => {
				return(
					<div key={i}>
    			<label>{addCField.label} :</label>
           		<input type="text" className="form-control" id="txt-box" name={addCField.name} placeholder={addCField.placeholder} value={this.state.addressData[addCField.name]} onChange={this.handleInput} /><br />
    			</div>
				)
			});

        return (
        <React.Fragment>
        	<Navigation />
        <div>

        	<div className="row">
        		<div className="col-sm-4"></div>
        		<div className="col-sm-4 container1">
        			<div className="">
	              <p className="cmpTitle">DREAM COMPANY </p>
                  <p className="cmpTitle">SOLUTIONS</p>
	              <p className="cmpTag">Create Company Form</p><hr />
	              <p className="cmpSubTag"><u>Company Address Details</u><span className="subtag"> (* Fill out all the fields...)</span></p>
            	</div>
        			{mappedFields}
        			<div className="row">
        				<div className="col-sm-6">
        					{mappedaddFields}
        				</div>
        				<div className="col-sm-6">
        					{mappedaddCFields}
        				</div>
        			</div>
        			<hr />
        			<button type="submit" onClick={this.handleSubmit} id="btn-submit" className="btn btn-primary btn-md btn-block">Save</button><br />
							<div className="row">
								
								<div className="col-sm-6">
		           		<Link to="/" id="btn-prev" className="btn btn-danger btn-sm btn-block">&laquo; Previous</Link>
		           	</div>
								<div className="col-sm-6">
		           		<Link to="/companyClientData" id="btn-next" className="btn btn-secondary btn-sm btn-block">Next &raquo;</Link>
		           	</div>
		          </div>
						</div>
					</div>
					
        </div>
        </React.Fragment>
        );
    }
}

export default AddressInfo;
