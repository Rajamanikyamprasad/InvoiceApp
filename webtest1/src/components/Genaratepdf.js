import React, { useRef } from 'react';
import { RiFileDownloadLine } from 'react-icons/ri';
import { FaRegShareSquare } from "react-icons/fa";
import { useReactToPrint } from 'react-to-print';



const Genaratepdf = () => {
 	
	const handleGeneratePDFClick = useReactToPrint({
		// content:()=>ComponentPdf.current,
		// documentTitle:"Salesreport",
		// onAfterPrint:()=>alert("data saved in pdf")
	});
	// () => {
  //   // Add PDF generation logic here
  //   console.log('Generate PDF button clicked');
  // };

	return (
		<div style={{
			height:'50px',
			display:'flex',
			alignItems:'end',
			justifyContent:'flex-end',
			
		}}>

<div className="generate-pdf-button" onClick={handleGeneratePDFClick} style={{
            width:'160px',
            marginLeft:'10px',color:'white',
            backgroundColor:'green',
            display:'flex',
            alignItems:'center',
            justifyContent:"center",
						marginRight:'10px',
						borderRadius:'%'
        }}>Share
          <FaRegShareSquare />
        </div>

		      <div className="generate-pdf-button" onClick={handleGeneratePDFClick} style={{
            width:'160px',
            marginLeft:'10px',color:'white',
            backgroundColor:'#007FFF',
            display:'flex',
            alignItems:'center',
            justifyContent:"center",
						marginRight:'30px',
						borderRadius:'%'
        }}>Generate PDF
          <RiFileDownloadLine />
        </div>

				
		</div>
	)
}

export default Genaratepdf
