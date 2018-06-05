import jsdom from 'jsdom';
import React from 'react';
import expect from 'expect';
import ReactDOM from 'react-dom';
import TestUtils, { isElement } from 'react-addons-test-utils';
import PopperChooseColor from './';

describe('PopperChooseColor', () => {
  let componentProps = null;

  function updateReactElment() {
    return TestUtils.renderIntoDocument(<PopperChooseColorWrapper>
      <PopperChooseColor
        options={componentProps}
      />
    </PopperChooseColorWrapper>);
  }

  class PopperChooseColorWrapper extends React.Component {
    render() {
      return this.props.children;
    }
  }

  beforeEach(function() {
    componentProps = [{value: 0, tolerance: 0, color: "black", label: "None"},
                      {value: 1, tolerance: 1, color: "brown", label: "Brown"},
                      {value: 2, tolerance: 2, color: "red", label: "Red"},
                      {value: 3, color: "orange", label: "Orange"},
                      {value: 4, color: "yellow", label: "Yellow"},
                      {value: 5, tolerance: 0.5, color: "green", label: "Green"},
                      {value: 6, tolerance: 0.25, color: "blue", label: "Blue"},
                      {value: 7, tolerance: 0.1, color: "violet", label: "Violet"},
                      {value: 8, tolerance: 0.05, color: "grey", label: "Grey"},
                      {value: 9, color: "white", label: "White"}];
  });

  it('should be a react element', () => {
    const element = TestUtils.createRenderer().render(<PopperChooseColor
      options={componentProps}
    />);

    isElement(element);
  });

  it('should be there a DIV element with \'PopperChooseColor\' as class name', () => {
    const element = updateReactElment();
    const DomElement = ReactDOM.findDOMNode(element);

    expect(DomElement).toBeDefined();
    expect(DomElement.nodeName).toBe('DIV');
    expect(DomElement.className).toContain('PopperChooseColor-wrapper');
  });

});
