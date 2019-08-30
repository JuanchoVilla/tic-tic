import React from 'react';
import './App.css';

const Square = (props) => (
  <button className='square' 
    onClick={props.onClick} >
    {props.value}
  </button>
)

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
    xIsNext: true,
    gameOver: false,
    id: this.props.id,
    winner: null
  }
  handleClick = (i) => {
    this.setState(prevState => {
      let gameOver = calculateWinner(prevState.squares);
      if (gameOver) {
        return {gameOver: true}
      }
      let newSquares = [...prevState.squares];
      if (newSquares[i] === null) {
        newSquares[i] = prevState.xIsNext ? 'x' : 'o';
        return {squares: newSquares, xIsNext: !prevState.xIsNext}
      }
      }
    )
  }

  renderSquare = (i) => {
    return (
    <Square value={this.state.squares[i]}
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

class MiniGame extends React.Component {
  state = {
    boards: Array(9).fill(null),
    xIsNext: true
  }

  componentDidUpdate() {
    this.setState(prevState => ({xIsNext: !prevState.xIsNext}))
  }

  handleClick = (i) => {
    console.log('Something was clicked');
  }
  
  renderBoard = (i) => (
    <Board id='i' onUpdate={() => this.handleClick(i)}/>
  )
  
  render() {

    let status = null
    let winner = calculateWinner(this.state.boards);
    let p = this.state.xIsNext ? 'x' : 'o';
    
    if (!winner) {
        status = <p>Go player: {p}</p>
    } else {
        status = <p>{winner} wins!!</p>
    }


    return (
      <div>
        <div className='status'>{status}</div>
        <div className='game-row'>
          {this.renderBoard(0)}
          {this.renderBoard(1)}
          {this.renderBoard(2)}
        </div>
        <div className='game-row'>
          {this.renderBoard(3)}
          {this.renderBoard(4)}
          {this.renderBoard(5)}
        </div>
        <div className='game-row'>
          {this.renderBoard(6)}
          {this.renderBoard(7)}
          {this.renderBoard(8)}
        </div>
      </div>
    )
  }
}

class Game extends React.Component {
  render() {
    return (
      <div>
        <MiniGame/>
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

const calculateWinner = (arr) => {
  const lines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for (let i=0; i<lines.length; i++) {
    const [a,b,c] = lines[i];
    if (arr[a] && arr[a] === arr[b] && arr[a] === arr[c]) {
      return arr[a]
    }
  }
  if (!arr.includes(null)) {
    return 'd'
  }
  return null;
}

export default App;
