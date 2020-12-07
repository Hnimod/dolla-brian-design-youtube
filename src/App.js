import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Home from './pages';
import SignIn from './pages/SignIn';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" exact component={SignIn} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
