import './css/App.css';
import { useState, createContext } from 'react';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import MyButton from './components/MyButton';
// import SharedButton from './components/SharedButton';
// import LanguageButton from './components/LanguageButton';

import Layout from './components/Layout';
import Home from './pages/Home';
import InsideHouse from './pages/InsideHouse';
import Booking from './pages/Booking';

export const UserContext = createContext(null);

function App() {
  const [language, setLanguage] = useState("en");
  const [selectedPage, setSelectedPage] = useState("home");

  // Responsive design
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
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
              <Route path="booking" element={<Booking />} />
              <Route path="inside_house" element={<InsideHouse />} />
              {/* <Route path="*" element={<NoPage />} /> */}
            </Route>
          </Routes>
        </BrowserRouter>
        {/* <header className="App-header">
          <h2> {language === "en" ? "Hello" : "Bonjour" }</h2>
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React{isDesktopOrLaptop && " - Enjoy the laptop"}
          </a>
          <h2>Counters that update independently</h2>
          <MyButton/>
          <br/>
          <MyButton/>
          <h2>Counters that update together</h2>
          <SharedButton count={count} onClick={handleClick}/>
          <br/>
          <SharedButton count={count} onClick={handleClick}/>
        </header> */}
        {/* <body>
          <LanguageButton></LanguageButton>
        </body> */}
      </UserContext.Provider>
    </div>
  );
}

export default App;
