import ReactDOM from "react-dom";
import {BrowserRouter, Route, Link, Routes} from 'react-router-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Footer from './Components/Footer';
import About from './Components/About';
import Gallery from './Components/Gallery';
import Packages from './Service/Packages' ;
import BookanEvent from './Components/BookanEvent';
import SignInUser from './Components/SignInUser' ;
import SignInVendor from './Vendor/SignInVendor' ;
import SignInAdmin from './Components/SignInAdmin' ;
import Contacts from './Components/Contacts' ;
import Dashboard from './Vendor/Dashboard';
import Register from "./Components/SignUpUser";
import RegisterVendor from "./Vendor/Register";
import VenueSelection from "./Venue/BookanVenue";
import Services from "./Vendor/Services";
import Add from "./Vendor/Add";
import { Provider } from "react-redux";
import store from "./ReduxStore/Store";
import Users from "./Admin/Users";
import AdminNav from "./Admin/AdminNav";
import Vendors from "./Admin/Vendors";
import Requests from "./Admin/Requests";
import Forget from "./Components/Forgot";


function App() {
  return (
    
    <>
     <Router>
 {/*} <NavBar />*/}
 <Provider store={store}>
  <Routes>
    <Route path="/Home" element={<><NavBar /><Home /></>} />
 <Route path='/'element={<><NavBar /><Home /></>} exact={true}/>
    <Route path="/About" element={<About />} />
    <Route path="/Packages" element={<Packages />} />

    <Route path="/Gallery" element={<Gallery />} />
   
 <Route path='/Contacts'element={<><NavBar/><Contacts /></>} exact={true}></Route> 

<Route path="/SignInUser" element={<><NavBar /><SignInUser /></>} />
<Route path="/Forget" element={<><NavBar /><Forget /></>} />
<Route path="/SignInVendor" element={<><NavBar /><SignInVendor /></>} />
<Route path="/SignInAdmin" element={<><NavBar /><SignInAdmin /></>} />

 <Route path="/BookanEvent" element={<BookanEvent />} />
 <Route path="/signupuser" element={<><NavBar /><Register/></>} />
 <Route path="/signupvendor" element={<><NavBar /><RegisterVendor/></>} />
 <Route path="/addvenue" element={<><NavBar/><VenueSelection/></>} />
 <Route path="/Dashboard" element={<Dashboard />} />

<Route path="/Services" element={<Services />} />  
<Route path="/Add" element={<Add/>} />
<Route path="/Users" element={<><AdminNav/><Users/></>} />
<Route path="/Vendors" element={<><AdminNav/><Vendors/></>}/>
<Route path="/Requests" element={<><AdminNav/><Requests/></>}/>
<Route path="/packages"  element={<><Packages/></>}/>

    
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
