import ReactDOM from "react-dom";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Packages, { AppWithRouter } from './Service/Packages' ;
import BookanEvent from './Components/BookanEvent';
import SignInUser from './Components/SignInUser' ;
import SignInVendor from './Vendor/SignInVendor' ;
import SignInAdmin from './Components/SignInAdmin' ;
import Contacts from './Components/Contacts' ;
import Dashboard from './Vendor/Dashboard';
import Register from "./Components/SignUpUser";
import RegisterVendor from "./Vendor/Register";
import VenueSelection from "./Venue/BookanVenue";

import { Provider } from "react-redux";
import store from "./ReduxStore/Store";
import Users from "./Admin/Users";
import AdminNav from "./Admin/AdminNav";
import Vendors from "./Admin/Vendors";

import Forget from "./Components/Forgot";
import Billing from "./Components/Biiling";
import Final from "./Components/Final";
import NavBarSignout from "./Components/NavBarSignout";
import DashboardAdmin from "./Admin/DashboardAdmin";
import NavBarVendor from "./Vendor/NavBarVendor";
import Services from "./Vendor/Services";
import AllServices from "./Admin/AllServices";


function App() {
  return (
    
    <>
     <Router>
 {/*} <NavBar />*/}
 <Provider store={store}>
  <Routes>
    <Route path="/Home" element={<><NavBar /><Home /></>} />
 <Route path='/'element={<><NavBar /><Home /></>} exact={true}/>
    <Route path="/About" element={<><NavBar/><About /></>} />
    <Route path="/Packages" element={<AppWithRouter />} />

    <Route path="/Gallery" element={<><NavBar/><Gallery /></>} />
   
 <Route path='/Contacts'element={<><NavBar/><Contacts /></>} exact={true}></Route> 

<Route path="/SignInUser" element={<><NavBar /><SignInUser /></>} />
<Route path="/Forget" element={<><NavBar /><Forget /></>} />
<Route path="/SignInVendor" element={<><NavBar /><SignInVendor /></>} />
<Route path="/SignInAdmin" element={<><NavBar /><SignInAdmin /></>} />

 <Route path="/BookanEvent" element={<BookanEvent />} />
 <Route path="/signupuser" element={<><NavBar /><Register/></>} />
 <Route path="/signupvendor" element={<><NavBar /><RegisterVendor/></>} />
 <Route path="/addvenue" element={<><NavBarSignout/><VenueSelection/></>} />
 <Route path="/Dashboard" element={<><NavBarVendor/><Dashboard /></>} />
 


<Route path="/Users" element={<><AdminNav/><Users/></>} />
<Route path="/Vendors" element={<><AdminNav/><Vendors/></>}/>
<Route path="/Admindash" element={<><AdminNav/><DashboardAdmin/></>}/>
<Route path="/Allbookings" element={<><AdminNav/><AllServices/></>}/>

<Route path="/packages"  element={<><NavBarSignout/><Packages/></>}/>
<Route path="/Billing"  element={<><NavBarSignout/><Billing/></>}/>
<Route path="/Final"  element={<><NavBarSignout/><Final/></>}/>
<Route path="/Services"  element={<><NavBarSignout/><Services/></>}/>
    
  </Routes>
  </Provider>
</Router>
     
    {/* <Router>
        <Routes>
          <Route path='/Components/about'element={<About />} exact={true} />
           
        
          <Route path='Components/Home'element={<Home />} exact={true}/> */}
          {/* <Route path='/'element={<App />} exact={true}></Route> */}
          {/* <Route path='/Contact'element={<Contact />} exact={true}></Route> */}
        {/* </Routes> */}
        {/* </Router> */} 

    {/* <Dashboard></Dashboard>
    <Home></Home>
    <About></About>
    <Gallery ></Gallery>
    <Packages></Packages> 
    <BookanEvent></BookanEvent>
    <SignInUser></SignInUser>
    <SignInAdmin></SignInAdmin>
    <SignInVendor></SignInVendor>  */}
    <Footer></Footer> 
    </>
  );
}

export default App;
