import { companyReducer } from './CompanyReducer';
import { jobReducer } from './JobsReducer';
import { combineReducers } from 'redux';

export default combineReducers({
	companyData: companyReducer,
	jobs: jobReducer
})