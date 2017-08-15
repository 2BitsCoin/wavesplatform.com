const styles = theme => ({
    root: {
    },
    centered: {
        textAlign: 'center'
    },
    image: {
        display: 'block',
        width: '100%',
        paddingBottom: '60%',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
    },
    narrow: {
        display: 'inline-block',
        maxWidth: 400,
    },
    link: {
        ...theme.typography.display1
    }
    // [theme.mixins.atMedia('md')]: {
    //     link: {
    //         opacity: 0.6,
    //         transition: theme.transitions.create('opacity'),
    //         '&:hover': {
    //             opacity: 1
    //         }
    //     }
    // }
})

export default styles;