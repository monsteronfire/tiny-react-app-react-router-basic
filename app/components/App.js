import React from 'react';
import ReactRouter from 'react-router-dom';
import { BrowserRouter, Route }  from 'react-router-dom';
import Nav from './Nav';
import About from './About';
import Contact from './Contact';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div className='main-container'>
          <Nav />
          <Route path='/about' component={About} />
          <Route path='/contact' component={Contact} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
