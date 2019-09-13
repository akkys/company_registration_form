
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Navigation from './Navigation';

const InitialState = {
		"clientInfo": {
						cname : "",
	        			cbond : "",
                        gName: "",
                        gQty: "",
                        gDelivery: "",
                        gAmount: ""
					  }
        
					}

class ClientInfo extends Component {
    constructor(props) {
        super(props);
        this.state = InitialState;
    }

    handleInput = (e) => {
    	// this.setState({ [e.target.name] : e.target.value });
    	const state = this.state;
    	const clientInfo = state.clientInfo;
    	const Name = e.target.name;
    	const Values = e.target.value;
    	clientInfo[Name] = Values;
    	this.setState({ clientInfo: clientInfo });
    }

    handleSubmit = (e) => {
    	e.preventDefault();
    	// this.setState(InitialState);
        console.log("Props", this.props);
    	console.log("State", this.state);
    	console.log("Submitted");
    	return this.props.updateCompanyClients(this.state.clientInfo);
    }

    render() {
    	const fields = [
    					{ label: "Client Name", name: "cname", placeholder: "Enter Client Name"},
    					{ label: "No. of Bond/Year", name: "cbond", placeholder: "Enter No. of Bonds per Year"}
    				   ]
        // const goodsFields = [
        //                      { label: "Goods Name", name: "gName", placeholder: "Enter Client's Goods Name"},
        //                      { label: "No. of Quantity", name: "gQty", placeholder: "Enter No. of Quantity of Goods"}
        //                     ]
    	const mappedFields = fields.map((field, i) => {
    		return (
    			<div key={i}>
    				<label>{field.label} :</label>
						<input type="text" name={field.name} placeholder={field.placeholder} id="txt-box" className="form-control" value={this.state.clientInfo[field.name]} onChange={this.handleInput} /><br />
    				</div>
    			)
    	});

    	// const mappedGFields = goodsFields.map((goodsField, i) => {
     //        return (
     //            <div key={i}>
     //                <label>{goodsField.label} :</label>
     //                    <input type="text" name={goodsField.name} placeholder={goodsField.placeholder} id="txt-box" className="form-control" value={this.state.clientInfo[goodsField.name]} onChange={this.handleInput} /><br />
     //                </div>
     //            )
     //    });

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
	              <p className="cmpSubTag"><u>Company Clients Details</u><span className="subtag"> (* Fill out all the fields...)</span></p>
	            </div>
							{mappedFields}<hr />
                   
							<button type="submit" id="btn-submit" onClick={this.handleSubmit} className="btn btn-primary btn-md btn-block">Save & Submit</button><br />

							<div className="row">
								<div className="col-sm-6">
									<Link to="/CompanyAddressData" id="btn-prev" className="btn btn-danger btn-sm btn-block">&laquo; Previous</Link>
								</div>
								<div className="col-sm-6">
									<Link to="/profile" id="btn-profile" className="btn btn-success btn-sm btn-block">View Company Profile &raquo;</Link>
								</div>
							</div> 
						</div>
					</div>
					
			</div> 
			</React.Fragment>       
        );
    }
}

export default ClientInfo;
