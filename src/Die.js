import React, { Component } from "react";
import "./Die.css";

class Die extends Component {

  constructor(props) {
    super(props)



    this.handleDieClick = this.handleDieClick.bind(this)
  }

  handleDieClick(e) {
    this.props.handleClick(this.props.idx)


  }

  render() {
    // console.log(this.props.passRoll);
    let fAwesoneDie;
    { this.props.val === 1 ? fAwesoneDie = 'one' : '' }
    { this.props.val === 2 ? fAwesoneDie = 'two' : '' }
    { this.props.val === 3 ? fAwesoneDie = 'three' : '' }
    { this.props.val === 4 ? fAwesoneDie = 'four' : '' }
    { this.props.val === 5 ? fAwesoneDie = 'five' : '' }
    { this.props.val === 6 ? fAwesoneDie = 'six' : '' }

    let animateVal
    if (this.props.passAnimation === true || this.props.locked === true) {
      animateVal = 'Die-rolling'
    } else {
      animateVal = ''
    }

    return (
      <button
        className={"Die"}
        // className={this.props.passAnimation === true ? 'Die-rolling' : 'Die'}
        disabled={this.props.passRoll === 0}
        // style={{ backgroundColor: this.props.locked ? "grey" : '' }}
        // onClick={this.props.handleClick}
        onClick={this.handleDieClick}
      >
        {/* {this.props.val} */}
        <i
          className={`fas fa-dice-${fAwesoneDie} fa-4x DieEtr ${animateVal} `}
          // disabled={this.props.passRoll === 0}
          // onClick={this.handleDieClick}
          style={{ color: this.props.locked ? "grey" : '' }}
        ></i>
      </button>
    );
  }
}

export default Die;
