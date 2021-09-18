import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './container/pages/home';
import NotFound from './container/pages/notfound';
import SignIn from './container/pages/signin';
import SignUp from './container/pages/signup';
import Authed from './inspection/authed';
import store from './stores/index';
import { createStore, applyMiddleware, compose } from 'redux';
import Loading from './container/pages/loading';
import PostsByCategory from './container/pages/post/postsByCategory';
import AllPosts from './container/pages/post/postsByAll';
interface ExtendedWindow extends Window {
  __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
}
declare var window: ExtendedWindow;
const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <Switch>
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/loading" component={Loading} />

          {/* 以下認証のみ */}

          <Authed>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/posts/all" component={AllPosts} />
              <Route exact path="/posts/category/:categoryName" component={PostsByCategory} />

              <Route component={NotFound} />
            </Switch>
          </Authed>
        </Switch>
      </Router>
    </Provider>
  );
};

export default App;
