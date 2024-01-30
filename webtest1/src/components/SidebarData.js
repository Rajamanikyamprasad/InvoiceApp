import React from "react";
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
	{
		title : 'Home',
		path : "/overview",
		icon : <AiIcons.AiFillHome/>,
		iconClosed : <RiIcons.RiArrowDownFill/>,
		iconOpened : <RiIcons.RiArrowDropUpFill/>,
		subNav : [
			{
				title:"Users",
				path:'overview/users',
				icon:<IoIcons.IoIosPaper/>
			},
			{
				title:"Revenue",
				path:'overview/revenue',
				icon:<IoIcons.IoIosPaper/>
			}
		]
	},

	{
	title : 'Reports',
		path : "/reports",
		icon : <IoIcons.IoIosPaper/>,
		iconClosed : <RiIcons.RiArrowDownFill/>,
		iconOpened : <RiIcons.RiArrowDropUpFill/>,
		subNav : [
			{
				title:"Sales Reports",
				path:'reports/sales',
				icon:<IoIcons.IoIosPaper/>
			},
			{
				title:"Customer Reports",
				path:'reports/customer',
				icon:<IoIcons.IoIosPaper/>
			},
			{
				title:"Seller Reports",
				path:'reports/seller',
				icon:<IoIcons.IoIosPaper/>
			},
			{
				title:"Revenue Reports",
				path:'reports/revenue',
				icon:<IoIcons.IoIosPaper/>
			},
			{
				title:"Marketing Reports",
				path:'reports/marketing',
				icon:<IoIcons.IoIosPaper/>
			},
			{
				title:"Acquistion Reports",
				path:'reports/acquistion',
				icon:<IoIcons.IoIosPaper/>
			},
			{
				title:"Product Analytic Report",
				path:'reports/productanalytic',
				icon:<IoIcons.IoIosPaper/>
			},
			{
				title:"Behavior Report",
				path:'reports/behavior',
				icon:<IoIcons.IoIosPaper/>
			},
			{
				title:"Inventory",
				path:'reports/inventory',
				icon:<IoIcons.IoIosPaper/>
			},
		]
	},
	
	{
		title:'Products',
		path:"/products",
		icon:<FaIcons.FaCartPlus/>
	},

	{
		title:'Team',
		path:"/team",
		icon:<IoIcons.IoMdPeople/>
	},
	
	{
		title : 'Messages',
			path : "/message",
			icon : <FaIcons.FaEnvelopeOpenText/>,
			iconClosed : <RiIcons.RiArrowDownFill/>,
			iconOpened : <RiIcons.RiArrowDropUpFill/>,
			subNav : [
				{
					title:"message1",
					path:'messages/message1',
					icon:<FaIcons.FaEnvelopeOpenText/>
				},
				{
					title:"message2",
					path:'reports/reports2',
					icon:<FaIcons.FaEnvelopeOpenText/>
				},
				{
					title:"message3",
					path:'reports/reports3',
					icon:<FaIcons.FaEnvelopeOpenText/>
				}
			]
		},

		{
			title:'Support',
			path:"/support",
			icon:<IoIcons.IoMdHelpCircle/>
		},
	
		

];

