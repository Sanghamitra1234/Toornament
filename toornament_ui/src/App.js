import React from 'react';
import './App.css';
import Games from './Containers/Games';
import {BrowserRouter} from 'react-router-dom';
import Tournaments from './Containers/Tournaments/Tournaments';
import {Route,Switch} from 'react-router-dom';

function App() {
  return (
    
    <BrowserRouter>
      <div className="App">
        {/* <Games/> */}
      </div>

      <Switch>
          <Route exact path="/"  component={Games}/>
          <Route exact path="/Tournament/:id" component={Tournaments}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
