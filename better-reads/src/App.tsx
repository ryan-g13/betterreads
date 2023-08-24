import React from 'react';
import './App.css';
import Header from './Header';
import Search from './Search';
import Carousel from './Carousel';
import List from './List';

function App() {
 
  
  return (
    <div className="App">
      <Header title='Better Reads'/>
      <Search />
      <Carousel />
      <List />
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
      a. styling - Done 
      b. font selection - WIP - current Serif
      c. navigation ? or as new comp

      Scrollable list:
      a. reuse card component from carousel to list books upon search results
      b. filterable search
      c. present a list of books - done 
    
      User / Save to list functionality.

      Clean up original application code - DONE - cleaned up css and starter code
*/