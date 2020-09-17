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
    console.log(this.props.locked);
    let fAwesoneDie;
    { this.props.val === 1 ? fAwesoneDie = 'one' : '' }
    { this.props.val === 2 ? fAwesoneDie = 'two' : '' }
    { this.props.val === 3 ? fAwesoneDie = 'three' : '' }
    { this.props.val === 4 ? fAwesoneDie = 'four' : '' }
    { this.props.val === 5 ? fAwesoneDie = 'five' : '' }
    { this.props.val === 6 ? fAwesoneDie = 'six' : '' }

    let animateVal
    let checkDisabled
    if (this.props.passAnimation === true || this.props.locked === false) {
      animateVal = 'Die-rolling'
      // checkDisabled = this.props.passRoll === 0
    }

    if (this.props.passAnimation === false || this.props.locked === true) {
      animateVal = ''
    }


    // let lockedCheck
    // if (this.props.passRoll === 3 || 2 || 1) {
    //   setTimeout(() => {
    //     lockedCheck = this.props.passRoll
    //     setTimeout(() => {
    //       lockedCheck = 0
    //     }, 1000)
    //   }, 1000)
    // } else if (this.props.passRoll === 0) {
    //   lockedCheck = 0
    // }

    return (
      // <button
      // className={"Die"}
      // className={this.props.passAnimation === true ? 'Die-rolling' : 'Die'}
      // disabled={this.props.passRoll === 0}
      // disabled={this.props.passRoll === lockedCheck}
      // style={{ backgroundColor: this.props.locked ? "grey" : '' }}
      // onClick={this.props.handleClick}
      // onClick={this.handleDieClick}

      // >

      // <i
      // className={`fas fa-dice-${fAwesoneDie} fa-4x DieEtr ${animateVal} `}
      // disabled={this.props.locked === true}
      // onClick={this.handleDieClick}
      // style={{ color: this.props.locked ? "grey" : '' }}

      // ></i>
      /* </button> */
      < button
        className='Die'
        disabled={this.props.passRoll === 0 || animateVal === 'Die-rolling'}
        onClick={this.handleDieClick}
      >

        <i
          className={`fas fa-dice-${fAwesoneDie} fa-4x ${animateVal} ${this.props.passRoll === 0 ? 'Die-locked' : 'Die'}`}
          style={{ color: this.props.locked === true ? "grey" : '' }}
        >
        </i>

      </button >
    );
  }
}

export default Die;
