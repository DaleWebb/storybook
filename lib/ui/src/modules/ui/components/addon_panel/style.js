const baseFonts = {
  fontFamily: '"Circular Std", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
  color: '#4F739A',
  fontWeight: 'bold'
};

export default {
  empty: {
    flex: 1,
    display: 'flex',
    ...baseFonts,
    fontSize: 11,
    letterSpacing: '1px',
    textTransform: 'uppercase',
    alignItems: 'center',
    justifyContent: 'center',
  },

  wrapper: {
    flex: '1 1 auto',
    display: 'flex',
    flexDirection: 'column',
    background: 'white',
    borderRadius: 4,
    border: 'solid 1px #c1d8f0',
    marginTop: 5,
    overflow: 'hidden',
    width: '100%',
  },

  tabbar: {
    display: 'flex',
    flexWrap: 'wrap',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderBottom: 'solid 1px #c1d8f0',
  },

  content: {
    flex: '1 1 0',
    display: 'flex',
    overflow: 'auto',
  },

  tablink: {
    ...baseFonts,
    fontSize: 11,
    letterSpacing: '1px',
    padding: '10px 15px',
    textTransform: 'uppercase',
    transition: 'opacity 0.3s',
    opacity: 0.5,
    maxHeight: 60,
    overflow: 'hidden',
    cursor: 'pointer',
    background: 'transparent',
    border: 'none',
  },

  activetab: {
    opacity: 1,
  },
};
