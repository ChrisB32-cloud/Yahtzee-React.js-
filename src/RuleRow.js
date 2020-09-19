import React, { Component } from 'react';
import './RuleRow.css'

class RuleRow extends Component {
  constructor(props) {
    super(props)

    this.state = {
      fieldDisabled: false,

    }

    this.handleRuleClick = this.handleRuleClick.bind(this)

  }

  handleRuleClick() {
    if (this.state.fieldDisabled === false) {
      this.props.doScore()
    }
    if (this.state.fieldDisabled === true) {
      return
    }

    this.setState({
      fieldDisabled: true,
    })

  }

  render() {

    return (
      <tr
        className={`${this.state.fieldDisabled === false ? "RuleRow RuleRow-active" : "RuleRow RuleRow-disabled"}`}
        // className="RuleRow-score"

        // className="RuleRow RuleRow-active"

        onClick={this.handleRuleClick}  >

        <td className='td-text' >{this.props.name}</td>
        {/* <td className='td-score' >{this.props.score}</td> */}
        <td className='td-score' >
          {this.state.fieldDisabled === false ? this.props.scoreRules : this.props.score}
        </td>
      </tr>
    )
  }
}

export default RuleRow;