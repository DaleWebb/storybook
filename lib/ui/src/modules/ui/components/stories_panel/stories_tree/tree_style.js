
const baseFonts = {
  fontFamily: '"Circular Std", -apple-system, ".SFNSText-Regular", "San Francisco", BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Fira Sans", "Droid Sans", "Helvetica Neue", "Lucida Grande", Arial, sans-serif',
  color: '#4F739A',
  WebkitFontSmoothing: 'antialiased',
};

const toggleWidth = '24px';

export default {
  tree: {
    base: {
      listStyle: 'none',
      margin: 0,
      padding: '5px',
      ...baseFonts,
      fontSize: '15px',
      minWidth: '200px',
      marginLeft: '-19px',
    },
    node: {
      base: {
        position: 'relative',
      },
      link: {
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden',
        padding: '0px 5px',
        display: 'block',
        zIndex: 1,
      },
      toggle: {
        base: {
          position: 'relative',
          display: 'inline-block',
          verticalAlign: 'top',
          marginLeft: '-5px',
          height: '24px',
          width: toggleWidth,
          transformOrigin: '50% 11px',
        },
        wrapper: {
          position: 'absolute',
          top: '50%',
          left: '50%',
          margin: '-6px 0 0 -5px',
        },
        height: 10,
        width: 10,
        arrow: {
          verticalAlign: 'top',
          fill: '#9DA5AB',
        },
      },
      header: {
        base: {
          display: 'inline-block',
          verticalAlign: 'top',
          maxWidth: `calc(100% - ${toggleWidth})`,
        },
        connector: {
          width: '2px',
          height: '12px',
          borderLeft: 'solid 2px black',
          borderBottom: 'solid 2px black',
          position: 'absolute',
          top: '0px',
          left: '-21px',
        },
        title: {
          lineHeight: '18px',
          padding: '1px 0 5px',
        },
        highLightText: {
          backgroundColor: '#FFFEAA',
          fontWeight: 'inherit',
        },
      },
      subtree: {
        paddingLeft: '19px',
        listStyle: 'none',
      },
    },
  },
};
