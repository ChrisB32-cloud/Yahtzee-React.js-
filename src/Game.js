import React, { Component } from "react";
import Dice from "./Dice";
import ScoreTable from "./ScoreTable";
import "./Game.css";
// import { number } from "prop-types";

const NUM_DICE = 5;
const NUM_ROLLS = 3;

class Game extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dice: Array.from({ length: NUM_DICE }),
      locked: Array(NUM_DICE).fill(false),
      rollsLeft: NUM_ROLLS,
      scores: {
        ones: undefined,
        twos: undefined,
        threes: undefined,
        fours: undefined,
        fives: undefined,
        sixes: undefined,
        threeOfKind: undefined,
        fourOfKind: undefined,
        fullHouse: undefined,
        smallStraight: undefined,
        largeStraight: undefined,
        yahtzee: undefined,
        chance: undefined
      },
      animationRoll: false,
      totalScore: 0,
    };
    this.roll = this.roll.bind(this);
    this.doScore = this.doScore.bind(this);
    this.toggleLocked = this.toggleLocked.bind(this)
    this.sunTotalScore = this.sunTotalScore.bind(this)
  }

  roll(evt) {
    // roll dice whose indexes are in reroll
    this.setState(st => ({
      dice: st.dice.map((d, i) =>
        st.locked[i] ? d : Math.ceil(Math.random() * 6)
      ),
      locked: st.rollsLeft > 1 ? st.locked : Array(NUM_DICE).fill(true),
      rollsLeft: st.rollsLeft - 1,
      animationRoll: true
    }));

    setTimeout(() => {
      this.setState({ animationRoll: false });
    }, 1000)

  }

  toggleLocked(idx) {
    // toggle whether idx is in locked or not

    // console.log(idx);
    this.setState(st => ({
      locked: [
        ...st.locked.slice(0, idx),
        !st.locked[idx],
        ...st.locked.slice(idx + 1)
      ]
    }));


  }

  doScore(rulename, ruleFn) {
    // evaluate this ruleFn with the dice and score this rulename
    // console.log(rulename);

    // console.log(ruleFn(this.state.dice));
    this.setState(st => ({
      scores: { ...st.scores, [rulename]: ruleFn(this.state.dice) },
      rollsLeft: NUM_ROLLS,
      locked: Array(NUM_DICE).fill(false)
    }));
    this.roll();

  }

  sunTotalScore() {
    let tot = 0;
    for (let d in this.state.scores) {
      // tot = tot + this.state.scores[d]
      if (Number.isInteger(this.state.scores[d])) {
        tot = tot + this.state.scores[d]
      }
      // console.log(tot);
    }


  }

  // componentDidMount() {
  //   window.addEventListener('load', this.roll);
  // }

  render() {
    // console.log(this.state.scores);

    this.sunTotalScore()
    return (
      <div className='Game'>
        <header className='Game-header'>
          <h1 className='App-title'>Yahtzee!</h1>

          <section className='Game-dice-section'>
            <Dice
              dice={this.state.dice}
              locked={this.state.locked}
              handleClick={this.toggleLocked}
              rolls={this.state.rollsLeft}
              animation={this.state.animationRoll}
            />
            <div className='Game-button-wrapper'>
              <button
                className='Game-reroll'
                disabled={this.state.locked.every(x => x)}
                onClick={this.roll}
              >
                {this.state.rollsLeft} ReRolls Left
              </button>
            </div>
          </section>
        </header>
        <ScoreTable doScore={this.doScore} scores={this.state.scores} />
      </div>
    );
  }
}

export default Game;
