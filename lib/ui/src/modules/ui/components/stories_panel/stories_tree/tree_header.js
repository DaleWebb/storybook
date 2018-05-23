import PropTypes from 'prop-types';
import React from 'react';

const baseFonts = {
  fontFamily: '"Circular Std", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
  color: '#4F739A',
  WebkitFontSmoothing: 'antialiased',
};

const headingStyle = {
  ...baseFonts,
  textTransform: 'uppercase',
  letterSpacing: '1.2px',
  fontSize: '12px',
  fontWeight: 'normal',
  color: '#4F739A',
  textAlign: 'left',
  padding: '5px 13px',
  margin: 0,
  marginTop: 20,
  overflow: 'hidden',
};

const TreeHeader = ({ children }) => <h4 style={headingStyle}>{children}</h4>;

TreeHeader.propTypes = {
  children: PropTypes.string.isRequired,
};

export default TreeHeader;
