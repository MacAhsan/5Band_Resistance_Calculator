import React, { Component } from 'react'
import Resistence from './components/Resistence'
import bandsConfig from './config/getBands'
import Controls from './components/Controls'
import OhmageIndicator from './components/OmageIndicator'
import ToleranceIndicator from './components/ToleranceIndicator'
import './App.css'

/**
|--------------------------------------------------
| Application component of the Calculator
|--------------------------------------------------
*/
class App extends Component {
  state = {
    bands: bandsConfig.bands.map(v => v.value || 0),
    resistance: 0,
    tolerance: 0
  }

  getMultiplier() {
    if (this.state.bands[3] === 10)
      return 0.1;
    if (this.state.bands[3] === 11)
      return 0.01;
    return Math.pow(10, this.state.bands[3]);

  }

  calculateResistance() {
    return this.getMultiplier() *
      ((100 * this.state.bands[0]) +
        (10 * this.state.bands[1]) +
        (1 * this.state.bands[2]));
  }

  updateBandState = (band, value) => {
    const { bandOptions } = bandsConfig;
    const { bands } = this.state;
    bands[band] = value;
    this.setState({
      bands,
      resistance: this.calculateResistance(),
      tolerance: bandOptions[this.state.bands[4]].tolerance
    })
  }

  render() {
      return (
      <div className="App">
        <div className="App-Wrapper">
          <div className="App-Content">
            <div className="App-Content-SVG">
              <Resistence bands={this.state.bands}/>
            </div>
            <div className="App-Content-Controls">
              <div className="App-Header">
                <h1 className="App-Title"> Calculator Resistence </h1>
                <p> Pick the color to choose the value for bands </p>
              </div>
              <div className="App-Controls">
                <Controls
                  bands={this.state.bands}
                  updateBandState={this.updateBandState}
                />
              </div>
              <div className="App-Value">
                <p> Value to the resistence </p>
                <OhmageIndicator resistance={this.state.resistance}/>
                <ToleranceIndicator tolerance={this.state.tolerance}/>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
