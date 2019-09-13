import React, { Component } from 'react';
import { Link } from 'react-router-dom';


export default class Navigation extends Component {
	render() {
		return (
			<div id="nav1">
				<nav className="navbar navbar-expand-lg">
		          <Link className="navbar-brand" id="navbrand" to="/">Dream Company Solutions</Link>
		          <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav" id="nav-ul">
				      <li className="nav-item active">
				        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/">About</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/">Companies</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/">Contact Us</Link>
				      </li>
				      <li className="nav-item">
				        <Link className="nav-link" to="/profile">View Profile</Link>
				      </li>	
				    </ul>
				  </div>
				  
		        </nav>  
			</div>
		);
	}
}
