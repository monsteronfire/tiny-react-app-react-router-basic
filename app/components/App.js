import React from 'react';
import ReactRouter from 'react-router-dom';
import { BrowserRouter, Route }  from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className='main-container'>
          <Route path='/about' component={About} />
        </div>
      </Router>
    )
  }
}

export default App;
