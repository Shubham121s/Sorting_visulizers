import React, { Component } from 'react';
import mergeSort from './algorithms/mergeSort';
// Icons
import Play from '@material-ui/icons/PlayCircleOutlineRounded';
import Forward from '@material-ui/icons/SkipNextRounded'; // Fixed typo here

import Backward from '@material-ui/icons/SkipPreviousRounded';
import RotateLeft from '@material-ui/icons/RotateLeft';
// CSS
import './App.css';
// Components
import Bar from './components/Bar';

class App extends Component {
  state = {
    array: [],
    arraySteps: [],
    colorKey: [],
    colorSteps: [],
    currentStep: 0,
    count: 10,
    delay: 100,
    algorithm: 'Merge Sort',
    timeouts: [],
  };

  componentDidMount() {
    this.generateRandomArray();
  }

  ALGORITHMS = {
    'Merge Sort': mergeSort,
  };

  generateSteps = () => {
    try {
      const { array, arraySteps, colorSteps, algorithm } = this.state;
      const newArray = array.slice();
      const newSteps = arraySteps.slice();
      const newColorSteps = colorSteps.slice();

      // Execute the selected algorithm
      this.ALGORITHMS[algorithm](newArray, 0, newSteps, newColorSteps);

      // Update state immutably
      this.setState({
        arraySteps: [...newSteps], // Using spread operator for immutability
        colorSteps: [...newColorSteps], // Using spread operator for immutability
      });
    } catch (error) {
      console.error('Error in generateSteps:', error);
      // Handle the error, e.g., display an error message to the user
    }
  };

  clearTimeouts = () => {
    this.state.timeouts.forEach((timeout) => clearTimeout(timeout));
    this.setState({
      timeouts: [],
    });
  };

  clearColorKey = () => {
    const blankKey = new Array(this.state.count).fill(0);

    this.setState({
      colorKey: blankKey,
      colorSteps: [blankKey],
    });
  };

  generateRandomNumber = (min, max) => {
    return Math.floor(Math.random() * (max - min) + min);
  };

  generateRandomArray = () => {
    this.clearTimeouts();
    this.clearColorKey();
    const count = this.state.count;
    const temp = [];

    for (let i = 0; i < count; i++) {
      temp.push(this.generateRandomNumber(50, 200));
    }

    this.setState({
      array: temp,
      arraySteps: [temp],
      currentStep: 0,
    }, () => {
      this.generateSteps();
    });
  };

  changeArray = (index, value) => {
    const arr = this.state.array.slice();
    arr[index] = value;
    this.setState({
      array: arr,
      arraySteps: [arr],
      currentStep: 0,
    }, () => {
      this.generateSteps();
    });
  };

  previousStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep === 0) return;
    currentStep -= 1;
    this.setState({
      currentStep: currentStep,
      array: this.state.arraySteps[currentStep],
      colorKey: this.state.colorSteps[currentStep],
    });
  };

  nextStep = () => {
    let currentStep = this.state.currentStep;
    if (currentStep >= this.state.arraySteps.length - 1) return;
    currentStep += 1;
    this.setState({
      currentStep: currentStep,
      array: this.state.arraySteps[currentStep],
      colorKey: this.state.colorSteps[currentStep],
    });
  };

  start = () => {
    const { arraySteps, colorSteps, currentStep, delay } = this.state;
    this.clearTimeouts();
    let timeouts = [];
    let i = 0;
    while (i < arraySteps.length - currentStep) {
      let timeout = setTimeout(() => {
        this.setState((prevState) => ({
          array: arraySteps[prevState.currentStep],
          colorKey: colorSteps[prevState.currentStep],
          currentStep: prevState.currentStep + 1,
        }));
      }, delay * i);
      timeouts.push(timeout);
      i++;
    }
    this.setState({
      timeouts: timeouts,
    });
  };

  render() {
    const bars = this.state.array.map((value, index) => (
      <Bar key={index} index={index} length={value} color={this.state.colorKey[index]} changeArray={this.changeArray} />
    ));

    let playButton;
    if (this.state.arraySteps.length === this.state.currentStep) {
      playButton = (
        <button className='controller' onClick={this.generateRandomArray}>
          <RotateLeft />
        </button>
      );
    } else {
      playButton = (
        <button className='controller' onClick={this.start}>
          <Play />
        </button>
      );
    }

    return (

      <div className='App'>
        <h1 className='heading'>Sorting Visulizer!</h1>
        <div className='frame'>
          <div className='barsDiv container card'>{bars}</div>
        </div>
        <div className='control-pannel'>
          <div className='contrl-buttons'>
            <button className='controller' onClick={this.previousStep}>
              <Backward />
            </button>
            {playButton}
            <button className='controller' onClick={this.nextStep}>
              <Forward />
            </button>
          </div>
        </div>
        <div className='pannel'></div>
      </div>
    );
  }
}

export default App;



