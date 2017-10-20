const hidden = {
    position: 'absolute',
    top: -9999,
    left: -9999
}


export default theme => ({
    wrapper: {
        position: 'relative'
    },
    burger: {
        width: 32,
        height: 32,
        padding: theme.spacing.getSpacing(0, .5, 1)
    },
    popover: {
        position: 'absolute',
        right: 0,
        top: 0,
        opacity: 0,
        transition: theme.transitions.create(['opacity', 'transform']),
        transform: 'scale(0.9)',
        transformOrigin: 'right top'
    },
    enteringPopover: { opacity: 1, transform: 'scale(1)' },
    enteredPopover: { opacity: 1, transform: 'scale(1)' },
    exitingPopover: { opacity: 0, transform: 'scale(0.9)' },
    exitedPopover: hidden,
    unmountedPopover: { opacity: 0 },
    linksWrapper: {
        padding: theme.spacing.getSpacing(7, 0)
    },
    link: {
        ...theme.typography.display1,
        textDecoration: 'none',
        // color: theme.palette.gray[900],
        display: 'block',
        padding: theme.spacing.getSpacing(1, 5),
        '&:active': {
            backgroundColor: theme.palette.grayBlue[300]
        }
    },
})