import React, { Component } from 'react';
import Die from './Die';
import './Dice.css';

class Dice extends Component {
  constructor(props) {
    super(props)

  }

  render() {
    return <div className="Dice">
      {this.props.dice.map((d, idx) =>
        <Die handleClick={this.props.handleClick}
          val={d}
          passRoll={this.props.rolls}
          locked={this.props.locked[idx]}
          passAnimation={this.props.animation}
          idx={idx}
          key={idx}

        />
      )}
    </div>
  }
}

export default Dice;