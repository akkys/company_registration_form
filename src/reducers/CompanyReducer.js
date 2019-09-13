const INITIAL_STATE = {
		basic : null,
		address : null,
		clients : null
}

const companyReducer = (states = INITIAL_STATE, action) => {
	// console.log("action ", action)
	if (action.type === "COMPANY_BASIC") {
		return {...states, basic: action.payload}
	}
	if (action.type === "COMPANY_ADDRESS") {
		return {...states, address: action.payload}
	}
	if (action.type === "COMPANY_CLIENTS") {
		return {...states, clients: action.payload}
	}
	// console.log(states);
	return states
}

export { companyReducer };
