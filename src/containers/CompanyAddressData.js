import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCompanyAddress } from '../actions/Action';
import AddressInfo from '../components/AddressInfo';

class CompanyAddressData extends Component {
    render() {
        return (
        	<div>
            	<AddressInfo data={this.props.company.address} updateCompanyAddress={this.props.updateCompanyAddress} />
            	
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


export default connect(mapStateToProps, { updateCompanyAddress })(CompanyAddressData);
