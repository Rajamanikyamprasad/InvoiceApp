import React, { useRef } from 'react'
	import { useState } from 'react';
	import axios from 'axios';
	import { useEffect } from 'react';
	// import { Link, useNavigate } from 'react-router-dom';

	import SearchbarSales from '../components/SearchbarSales';
	import { useReactToPrint } from 'react-to-print';
	import { FaRegShareSquare } from "react-icons/fa";
	import { RiFileDownloadLine } from 'react-icons/ri';
	import { FaDownload } from "react-icons/fa";
	import { TbHandClick } from "react-icons/tb";
	
	
	import html2canvas from 'html2canvas';
	import jsPDF from 'jspdf';
	
	import '../css/Salesreport.css'
	import '../css/ChangePage.css'
import SideNavbar from '../components/SideNavbar';


const API_ENDPOINT = 'https://localhost:7133/api/Values';

const CustomTableModal = ({ columns, updateColumnName, updateApiValue, deleteColumn, toggleEditing, addColumn, closeModal }) => (
  <div className="custom-table-modal">
    {columns.map((column, index) => (
      <div key={index}>
        <label>Column Name:</label>
        <input type="text" value={column.name} onChange={(e) => updateColumnName(index, e.target.value)} />

        <label>API Value:</label>
        <input type="text" value={column.apiValue} onChange={(e) => updateApiValue(index, e.target.value)} />

        <button onClick={() => toggleEditing(index)}>
          {column.isEditing ? 'Save' : 'Edit'}
        </button>
        {!column.isEditing && <button onClick={() => deleteColumn(index)}>Delete</button>}
      </div>
    ))}
    <button onClick={addColumn}>Add Column</button>
    <button onClick={closeModal}>Close</button>
  </div>
);

const ChangePage = () => {


  // const navigate = useNavigate();

	const [tableData, setTableData] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [columns, setColumns] = useState([{ name: 'Ordered Date', apiValue: 'orderDate', isEditing: false }]);
  const [isTableGenerated, setIsTableGenerated] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (isTableGenerated) {
      fetchTableData();
    }
  }, [isTableGenerated]);

  const fetchTableData = async () => {
    try {
      const response = await fetch(API_ENDPOINT);

      if (response.ok) {
        const data = await response.json();
        setTableData(data);
      } else {
        setError('Failed to fetch data from API');
      }
    } catch (error) {
      setError('Error fetching data from API');
    }
  };

  const updateColumnName = (index, value) => {
    const updatedColumns = [...columns];
    updatedColumns[index].name = value;
    setColumns(updatedColumns);
  };

  const updateApiValue = (index, value) => {
    const updatedColumns = [...columns];
    updatedColumns[index].apiValue = value;
    setColumns(updatedColumns);
  };

  const deleteColumn = (index) => {
    const updatedColumns = [...columns];
    updatedColumns.splice(index, 1);
    setColumns(updatedColumns);
  };

  const toggleEditing = (index) => {
    const updatedColumns = [...columns];
    const updatedColumn = { ...updatedColumns[index], isEditing: !columns[index].isEditing };
    updatedColumns[index] = updatedColumn;
    setColumns(updatedColumns);
  };

  const addColumn = () => {
    setColumns([...columns, { name: '', apiValue: '', isEditing: true }]);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const clearTable = () => {
    setTableData([]);
    setIsTableGenerated(false);
    setShowModal(false);
  };

  const generateTable = () => {
    setIsTableGenerated(true);
    setShowModal(false);
  };
	
	
	
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
	
		
		const contentRef = useRef(null);

		const handleDownloadPDFClick = () => {
			const input = contentRef.current;
	
			// Generate a canvas from the content
			html2canvas(input).then((canvas) => {
				// Convert canvas to base64 image data
				const imgData = canvas.toDataURL('image/png');
	
				// Create PDF using jsPDF
				const pdf = new jsPDF('p', 'mm', 'a4');
				const pdfWidth = pdf.internal.pageSize.getWidth();
				const pdfHeight = pdf.internal.pageSize.getHeight();
				const imgWidth = pdfWidth;
				const imgHeight = (canvas.height * imgWidth) / canvas.width;
	
				pdf.addImage(imgData, 'PNG', 0, 0, imgWidth, imgHeight);
				pdf.save('downloaded.pdf');
			});
		};
	
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
	


	
		return (
			<div>
				<SideNavbar/>
			<div id='left_box' >
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

			<div>
			<button onClick={() => setShowModal(true)}>Create Table</button>
      <button onClick={clearTable}>Clear</button>
      <button onClick={generateTable}>Generate Table</button>
			
      {showModal && (
        <CustomTableModal
          columns={columns}
          updateColumnName={updateColumnName}
          updateApiValue={updateApiValue}
          deleteColumn={deleteColumn}
          toggleEditing={toggleEditing}
          addColumn={addColumn}
          closeModal={closeModal}
        />
      )}

      {error && <div style={{ color: 'red' }}>{error}</div>}
			</div>
	
				<div ref={contentRef}  className="container mt-5" id='display1' >
				<div ref={ComponentPdf} className={ `selected-box ${selectedStyle || ''}`}  >
	
					<div className= 'saleshead_box'>
					<h2 style={{}}>PRODUCTS SALES INVOICES</h2>
					<div className='rowbox'>
					 <div className='sales_sidebox'>
						<h3>Your Company Name Here</h3>
							<h5>Address:</h5> 
							<h6>Street Address</h6>
							<h6>City,State,Zipcode-XXXXXX</h6>
							<h6>Phone No:</h6>
							 <h6>Email : </h6>
					 </div>
					 <div className='sales_midbox' ></div>
					 <div className=' sales_rightbox ' >
					 <div className='logobox'> Your Company Logo Here</div>
					 <h6 >Date</h6>
					 <h6 >From : XX-XX-XXXX</h6>
					 <h6>To   : XX-XX-XXXX</h6>
					 </div>
					</div>
					</div>
				<h1 className='orderdetails'>Order Details</h1>
			
				<div>

      <table className="custom-sales-table">
        <thead>
          <tr>
            {columns.map((column, index) => (
              <th key={index}>{column.name}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, rowIndex) => (
            <tr key={rowIndex}>
              {columns.map((column, colIndex) => (
                <td key={colIndex}>{item[column.apiValue]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
			</div>
			</div>
	
	</div>
			</div>
	)
}

export default ChangePage;
