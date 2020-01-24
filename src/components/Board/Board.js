import React from 'react';
import {connect} from 'react-redux';

import Square from '../Square/Square';
import calculateWinner from '../../helpers/functions/calculateWinner';

class Board extends React.Component {
  state = {
    squares: Array(9).fill(null),
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

    this.props.onChangeTurn(i, this.state.id)
  }

  renderSquare = (i, boardId) => {
    return (
    <Square value={this.state.squares[i]}
      onClick={() => this.handleClick(i)}
      id={boardId}
    />)
  }

  render() {
    return (
      <div className='board'>
        <div className='board-row'>
          {this.renderSquare(0, this.state.id)}
          {this.renderSquare(1, this.state.id)}
          {this.renderSquare(2, this.state.id)}
        </div>
        <div className='board-row'>
          {this.renderSquare(3, this.state.id)}
          {this.renderSquare(4, this.state.id)}
          {this.renderSquare(5, this.state.id)}
        </div>
        <div className='board-row'>
          {this.renderSquare(6, this.state.id)}
          {this.renderSquare(7, this.state.id)}
          {this.renderSquare(8, this.state.id)}
        </div>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => (
  {
    onChangeTurn: (squareId, boardId) => dispatch({type: 'CHANGE_TURN', payload: {squareId: squareId, boardId: boardId}})
  }
)

export default connect(null, mapDispatchToProps)(Board);