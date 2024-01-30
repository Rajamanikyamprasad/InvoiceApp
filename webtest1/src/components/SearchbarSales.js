import React, { useState } from 'react';
import SalesAddModal from '../Modals/SalesAddModal';
import Salesreport from '../pages/salesreport';
import { FaSearch, FaFilter, FaFilePdf } from 'react-icons/fa';
import { MdOutlineAddToPhotos } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoOptionsOutline } from "react-icons/io5";

import DataContext from './DataContext';


import '../css/SalesModalAdd.css';


import '../css/Searchbar.css';

const SearchbarSales = () => {

	const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [userData, setUserData] = useState({name: '', email:''  });

  const openPopUp = () => {
    setIsPopUpOpen(true);
  };

  const closePopUp = () => {
    setIsPopUpOpen(false);
  };

  const saveUserData = (data) => {
    setUserData(data);
  };

	const handleFilterClick = () => {
    // Add filter logic here
    console.log('Filter button clicked');
	} 

  return (
    <div className="navbar" >
      <div className="search-bar" >
          <FaSearch  />
          <input type="text" placeholder="Search..."  />
          <button>Search</button>
        </div>
        <div className="filter-button" onClick={handleFilterClick}>Filter
          <IoOptionsOutline />
        </div>

        <div className="filter-button" onClick={openPopUp}>
				{/* <div className="App">
      <div className="main-container"> */}
        {/* <div className="main-box" onClick={openPopUp}> */}
          Adddetails
        {/* </div> */}
        <SalesAddModal isOpen={isPopUpOpen} onClose={closePopUp} onSave={saveUserData} />
      {/* </div> */}
      {/* <div className="display-box">
        <h3>User Details:</h3>
        <p>Name: {userData.name}</p>
        <p>Email: {userData.email}</p>
      </div> */}
    {/* </div> */}

          <MdOutlineAddToPhotos />
         </div>
				



        <div className="filter-button" onClick={handleFilterClick} >Update Details
          <GrDocumentUpdate />
        </div>

        <div className="filter-button" onClick={handleFilterClick} style={{marginRight:'20px'}}>Delete Details
          <RiDeleteBin5Line />
        </div>


        {/* <DataContext.Provider value={userData}>
          <Salesreport/>
    </DataContext.Provider> */}


      </div>
        );
};

export default SearchbarSales
