import React, { Component } from 'react'
import bandConfig from '../../config/getBands'
import BandSelector from '../BandSelector'

import './styles.css'

class Controls extends Component {
  render() {
    let labels = [
      'Band 1',
      'Band 2',
      'Band 3',
      'Mult',
      'Resistence'
    ]
    return (
      <div className="Controls-Wrapper">
        {this.props.bands.map((b, i) => {
          const options = bandConfig.bandOptions.filter((b, j) => (
            bandConfig.bands[i].omitOptions.indexOf(j) === -1
          ))

          return (
            <div key={i} className={i < 4 ? 'Controls-Circle' : ''}>
              <BandSelector
                options={options}
                band={i}
                label={labels[i]}
                value={this.props.bands[b]}
                colorCurrent={bandConfig.bandOptions[b].color}
                updateBandState={this.props.updateBandState}
              />
            </div>
          )
        })}
      </div>
    )
  }
}

export default Controls
