import React, { useState } from 'react'
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { SidebarData } from './SidebarData';
import SidebarbMenu from './sidebarMenu';
import { IconContext } from 'react-icons/lib';
import { FaUserCircle } from "react-icons/fa";
import { SlOptions } from "react-icons/sl";
import { IoNotificationsCircleOutline } from "react-icons/io5";
import { TiMessages } from "react-icons/ti";
import { IoSettingsOutline } from "react-icons/io5";
import { GiAngelWings } from "react-icons/gi";
import Adminpage from '../pages/Adminpage';
import actualize from '../images/actualize.jpg';
import { NavLink, Navbar, NavbarBrand, NavbarCollapse } from 'react-bootstrap';


import '../css/SideNavbar.css';




const Nav = styled.div`
background : #15171c;
margin-top:2px;
height:60px;
display:flex;
justify-content : flex-start;
align-items : center;
position: sticky;
top:0;
`;

const NavIcon = styled(Link)`
margin-left : 1rem;
font-size: 2rem;
height:80px;
display:flex;
justify-content:flex-start;
align-items:center;
color:white;
`;


const SidebarNav= styled.nav`
background:#15171c;
width:250px;
height:100vh;
display:flex;
justify-content : center;
position:fixed;
top:0;
left: ${({side}) => (side ? '0':'-100%') };
transition : 358ms;
z-index : 10;
color:white;
overflow :auto;

`

const Sidebarwrap=styled.div`
width:100%;
`


const SideNavbar = () => {
	const[side, setSide] = useState(false)

	const [collapsed, setCollapsed] = useState(true);
	

	const showSidebar = ()=> setSide(!side) 

  const [showIcons, setShowIcons] = useState(false);

  const handleToggleIcons = () => {
    setShowIcons(!showIcons);
	}


	return (
		<div>
		<IconContext.Provider value={{color:'#fff'}}>
			<Nav>
				<NavIcon to = "#">
					<FaIcons.FaBars onClick={showSidebar}/>
				</NavIcon>
          <div className='title' style={{}}>
					{/* <GiAngelWings style={{marginLeft:'30px',fontSize:'40px'}}/> */}
					<img src={actualize}></img>
					Actualize Fathom Invoice</div>
				<NavLink>
				<SlOptions className='icon_circle'  ></SlOptions>
				</NavLink>
				<NavLink>
				<IoNotificationsCircleOutline className='icon_circle'></IoNotificationsCircleOutline>
				</NavLink>
				<NavLink>
				<TiMessages className='icon_circle'></TiMessages>
				</NavLink>
				<NavLink>
				<IoSettingsOutline className='icon_circle'></IoSettingsOutline>
				</NavLink>
				<NavLink>
				<FaUserCircle className='icon_circle' ></FaUserCircle>
				</NavLink>
\				</Nav>
		
			<SidebarNav side={side} id='sidebarNav' >
				<Sidebarwrap >
          <NavIcon to = "#">
						<AiIcons.AiOutlineClose onClick={showSidebar}/>
					</NavIcon>
					{SidebarData.map((item, index)=>{
						return <SidebarbMenu item={item} key={index}/>
						})}
				</Sidebarwrap>
			</SidebarNav>
			</IconContext.Provider>

			{/* <div className='loginpage'>
        <div className='loginbox'>
						<h2 style={{marginBottom:'30px'}}>Login Here :</h2>
			<form >
				<label className='loginbtn'>UserName:</label>
				<div>
				<input type='text' placeholder='Enter Username'className='loginbtn'/>
				</div>
				<label className='loginbtn'>Password:</label>
				<div>
				<input type='password' placeholder='Enter Password'className='loginbtn'/>
				</div>
				<div className='submit'>
				<button className='submitbtn'>Submit</button>
				<button className='submitbtn'>Reset</button>
				</div>
			</form>
			<div className='signup'>
				<h5>Create Account</h5>
				<button className='signupbtn'>SignUp</button>

			</div>
					</div>
					</div> */}


					</div>
	)
}

export default SideNavbar
