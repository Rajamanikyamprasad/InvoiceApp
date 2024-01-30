import { Link } from 'react-router-dom';
import React, { useState } from 'react';


function Dashboard(){
	const [selectedPage, setSelectedPage] = useState('home');

  const handlePageChange = (event) => {
    setSelectedPage(event.target.value)
	};

	return(
		<div id="parent_dashboard">
			<h1>DashBoard</h1>
			<button className="Dash_btn">Order Management</button>
			<button className="Dash_btn">Product Management</button>
			<button className="Dash_btn">Inventory</button>
			<button className="Dash_btn">Analytic Report</button>
			<button className="Dash_btn">Status</button>

			<select onChange={handlePageChange} value={selectedPage}>
        <option value="home">Home</option>
        <option value="about">About</option>
				<option value="DataDisplay">Salesreport</option>
        <option value="contact">Contact</option>
      </select>
      <Link to={`/${selectedPage}`}>
        <button>Go to {selectedPage}</button>
      </Link>
		</div>
	)
}

export default Dashboard;