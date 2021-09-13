import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Auth from './Auth';
import Home from './container/pages/home';
import NotFound from './container/pages/notfound';
import SignIn from './container/pages/signin';
import SignUp from './container/pages/signup';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/signup" component={SignUp} />
        <Route exact path="/signin" component={SignIn} />
        {/* 以下認証のみ */}
        <Auth>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={NotFound} />
          </Switch>
        </Auth>
      </Switch>
    </Router>
  );
};

export default App;
