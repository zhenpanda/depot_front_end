import React from 'react';
import ReactDOM from 'react-dom';
import './css/materialize.css';
import '../node_modules/toastr/build/toastr.min.css';

// import redux library
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import reduxThunk from 'redux-thunk';

// load in app component
import App from './component/App';
import Home from './component/home/Home';
import Providers from './component/provider/Provider';
import Requestor from './component/requestor/Requestor';

// load in created reducers
import reducers from './reducers';

// create a store by using applyMiddleware function
const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router history={browserHistory} >
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="provider" component={Providers} />
        <Route path="requestor" component={Requestor} />
      </Route>
    </Router>
  </Provider>,
document.querySelector('.container'));
