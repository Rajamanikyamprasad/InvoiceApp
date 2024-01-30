import React, { useRef } from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useEffect } from 'react';
import SearchbarSales from '../components/SearchbarSales';
import { useReactToPrint } from 'react-to-print';
import { FaRegShareSquare } from "react-icons/fa";
import { RiFileDownloadLine } from 'react-icons/ri';
import { FaDownload } from "react-icons/fa";
import { TbHandClick } from "react-icons/tb";
import DataContext from '../components/DataContext';
import { useContext } from 'react';


import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

import '../css/Salesreport.css'
import SideNavbar from '../components/SideNavbar';

const CoustmerReport = () => {


	const ComponentPdf = useRef();
	const ComponentPdf1 = useRef();
	
		
		const handleGeneratePDFClick = useReactToPrint({
			content:()=>ComponentPdf.current,
			documentTitle:"Salesreport",
			pageStyle: `
				@page {
					size: auto;
					margin: 0mm;
				}
				@media print {
					body {
						margin: 2px;
					}
					@page {
						font-size: 10pt; /* Adjust the font size as needed */
					}
				}
			`,
			onAfterPrint:()=>alert("data saved in pdf")
		});
	
				const [data, setData] = useState([]);
	
			useEffect(() => {
			const fetchData = async () => {
				try {
					const response = await axios.get('https://localhost:7133/api/Values'); // Replace with your API endpoint
					setData(response.data);
				} catch (error) {
					console.error('Error fetching data:', error);
				}
			};
	
			fetchData();
		}, []);
	
		const addColumnsToData = () => {
			return data.map(item => ({
				...item,
				total:item.price*item.quantity,
			}));
		};
	
			const handleDownloadPDFClick = ()=>{
			const input =ComponentPdf1.current;
			html2canvas(input).then((canvas)=>{
				const imgData =  canvas.toDataURL('');
				const pdf = new jsPDF('L','mm','a4',true);
				const pdfwidth = pdf.internal.pageSize.getWidth();
				const pdfheight =pdf.internal.pageSize.getHeight();
				const imgwidth =canvas.width;
				const imgheight = canvas.height;
				const ratio =  Math.min(pdfwidth/imgwidth , pdfheight/imgheight) ;
				const imgx = (pdfwidth-imgwidth*ratio)/2;
				const imgy = 30;
				// pdf.addImage(imgData, 'PNG', imgx, imgy, imgwidth*ratio, imgheight*ratio);
				pdf.save('Report.pdf');
					
			})
		}
		const updatedData = addColumnsToData();
	
		//select theme code
		const [isOpen, setIsOpen] = useState(false);
		const [selectedStyle, setSelectedStyle] = useState(null);
	
		const styleOptions = [
			{ label: 'Default', value: 'default-style' },
			{ label: 'Highlighted', value: 'highlighted-style' },
			{ label: 'Underlined', value: 'underlined-style' },
		];
	
		const toggleDropdown = () => {
			setIsOpen(!isOpen);
		};
	
		const selectStyle = (style) => {
			setSelectedStyle(style);
			setIsOpen(false);
		};
	
		// const userdata = useContext(DataContext);
	
		// console.log(userdata)
	
	
		return (
			<div>
				<SideNavbar/>
			<div id='left_box'>
				<SearchbarSales></SearchbarSales>
	
				<div className='download_div'>
	
				<div className=" {`box ${selectedStyle || ''}`} " id='themebtn' onClick={toggleDropdown}  style={{backgroundColor:'black'}}>Select Theme
				<TbHandClick />
					{isOpen && (
						<div className="dropdown">
							{styleOptions.map((option) => (
								<div
									key={option.value}
									className={`dropdown-option ${option.value}`}
									onClick={() => selectStyle(option.value)}
								>
									{option.label}
								</div>
							))}
						</div>
					)}
					</div>
	
	<div className="generate-pdf-button" onClick={handleGeneratePDFClick}  style={{backgroundColor:'green'}}>Share
						<FaRegShareSquare />
					</div>
	
						<div className="generate-pdf-button" onClick={handleGeneratePDFClick} style={{backgroundColor:'navy'}}>Save PDF
						<RiFileDownloadLine />
					</div>
	
					<div className="generate-pdf-button" onClick={handleDownloadPDFClick} >Download 
					<FaDownload/>
					</div>
	
					
			</div>
	
				<div ref={ComponentPdf1}  className="container-fluid mt-5" id='display1'>
				<div ref={ComponentPdf} className={ `selected-box ${selectedStyle || ''}`}  >
				<h1 className='orderdetails'>Customer Details</h1>
				<table className=" sales_table" style={{width:'100%'}}>
					<thead>
						<tr>
							<th>Email</th>
							<th>Customer Name</th>
							<th>Enrolled Date</th>
							<th>Channel Attribution</th>
							<th>No Orders</th>
							<th>Last Order date</th>
							<th>AOV</th>
							<th>Total Spent</th>
						</tr>
					</thead>
					<tbody>
						{updatedData.map((item) => (
							<tr key={item.id}>
								<td>{item.orderDate}</td>
								<td>{item.customerName}</td>  
								<td>{item.orderId}</td>
								<td>{item.productId}</td>
								<td>{item.productName}</td>
								<td>{item.deliveryDate}</td>
								<td>{item.quantity}</td>
								<td>₹{item.total}</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
			</div>
	</div>
	
			</div>
	)
}

export default CoustmerReport
