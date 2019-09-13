export const updateCompanyBasicData = (basic) => (dispatch) => {
	// console.log("basic", basic);
	dispatch({type: 'COMPANY_BASIC', payload: basic});
}

export const updateCompanyAddress = (address) => (dispatch) => {
	dispatch({type: 'COMPANY_ADDRESS', payload: address});
}

export const updateCompanyClients = (clients) => (dispatch) => {
	dispatch({type: 'COMPANY_CLIENTS', payload: clients});
}

export const updateJobDetails = (createJob) => (dispatch) => {
	// console.log("job", createJob);
	dispatch({type: 'CREATE_JOB', payload: createJob});
}