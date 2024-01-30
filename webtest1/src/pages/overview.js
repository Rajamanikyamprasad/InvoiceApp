import React from 'react'
import { GrDocumentPdf } from "react-icons/gr";
import { BsFiletypeXml } from "react-icons/bs";
import { FaRegFileWord } from "react-icons/fa";
import { BsFiletypeTxt } from "react-icons/bs";
import { FaFileCsv } from "react-icons/fa";
import { FaFileExcel } from "react-icons/fa";
import { SiStatamic } from "react-icons/si";
import { AiOutlineFileJpg } from "react-icons/ai";
import { SiJpeg } from "react-icons/si";
import { MdOutlineGifBox } from "react-icons/md";
import { BsFiletypePng } from "react-icons/bs";
import { BsBadge3DFill } from "react-icons/bs";

import { FaFileArchive } from "react-icons/fa";
import { FaFileContract } from "react-icons/fa";
import { FaFileInvoiceDollar } from "react-icons/fa";
import { FaFileVideo } from "react-icons/fa";
import { FaFileAudio } from "react-icons/fa6";
import { FaRegFileImage } from "react-icons/fa6";

import { FaFileShield } from "react-icons/fa6";
import { LuFileCog } from "react-icons/lu";
import { LuFileDiff } from "react-icons/lu";
import { BsFileEarmarkBarGraph } from "react-icons/bs";

import { BsFileEarmarkPdf } from "react-icons/bs";
import { BsFiletypeExe } from "react-icons/bs";
import { BsFiletypeSass } from "react-icons/bs";
import { BsFiletypePpt } from "react-icons/bs";

import '../css/overview.css';
import SideNavbar from '../components/SideNavbar';

const Overview = () => {
	return (
		<div style={{}}>
          <SideNavbar/>
  			<div  className='landingpage1'>
				<div className='landtext'>
					<h1 className='quatation '>Effortlessy Create &</h1>
					<br />
					<h1 className='quatation'>Manage Your</h1>
					<br></br>
					<h1 className='quatation1'>" Invoices "</h1>
				</div>
			</div>

			<div  className='landingpage2'style={{}}>
	     <h1 className="landing2head">Collect Your Data In Wide Formats </h1>

			 <div className=' landing2row ' style={{}} >
				<div className=" landing2box " style={{}}>
					<h3 className="landing2h3"style={{}}>Text Files</h3>
					<br></br>
					<div className='insidebox'> 
					<GrDocumentPdf className='size' />
					<BsFiletypeXml className='size' />
					
					<BsFiletypeTxt className='size' />
					<br></br>
					<br></br>
					<FaRegFileWord className='size'  />
		
					<FaFileCsv className='size' />
					<BsFiletypePpt className='size'/>
					</div>



				</div>

				<div className=" landing2box " style={{}}>
				<h3 className="landing2h3"style={{}}>Numerical</h3>
				<br></br>
				<div className='insidebox'> 
				<FaFileExcel className='size' />
				<FaFileInvoiceDollar className='size'/>

				<FaFileArchive className='size'/>
				<br></br>
					<br></br>	
				<BsFileEarmarkPdf className='size'/>
	
				<BsFiletypeExe className='size'/>
<BsFiletypeSass className='size'/>
</div>

				</div>

				<div className=" landing2box " style={{}}>
				<h3 className="landing2h3"style={{}}>Multimedia</h3>
				<br></br>
				<div className='insidebox'> 
				<AiOutlineFileJpg className='size'/>
				<MdOutlineGifBox className='size' />

				<BsFiletypePng className='size' />
				<br></br>
					<br></br>	
				<FaFileVideo className='size'/>

				<FaFileAudio className='size'/>
				<FaRegFileImage className='size'/>

</div>

				</div>
				<div className=" landing2box " style={{}}>
				<h3 className="landing2h3" style={{}}>Models</h3>
				<br></br>
				<div className='insidebox'> 
				<LuFileCog className='size'/>
				<BsFileEarmarkBarGraph className='size'/>
				<FaFileContract className='size'/>
				<br></br>
					<br></br>	
				<FaFileShield className='size'/>
				<SiStatamic className='size'  />
				<BsBadge3DFill className='size' />		

</div>
				</div>
			 </div>
      </div>

		</div>
	)
}

export default Overview
