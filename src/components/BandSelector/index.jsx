import React, { PureComponent } from 'react'
import Circle from '../Circle'
import PopperChooseColor from '../PopperChooseColor'
import Backdrop from '../Backdrop'

class BandSelector extends PureComponent {
    state = {
      showPopper: false
    }

    handleChange = (value) => {
      this.props.updateBandState(this.props.band, parseInt(value));
    }

    render(){
        const { options, label } = this.props;

        return (
            <div>
              <Circle
                clicked={
                  () => this.setState({showPopper: true})
                }
                color={this.props.colorCurrent}
                text={label}
              />
              {
                this.state.showPopper && (
                  <PopperChooseColor
                   close={() => this.setState({showPopper: false})}
                   choose={(value) => {
                      this.handleChange(value);
                      this.setState({showPopper: false});
                   }}
                   options={options}
                  />
                )
              }
              <Backdrop show={this.state.showPopper} clicked={
                () => this.setState({showPopper: false})
              }/>
            </div>
        );
    }
};

export default BandSelector
