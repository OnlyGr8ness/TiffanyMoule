import React from 'react';

class Navbar extends React.Component {
	render() {
		return(
			<header>
				<nav className="navbar navbar-expand-lg">
				  <div className="collapse navbar-collapse" id="navbarNav">
				    <ul className="navbar-nav mx-auto">
				      <li className="nav-item my-auto">
				        <a className="nav-link active-nav" href="#">Home <span className="sr-only">(current)</span></a>
				      </li>
				      <li className="nav-item my-auto">
				        <a className="nav-link" href="#">About</a>
				      </li>
				      <li className="nav-item my-auto">
				        <a className="nav-link" href="#">Blog</a>
				      </li>
							<a className="navbar-brand no-margin my-auto" href="#">
							    <img className="logo" alt="Tifffany Moule" src={require("../../css/img/logo.png")} />
							</a>
							<li className="nav-item my-auto">
				        <a className="nav-link" href="#">1 on 1</a>
				      </li>
				      <li className="nav-item my-auto">
				        <a className="nav-link" href="#">Shop</a>
				      </li>
				      <li className="nav-item my-auto">
				        <a className="nav-link" href="#">Login</a>
				      </li>
				    </ul>
				  </div>
				</nav>
			</header>
		)
	};
}

export default Navbar;