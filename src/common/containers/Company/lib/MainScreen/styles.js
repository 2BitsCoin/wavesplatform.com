const styles = theme => ({
    root: {
        marginBottom: 90
    },
    subtitle: {
        maxWidth: '80%'
    },
    quote: {
        float: 'right',
        maxWidth: 380,

        fontStyle: 'italic',
        paddingRight: theme.spacing.unit * 4,
        borderRight: `6px solid ${theme.palette.primary[500]}`,
    },
    [theme.breakpoints.up('md')]: {
        quote: {
            marginTop: theme.spacing.unit * 4,
        }
    },
    // [theme.breakpoints.up('lg')]: {
    //     root: {
    //         height: 400,
    //         overflow: 'visible',
    //     }
    // }
})

export default styles;