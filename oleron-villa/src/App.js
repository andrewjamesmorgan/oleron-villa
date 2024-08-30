import './css/App.css';
import { useState, createContext } from 'react';
// import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from './pages/Layout';
import Home from './pages/Home';
import HomeFR from './pages/HomeFR';
import InsideHouse from './pages/InsideHouse';
import InsideHouseFR from './pages/InsideHouseFR';
import Booking from './pages/Booking';
import BookingFR from './pages/BookingFR';
import Contact from './pages/Contact';
import ContactFR from './pages/ContactFR';

export const UserContext = createContext(null);

function App() {
  const [language, setLanguage] = useState("en");

  // Responsive design
  // const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <div className="App">
      <UserContext.Provider 
          value={
            { language: language, setLanguage: setLanguage }
        }>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="fr" element={<HomeFR />} />
            <Route path="booking" element={<Booking />} />
            <Route path="booking-fr" element={<BookingFR />} />
            <Route path="contact" element={<Contact />} />
            <Route path="contact-fr" element={<ContactFR />} />
            <Route path="inside_house" element={<InsideHouse />} />
            <Route path="inside_house-fr" element={<InsideHouseFR />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
      </UserContext.Provider>
    </div>
  );
}

export default App;
