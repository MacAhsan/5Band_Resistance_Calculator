import React, { Component } from 'react'
import Circle from '../Circle'
import './styles.css'

export default class PopperChooseColor extends Component {
  render() {
    console.log('dadssad', this.props.options);
    return (
      <div className="PopperChooseColor-wrapper">
        {
          this.props.options.map((option, index) => {
            return (
              <div key={index} className="PopperChooseColor-option">
                <Circle
                  color={option.color}
                  style={option.color === 'white' ? {border: '1px solid grey'} : ''}
                  clicked={() => this.props.choose(this.props.options[index].value)} />
              </div>
            )
          })
        }
      </div>
    )
  }
}
