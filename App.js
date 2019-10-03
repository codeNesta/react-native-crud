//import liraries
import React, { Component } from 'react';
import Routes from './components/Routes';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import ReduxThunk from 'redux-thunk';
import reducers from './reducers'


// create a component
class App extends Component {
  render() {

  const  state= createStore(reducers,{},applyMiddleware(ReduxThunk))

    return (
            <Provider store={state}>
              <Routes/>
            </Provider>
           
          
    );
  }
}




//make this component available to the app
export default App;
