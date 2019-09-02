import React from 'react';
import './App.css';

import Game from './components/Game/Game';
import store from './redux/store/store';

class App extends React.Component {

  render() {

    let counter = store;

    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}

export default App;
