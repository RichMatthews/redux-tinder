import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga'
import Main from './components/Main';
import reducer from './redux/reducers';
import mySaga from './redux/sagas';

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
);
function listener() {
  console.log(store.getState(), 'store state');
}

store.subscribe(listener);
sagaMiddleware.run(mySaga)

class Component extends React.Component{
  render(){
    return (
      <Provider store={store}>
        <Main />
      </Provider>
      )
  };
};

ReactDOM.render(<Component />,
    document.getElementById('content'));
