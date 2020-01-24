import React from 'react';
import {connect} from 'react-redux';

import Board from '../Board/Board';
import calculateWinner from '../../helpers/functions/calculateWinner';

class Game extends React.Component {
  state = {
    boards: Array(9).fill(null),
  }
  
  renderBoard = (i) => (
    <Board id={i}/>
  )
  
  render() {

    let status = null;
    let winner = calculateWinner(this.state.boards);
    let p = this.props.xIsNext ? 'x' : 'o';
    
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

const mapStateToProps = state => (
  {
    xIsNext: state.xIsNext
  }
)

export default connect(mapStateToProps)(Game);