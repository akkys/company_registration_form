const INITIAL_STATE = {
	createJob: []
}

const jobReducer = (states = INITIAL_STATE, action) => {
		if(action.type === 'CREATE_JOB') {
			const result = states.createJob.push(action.payload);
		return states;
	}
	return states
}

export { jobReducer };