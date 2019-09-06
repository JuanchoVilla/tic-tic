import React from 'react';
import {connect} from 'react-redux';

import Square from '../Square/Square';
import calculateWinner from '../../helpers/functions/calculateWinner';

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
      }
    )
    this.props.onChangeTurn(i)
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

const mapDispatchToProps = dispatch => (
  {
    onChangeTurn: (event) => dispatch({type: 'CHANGE_TURN', event: event})
  }
)

export default connect(null, mapDispatchToProps)(Board);