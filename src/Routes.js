import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import BasicInfo from './components/BasicInfo';
import AddressInfo from './components/AddressInfo';
import ClientInfo from './components/ClientInfo';
import CompanyData from './containers/CompanyData';
import CompanyAddressData from './containers/CompanyAddressData';
import CompanyClientsData from './containers/CompanyClientData';
import CompanyProfile from './containers/CompanyProfile';
import JobProfile from './containers/JobProfile';
import CreateJobData from './containers/CreateJobData';

class Routes extends Component {
	render() {
		return (
			<BrowserRouter>
				<div>
					<Switch>
						<Route path="/basicInfo" component={BasicInfo} />
						<Route path="/address_info" component={AddressInfo} />
						<Route path="/client_info" component={ClientInfo} />
						<Route exact path='/' component={CompanyData} />
						<Route path="/profile" component={CompanyProfile} />
						<Route path="/companyAddressData" component={CompanyAddressData} />
						<Route path="/companyClientData" component={CompanyClientsData} />
						<Route path="/createJob" component={CreateJobData} />
						<Route path="/viewJobs" component={JobProfile} />
						
					</Switch>
				</div>
			</BrowserRouter>
		);
	}
}
 export default Routes;