import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const data = [
  {
    id: 1,
    date: '2023-12-07',
    customerName: 'John Doe',
    customerId: 'C001',
    orderId: 'O001',
    productId: 'P001',
    productName: 'Product 1',
    price: 50,
    quantity: 2,
  },
  // Add more data as needed
];

const Table = () => {
  return (
    <div className="container mt-5">
      <h1>Order Details</h1>
      <table className="table table-striped table-bordered table-responsive">
        <thead>
          <tr>
            <th>ID</th>
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
              <td>{item.id}</td>
              <td>{item.date}</td>
              <td>{item.customerName}</td>
              <td>{item.customerId}</td>
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
  );
};

export default Table;
