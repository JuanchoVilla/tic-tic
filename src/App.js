import React from 'react';
import './App.css';

const Square = (props) => (
  <button className='square'>{props.state}</button>
)

class Board extends React.Component {
  renderSquare = (state = '') => {
    return (<Square state={state}/>)
  }

  render() {
    let sq1 = this.renderSquare('x');
    let sq2 = this.renderSquare('o');
    let sq3 = this.renderSquare();

    let br1 = <div className='board-row'>{sq1}{sq3}{sq3}</div>
    let br2 = <div className='board-row'>{sq3}{sq3}{sq3}</div>
    let br3 = <div className='board-row'>{sq3}{sq3}{sq2}</div>

    return (
      <div className='board'>
        {br1}
        {br2}
        {br3}
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div>
        this will handle the logic of the game, bing bong
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Board/>
      </div>
    );
  }
}

export default App;
