import { BrowserRouter, Routes, Route, Router } from 'react-router-dom'

import Rooms from "./components/Room";
import ViewRoom from "./components/ViewRoom";
import Footer from "./layout/Footer";
import Navbar from "./layout/Nav";
import UserProfile from "./components/UserProfile";
import Home from './components/Home';
import Register from './components/login/Register';
import Login from "./components/login/Login";
import About from './components/About';
import Contact from './components/Contact';
import { createContext, useState } from 'react';
import UpdateDataU from './components/UpdateDataU';
import Notfound from './components/Notfound';
import OurBookings from './components/OurBookings';
export const userContext = createContext();



function App() {

  const [userData, setUserData] = useState([]);


  // useEffect(() => {

  //   setUserData(JSON.parse(localStorage.getItem('user')));

  // }, [])

  // console.log(islogged)
  return (
    <BrowserRouter>
    
      <userContext.Provider value={{ userData, setUserData }}>

        <Navbar />

        <Routes>

          <Route path="/rooms" element={<Rooms />} />
          <Route path="/back" element={<UserProfile />} />
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/ViewRoom/:id" element={<ViewRoom />} />
          <Route path="/UserProfile" element={<UserProfile />} />
          <Route path="/edit" element={<UpdateDataU />} />
          <Route path="/ourbookings" element={<OurBookings />} />

        </Routes>
        <Footer />
      </userContext.Provider>

    </BrowserRouter>

  );


}

export default App;
