import './css/App.css';
import { useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import MyButton from './components/MyButton';
import SharedButton from './components/SharedButton';

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
  }
  // Responsive design
  const isDesktopOrLaptop = useMediaQuery({query: '(min-width: 1224px)'});
  // const isBigScreen = useMediaQuery({ query: '(min-width: 1824px)' });
  // const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' });
  // const isPortrait = useMediaQuery({ query: '(orientation: portrait)' });
  // const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });

  return (
    <div className="App">
      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
