import logo from './logo.svg';
import './App.css';
import Payment from "./pages/payment"
import "bootstrap/dist/css/bootstrap.min.css";

import Landing from "./pages/landing"
import Bsignup from "./pages/Buyer/Bsignup"
import Navbar from "./components/Navbar"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Ssignup from "./pages/Seller/Ssignup";
import Asignup from "./pages/Attorney/Asignup";
import Login from "./pages/login";
import Properties from "./pages/Buyer/Body";
import Attorney from "./pages/Attorney/Attorney_card";
import Addprop from "../src/pages/Addprop";
import Card from "../src/components/Card";
import Complaint from "./pages/Complaint";
import About from "../src/pages/About_us";
import Tandc from "../src/pages/tandc";
import Aseller from "./pages/Admin/asller"
import ADashboard from './pages/Admin/admin'
import SDashboard from './pages/Seller/SDashboard'
import Transaction from './pages/Buyer/Transaction'
import BDashboard from './pages/Buyer/BDashboard'
import Sverify from './pages/Admin/sverify'
import Proverify from './pages/Admin/Proverify'
import Averify from './pages/Admin/averify'
import Pverify from './pages/Admin/pverify'
import Cverify from './pages/Admin/cverify'
import List from './pages/Seller/List';
import Contact from './pages/contactus';
function App() {
  return (
    
    // <Bsignup/>
    <Router>
      <Routes>
        <Route path="/" element={<Landing/>}/>
        <Route path ="/Admin/Buyer" element={<ADashboard/>}/>
        <Route path= "/Admin/Seller" element={<Sverify/>}/>
        <Route path= "/Admin/Property" element={<Proverify/>}/>
        <Route path= "/Admin/Attorney" element={<Averify/>}/>
        <Route path= "/Admin/Payment" element={<Pverify/>}/>
        <Route path= "/Admin/Complaints" element={<Cverify/>}/>
 
        <Route path="/Dashboard" element={<BDashboard/>}/>
        <Route path="/Bsign" element={<Bsignup/>}/>
        <Route path="/Payment" element={<Payment/>}/>
        <Route path="/Asign" element={<Asignup/>}/>
        <Route path="/Ssign" element={<Ssignup/>}/>
        <Route path="/LogIn" element={<Login/>}/>
        <Route path="/Properties" element={<Properties/>}/>
        <Route path="/Attorney" element={<Attorney/>}/>
        <Route path='/SDashboard/Addproperty' element={<Addprop/>}/>
        <Route path='/SDashboard/List' element={<List/>}/>
        <Route path='/Properties' element={<Card/>}/>
        <Route path='/Complaint' element={<Complaint/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/TandC' element={<Tandc/>}/>
        <Route path='/SDashboard/Transactions' element={<SDashboard/>}/>
        <Route path="/Transaction" element={<Transaction/>}/>
        <Route path="/BDashboard" element={<BDashboard/>}/>
        <Route path="/Sverify" element={<Sverify/>}/>
        <Route path="/help" element={<Contact/>}/>
      </Routes>
    </Router>
    
    
  );
}

export default App;
