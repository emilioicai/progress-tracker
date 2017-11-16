import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './ducks/index';

import Home from './containers/Home';

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <Home projects={[]} />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('app'));
