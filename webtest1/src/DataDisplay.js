// src/components/DataDisplay.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DataDisplay = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://localhost:7021/api/Wdata'); // Replace with your API endpoint
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

	console.log(data)

  return (
    <div id='left_box'>
			<div className="container mt-5" id='display1'>
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
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.OrderDate}</td>
              <td>{item.customerName}</td>  
              <td>{item.coustmerId}</td>
              <td>{item.orderId}</td>
              <td>{item.productId}</td>
              <td>{item.productName}</td>
              <td>${item.price}</td>
              <td>{item.quantity}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    </div>
  );
};

export default DataDisplay;
