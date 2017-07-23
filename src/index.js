import React from 'react';
import ReactDOM from 'react-dom';
import './css/materialize.css';
import './css/style.css';

// import redux library
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// load in app component
import Home from './component/Home';

// load in created reducers
import reducers from './reducers';

// create a store by using applyMiddleware function
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={Home}>
      </Route>
    </Router>
  </Provider>,
document.querySelector('.container'));
