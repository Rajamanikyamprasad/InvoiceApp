// import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import styled from "styled-components";

// const SidebarLink = styled(Link)`
// display:flex;
// color : white;
// justify-content:space-between;
// align-items:center;
// padding:20px;
// list-style:none;
// height:60px;
// text-decoration:none;
// font-size:18px;

// &:hover{
// 	background:#252831;
// 	border-left:4px solid white;
// 	cursor:pointer;
// }
// `;

// const SidebarLabel = styled.span`
// margin-left:16px;
// `;

// const DropdownLink =styled(Link)`
// background: #252831;
// height: 50px;
// padding-left:2rem;
// display:flex;
// align-items:center;
// text-decoration:none;
// color:#f5f5f5;
// font-size:18px;

// &:hover {
// 	background:#c7ffff;
// 	cursor:pointer;
// 	color:black;
// }
// `

// const SidebarbMenu = ({item})=>{

// 	const [subnav, setSubnav] = useState(false)

// 	const showSubnav = ()=> setSubnav(!subnav)

// 	return(
// 		<>
// 		<SidebarLink to={item.path} onClick={item.subNav && showSubnav}>
// 		<div>
// 			{item.icon}
// 			<SidebarLabel>{item.title}</SidebarLabel>
// 		</div>
// 		<div>
// 			{item.subNav && subnav 
// 			? item.iconOpened
// 		:item.subNav
// 		?item.iconClosed
// 	:null}
// 		</div>
// 		</SidebarLink>
// 		{subnav && item.subNav.map((item, index) =>{
// 			return (
// 				<DropdownLink to={item.path} key={index}>
//           {item.icon}
// 					<SidebarLabel>{item.title}</SidebarLabel>
// 				</DropdownLink>
// 			)
// 		})}
// 		</>
// 	)
// }

// export default SidebarbMenu

import React, { useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const SidebarLink = styled(Link)`
  display: flex;
  color: white;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  list-style: none;
  height: 60px;
  text-decoration: none;
  font-size: 18px;

  &:hover {
    background: #252831;
    border-left: 4px solid white;
    cursor: pointer;
  }
`;

const SidebarLabel = styled.span`
  margin-left: 16px;
`;

const DropdownLink = styled(Link)`
  background: #252831;
  height: 50px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;

  &:hover {
    background: #c7ffff;
    cursor: pointer;
    color: black;
  }
`;

const SidebarbMenu = ({ item }) => {
  const [subnav, setSubnav] = useState(false);

  const handleClick = () => {
    // Close the sidebar when a sidebar link is clicked
    setSubnav(false);
  };

  const showSubnav = () => setSubnav(!subnav);

  return (
    <>
      <SidebarLink to={item.path} onClick={() => { handleClick(); item.subNav && showSubnav(); }}>
        <div>
          {item.icon}
          <SidebarLabel>{item.title}</SidebarLabel>
        </div>
        <div>
          {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
        </div>
      </SidebarLink>
      {subnav &&
        item.subNav.map((item, index) => (
          <DropdownLink to={item.path} key={index} onClick={handleClick}>
            {item.icon}
            <SidebarLabel>{item.title}</SidebarLabel>
          </DropdownLink>
        ))}
    </>
  );
};

export default SidebarbMenu;


// ... (imports and styled components)

// const SidebarbMenu = ({ item }) => {
//   const [subnav, setSubnav] = useState(false);

//   const handleClick = (e) => {
//     if (item.subNav && item.subNav.length > 0) {
//       // Close the sidebar when a sidebar link with sub-navigation is clicked
//       setSubnav(!subnav);
//       // Prevent the default link behavior
//       e.preventDefault();
//     }
  
//   };

//   const showSubnav = () => setSubnav(!subnav);

//   return (
//     <>
//       <SidebarLink to={item.path} onClick={(e) => { handleClick(e); item.subNav && showSubnav(); }}>
//         {/* ... (rest of your SidebarLink content) */}
//         <div>
//           {item.icon}
//           <SidebarLabel>{item.title}</SidebarLabel>
//         </div>
//         <div>
//           {item.subNav && subnav ? item.iconOpened : item.subNav ? item.iconClosed : null}
//         </div>
//       </SidebarLink>
//       {subnav &&
//         item.subNav.map((item, index) => (
//           <DropdownLink to={item.path} key={index} onClick={(e) => { handleClick(e); }}>
//             {/* ... (rest of your DropdownLink content) */}
//             {item.icon}
//             <SidebarLabel>{item.title}</SidebarLabel>
//           </DropdownLink>
//         ))}
//     </>
//   );
// };

// export default SidebarbMenu;
