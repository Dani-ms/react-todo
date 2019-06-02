import React from 'react';
import { Provider } from 'react-redux'
import './App.css';
import Home from './components/home/home'
import store from './logic/store';


class App extends React.Component {
  render() {
    return (<Provider store={store}>
      <Home />
    </Provider>)
  }
}

export default App;

