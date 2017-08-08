import React from 'react';
import injectSheet from 'react-jss';

// import cn from 'classnames';

import Typography from 'src/common/components/Typography';
// import { Row, Column } from 'src/common/components/Grid';


const quoteStyles = {
    fontSize: '2em',
    lineHeight: '0.1em',
    verticalAlign: '-0.2em',
}

const styles = theme => ({
    wrapper: {
        display: 'flex'
    },
    avatarWrapper: {
        display: 'none',
        flex: '0 0',
        flexBasis: theme.spacing.unit * 10,
        height: theme.spacing.unit * 10,
        marginRight: theme.spacing.unit * 3,

        background: theme.palette.gray[300],
        borderRadius: '50%',
        overflow: 'hidden'
    },
    quote: {
        '&:before': {
            ...quoteStyles,
            content: 'open-quote',
            marginRight: '0.25em',
        },
        '&:after': {
            ...quoteStyles,
            content: 'close-quote',
            marginLeft: '0.15em',
        }
    },
    [theme.mixins.atMedia('lg')]: {
        avatarWrapper: {
            display: 'block'
        }
    }
    // block: {
    //     marginBottom: theme.spacing.unit * 2,
    //     zIndex: 1
    // }
})



const FeedbackQuote = ({
    classes,
    avatar,
    children,
    signature,
}) => (
        <div className={classes.wrapper}>
            <div className={classes.avatarWrapper}>
                {avatar}
            </div>
            <div>
                <Typography type="quote" className={classes.quote}>
                    {children}
                </Typography>
                <br />
                <Typography type="body">
                    — {signature}
                </Typography>
            </div>
        </div>
    )


FeedbackQuote.defaultProps = {
    avatar: null
}


export default injectSheet(styles)(FeedbackQuote);