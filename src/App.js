import React from 'react';
import { BrowserRouter, Route, Switch, } from 'react-router-dom';
import Menu from './components/Menu';
import Connection from './components/Connection';
import Blog from './components/Blog';
import Dashboard from './components/Dashboard';
import './App.css';

function App() {
  return (
       <BrowserRouter>
          <Menu />
          <Switch>
              <Route exact path="/connect" component={Connection}/>
              <Route exact path="/dashboard" component={Dashboard}/>
           </Switch>
           <h1 className="titre_app">Pharmacie Mame Binta Ndiouga</h1>
           <div>
            <Blog />
          </div>
       </BrowserRouter>
       
  );
}

export default App;
