import React from 'react';

import Board from '../Board/Board';
import calculateWinner from '../../helpers/functions/calculateWinner';

class Game extends React.Component {
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
    <Board id={i} onUpdate={() => this.handleClick(i)}/>
  )
  
  render() {

    let status = null;
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

export default Game;