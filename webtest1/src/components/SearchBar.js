import React from 'react';
import { FaSearch, FaFilter, FaFilePdf } from 'react-icons/fa';
import { MdOutlineAddToPhotos } from "react-icons/md";
import { GrDocumentUpdate } from "react-icons/gr";
import { RiDeleteBin5Line } from "react-icons/ri";
import { IoOptionsOutline } from "react-icons/io5";

import '../css/Searchbar.css';


const SearchBar = () => {
	const handleFilterClick = () => {
    // Add filter logic here
    console.log('Filter button clicked');
  };

 

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

        <div className="filter-button" onClick={handleFilterClick}>Add Details
          <MdOutlineAddToPhotos />
        </div>

        <div className="filter-button" onClick={handleFilterClick} >Update Details
          <GrDocumentUpdate />
        </div>

        <div className="filter-button" onClick={handleFilterClick} style={{marginRight:'20px'}}>Delete Details
          <RiDeleteBin5Line />
        </div>
      </div>
        );
};

export default SearchBar