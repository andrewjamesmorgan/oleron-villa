import './css/App.css';
import { useState, createContext } from 'react';
import { HashRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import HomeFR from './pages/HomeFR';
import InsideHouse from './pages/InsideHouse';
import InsideHouseFR from './pages/InsideHouseFR';
import OutsideHouse from './pages/OutsideHouse';
import OutsideHouseFR from './pages/OutsideHouseFR';
import Bookings from './pages/Bookings';
import BookingsFR from './pages/BookingsFR';
import Contact from './pages/Contact';
import ContactFR from './pages/ContactFR';
import Facilities from './pages/Facilities';
import FacilitiesFR from './pages/FacilitiesFR';
import Location from './pages/Location';
import LocationFR from './pages/LocationFR';
import Login from './pages/Login';
import Logout from './pages/Logout';
import AddReview from './pages/AddReview';
import Stay from './pages/Stay';
import StayFR from './pages/StayFR';

export const UserContext = createContext(null);

function App() {
  const [language, setLanguage] = useState("en");

  return (
    <div className="App">
      <UserContext.Provider 
          value={
            { language: language, setLanguage: setLanguage }
        }>
        <HashRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fr" element={<HomeFR />} />
            <Route path="bookings" element={<Bookings />} />
            <Route path="bookings-fr" element={<BookingsFR />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact-fr" element={<ContactFR />} />
            <Route path="inside_house" element={<InsideHouse />} />
            <Route path="inside_house-fr" element={<InsideHouseFR />} />
            <Route path="outside_house" element={<OutsideHouse />} />
            <Route path="outside_house-fr" element={<OutsideHouseFR />} />
            <Route path="facilities" element={<Facilities />} />
            <Route path="facilities-fr" element={<FacilitiesFR />} />
            <Route path="location" element={<Location />} />
            <Route path="location-fr" element={<LocationFR />} />
            <Route path="add_review" element={<AddReview />} />
            <Route path="stay" element={<Stay />} />
            <Route path="stay-fr" element={<StayFR />} />
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<Home />} />
            </Route>
          </Routes>
        </HashRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;