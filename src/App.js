import React from 'react';
import './App.css';

class Square extends React.Component {
  render () {
    return (
      <button className='square' 
        onClick={this.props.onClick} >
        {this.props.value}
      </button>
    )
  }
}

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null)
  }

  handleClick = (i) => {
    this.setState(prevState => ({
      squares: [...prevState.squares, 'x']
    })
    )
  }

  renderSquare = (i) => {
    return (
    <Square value={this.state.squares}
      onClick={() => this.handleClick(i)}
    />)
  }

  render() {

    return (
      <div className='board'>
        <div className='board-row'>
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div>
        <Board/>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Game/>
      </div>
    );
  }
}

export default App;
