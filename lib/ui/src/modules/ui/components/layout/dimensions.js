import PropTypes from 'prop-types';
import React from 'react';


const baseFonts = {
  fontFamily: '"Circular Std", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
  color: '#4F739A',
  WebkitFontSmoothing: 'antialiased',
};

const container = {
  position: 'absolute',
  padding: 5,
  bottom: 10,
  right: 10,
  backgroundColor: 'rgba(255, 255, 255, 0.5)',
};

const dimensionStyle = {
  fontSize: 12,
  ...baseFonts,
};

const delimeterStyle = {
  margin: '0px 5px',
  fontSize: 12,
  ...baseFonts,
};

// Same as Chrome's timeout in the developer tools
const DISPLAY_TIMEOUT = 1000;

class Dimensions extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: false,
    };

    this.hideTimeout = null;
  }

  componentWillReceiveProps({ width, height }) {
    if (width !== this.state.width || height !== this.state.height) {
      this.onChange(width, height);
    }
  }

  componentWillUnmount() {
    clearTimeout(this.hideTimeout);
  }

  onChange(width, height) {
    this.setState({ isVisible: true });

    this.hideTimeout = setTimeout(() => {
      // Ensure the dimensions aren't still changing
      if (width === this.props.width && height === this.props.height) {
        this.setState({ isVisible: false });
      }
    }, DISPLAY_TIMEOUT);
  }

  render() {
    if (!this.state.isVisible) {
      return null;
    }

    const { width, height } = this.props;

    return (
      <div style={container}>
        <span style={dimensionStyle}>{`${width}px`}</span>
        <span style={delimeterStyle}>x</span>
        <span style={dimensionStyle}>{`${height}px`}</span>
      </div>
    );
  }
}

Dimensions.propTypes = {
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default Dimensions;
