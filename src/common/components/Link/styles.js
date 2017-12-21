const styles = theme => ({
  link: {
    textDecoration: 'none',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
  },

  text: {
    // display: 'inline-block',
    whiteSpace: 'normal',
    paddingRight: '1.2em',
  },

  pseudo: {
    borderBottom: '1px dashed',
  },

  noDecoration: {
    border: 0,
  },

  primary: {
    color: theme.palette.primary[500],
    borderColor: theme.palette.opaque(theme.palette.primary[500], 0.5),
    ['&:hover, &:active']: {
      color: theme.palette.primary[300],
      borderColor: theme.palette.opaque(theme.palette.primary[300], 0.5),
    },
  },

  secondary: {
    color: theme.palette.orange[300],
    borderColor: theme.palette.opaque(theme.palette.primary[500], 0.5),
    ['&:hover, &:active']: {
      color: theme.palette.gray[0],
      borderColor: theme.palette.opaque(theme.palette.primary[300], 0.5),
    },
  },

  inverted: {
    color: theme.palette.grayBlue[200],
    borderColor: theme.palette.opaque(theme.palette.grayBlue[200], 0.5),
    ['&:hover, &:active']: {
      color: theme.palette.gray[0],
      borderColor: theme.palette.opaque(theme.palette.gray[0], 0.5),
    },
  },

  icon: {
    display: 'inline-block',
    marginLeft: '-.7em',
    height: '.7em',
    width: '.7em',
  },
});

export default styles;
