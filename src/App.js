import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import NewPlace from './Places/Pages/NewPlace';
import UserPlaces from './Places/Pages/UserPlaces';
import MainNavigation from './Shared/Components/Navigation/MainNavigation';
import Users from './User/Pages/Users';

function App() {
  return (
    <Router>
      <MainNavigation />
      <main>
        <Switch>
          <Route path="/" exact component={Users} />
          <Route path="/places/new" exact component={NewPlace} />
          <Route path="/:userId/places" exact component={UserPlaces} />
          <Redirect to="/" />
        </Switch>
      </main>
    </Router>
  );
}

export default App;
