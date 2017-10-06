import React from 'react';

import cn from 'classnames';


import injectSheet from 'react-jss';

const styles = theme => ({
    link: {
        color: theme.palette.primary[500],
        textDecoration: 'none',
        cursor: 'pointer',

        borderBottom: `1px solid ${theme.palette.opaque(theme.palette.primary[500], 0.5)}`,

        '&:hover': {
            color: theme.palette.primary[300],
            borderColor: theme.palette.opaque(theme.palette.primary[300], 0.5),
        },
        '&:active': {
            color: theme.palette.primary[300],
            borderColor: theme.palette.opaque(theme.palette.primary[300], 0.5),
        },
    },

    pseudo: {
        borderBottomStyle: 'dashed !important',
    },

    noDecoration: {
        border: 0
    },

    secondary: {
        color: theme.palette.orange[300],
        borderColor: theme.palette.opaque(theme.palette.orange[300], 0.5),
        '&:hover': {
            color: theme.palette.gray[0],
            borderColor: theme.palette.opaque(theme.palette.gray[0], 0.5),
        },
        '&:active': {
            color: theme.palette.gray[0],
            borderColor: theme.palette.opaque(theme.palette.gray[0], 0.5),
        },
    },

    inverted: {
        color: theme.palette.grayBlue[200],
        borderColor: theme.palette.opaque(theme.palette.grayBlue[200], 0.5),
        '&:hover': {
            color: theme.palette.gray[0],
            borderColor: theme.palette.opaque(theme.palette.gray[0], 0.5),
        },
        '&:active': {
            color: theme.palette.gray[0],
            borderColor: theme.palette.opaque(theme.palette.gray[0], 0.5),
        },
    }
})



const Link = ({
    classes,
    className: classNameProp,
    inverted,
    secondary,
    pseudo,
    textDecoration,
    sheet, // eslint-disable-line
    theme, // eslint-disable-line
    href,
    ...rest
}) => {
    const className = cn(
        classes.link,
        {
            [classes.inverted]: inverted,
            [classes.secondary]: secondary,
            [classes.pseudo]: pseudo,
            [classes.noDecoration]: !textDecoration,
        },
        classNameProp
    );

    const Element = href ? 'a' : 'span';

    return (
        <Element href={href} className={className} { ...rest } />
    )
}


Link.defaultProps = {
    textDecoration: true
}


export default injectSheet(styles)(Link);