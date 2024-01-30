import React from 'react';
import { useState } from 'react';

import { useContext } from 'react';
import MyContext from './MyContext';

const Web_Dashboard = () => {

	const [selectedPage, setSelectedPage] = useState('');


  const handlePageChange = (event) => {
    setSelectedPage(event.target.value);
	}
	console.log(selectedPage)

  return (
		<div>
			<div id='back_dashboard'>
		<div id='parent_dashboard'>
			<h1 style={{textAlign:'center'}}>DashBoard</h1>
			<button className='Dash_btn'>Order Mangement</button>
			<button className='Dash_btn'>Product Mangement</button>
			<button className='Dash_btn'>Inventory </button>
			<select className='Dash_btn'onChange={handlePageChange} value={selectedPage} style={{textAlign:'center'}}>
			<option value="Analytic">Analytic Report</option>
			<option value="About">About Report</option>
			<option value="Sales">Sales Report</option>
			<option value="contact">Contact Report</option>
			</select>
			<button className='Dash_btn'>Status</button>
			<button className='Dash_btn'>Delivery Mangement</button>

		</div>


		<div id='data_box'>
      <h1>Order Details</h1>
      <table className="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
            <th>Date</th>
            <th>Customer Name</th>
            <th>Customer ID</th>
            <th>Order ID</th>
            <th>Product ID</th>
            <th>Product Name</th>
            <th>Price</th>
            <th>Quantity</th>
          </tr>
        </thead>
        <tbody></tbody>
				</table>
				</div>


		</div>
		</div>
	);
	
};

export default Web_Dashboard;
