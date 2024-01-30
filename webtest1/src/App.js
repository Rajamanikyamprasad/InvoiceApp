
import React from 'react';
import { BrowserRouter as  Switch } from 'react-router-dom';
import { HashRouter as Router, Routes, Route, Link } from 'react-router-dom';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import SignInPage from './components/SignInPage';
import SignUpPage from './components/SignUpPage';

import SideNavbar from './components/SideNavbar';
import Overview from './pages/overview';
import Users from './pages/Users';
import Reports from './pages/Reports';
import Overrev from './pages/Overrev';
import ReportSales from './pages/ReportSales';
import CoustmerReport from './pages/CoustmerReport';
import SellerReport from './pages/SellerReport';
import ChangePage from './pages/ChangePage';
import CustomSalesTable from './pages/SalesTable';

const App = () => {
  return (
    <div>
        <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signin" element={<SignInPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/sidenavbar" element={<SideNavbar/>} />
        <Route path="/overview" element= {<Overview/>}/>
        <Route path="/overview/overview/users" element = {<Users/>}/>
        <Route path="/reports" element = {<Reports/>}/>
        <Route path="/reports/reports/sales" element = {<ReportSales/>}/>
       <Route path="/reports/reports/customer" element = {<CoustmerReport/>}/>
       <Route path="/reports/reports/seller" element = {<SellerReport/>}/>
       <Route path="/products" element= {<CustomSalesTable/>}/>
       <Route path="/team" element= {<ChangePage/>}/>

        <Route path="/overview/overview/revenue" element = {Overrev}/>
      </Routes>
     
    </Router>
    </div>
    // <div>     
    //   <Router>
    //   <SideNavbar/>  
    //     <Switch>
    //       <Route path="/overview" exact component = {Overview}/>
    //       <Route path="/overview/users" exact component = {Users}/>
    //       <Route path="/reports" exact component = {Reports}/>
    //       <Route path="/reports/sales" exact component = {ReportSales}/>
    //       <Route path="/reports/customer" exact component = {CoustmerReport}/>
    //       <Route path="/reports/seller" exact component = {SellerReport}/>

    //       <Route path="/overview/revenue" exact component = {Overrev}/>

    //     </Switch>
    //   </Router>

    // </div>
  )
}

export default App


