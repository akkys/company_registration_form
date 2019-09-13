import React, { Component } from 'react';
import { connect } from 'react-redux';

import { updateCompanyClients } from '../actions/Action';
import ClientInfo from '../components/ClientInfo';

class CompanyClientsData extends Component {
    render() {
        return (
        	<div>
            	<ClientInfo data={this.props.company.clients} updateCompanyClients={this.props.updateCompanyClients} />
            	
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


export default connect(mapStateToProps, { updateCompanyClients })(CompanyClientsData);
