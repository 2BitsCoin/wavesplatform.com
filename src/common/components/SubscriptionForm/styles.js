export default theme => ({
    wrapper: {
        height: 70
    },
    inputs: {
        display: 'flex',
        marginBottom: theme.spacing.unit
    },
    inputWrapper: {
        flex: '1',
        marginRight: theme.spacing.unit
    },
    input: {
        width: '100%'
    },

    textGray: {
        color: theme.palette.gray[100]
    },

    buttonWrapper: {
        flex: '0 0'
    },
    buttonFull: {
        display: 'none'
    },

    [theme.breakpoints.down('sm')]: {
        button: {
            padding: theme.spacing.getSpacing(0, 1.5, 0, 2)
        },
    },
    [theme.breakpoints.up('sm')]: {
        buttonIcon: {
            display: 'none'
        },
        buttonFull: {
            display: 'inline-block'
        }
    }
})