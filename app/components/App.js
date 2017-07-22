import React from 'react';
import ReactRouter from 'react-router-dom';
import { BrowserRouter, Route }  from 'react-router-dom';
import Nav from './Nav';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='main-container'>
          <Nav />
          <Route path='/about' component={About} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
