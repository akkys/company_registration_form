import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateCompanyBasicData } from '../actions/Action';
import BasicInfo from '../components/BasicInfo';

class CompanyData extends Component {
    render() {
        return (
        	<div>
            	<BasicInfo data={this.props.company.basic} updateCompanyBasicData={this.props.updateCompanyBasicData}/>
            	
            </div>
        );
    }
}

function mapStateToProps(RootStates){
	// console.log(RootStates);
    return({
        company: RootStates.companyData
        
    })
}


export default connect(mapStateToProps, { updateCompanyBasicData })(CompanyData);
