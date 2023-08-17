import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Search from './Search';
import Carousel from './Carousel';

function App() {
  return (
    <div className="App">
      {Header('Better Reads')}
      <Search />
      <Carousel />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

/* 
TODO: Carousel updates:
      a. rotation of cards
      b. update cards styling
      c. clickable direction underneath
      d. fetching actual top5 data

      Search:
      a. wire up button / enter submission
      b. genre links as filters ? 
      c. styling

      Header: 
      a. styling 
      b. font selection 
      c. navigation ? or as new comp

      Scrollable list:
      a. reuse card component from carousel to list books upon search results
      b. filterable search
    
      User / Save to list functionality.

      Clean up original application code
*/