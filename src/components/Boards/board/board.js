import React, { Component } from 'react'; import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import './Board.scss';
import Introduction from '../board-step-introduction/BoardIntroduction';
import BoardSelection from '../board-step-selection/BoardSelection';
import BoardFilling from '../board-step-filling/BoardFilling'
class Board extends Component {
  render() {
    // Checking which step is passed to the board wrapper and render the right component 
    switch (this.props.currentStep) {
      case "Introduction":
        return (<Introduction nextStep={this.props.nextStep} />);
      case "Template Selection":
        return (<BoardSelection changeResumeName={this.props.changeResumeName} nextStep={this.props.nextStep} stepBack={this.props.stepBack} />);
      default:
        return (<BoardFilling currentResumeName={this.props.currentResumeName} stepBack={this.props.stepBack} values={this.props.values} />);
    }
  };
}
export default Board;
