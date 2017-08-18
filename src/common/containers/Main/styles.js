export default theme => ({
    paddedTop: {
        paddingTop: theme.spacing.unit * 5,
        [theme.mixins.atMedia('md')]: {
            paddingTop: theme.spacing.unit * 8
        },
        [theme.mixins.atMedia('lg')]: {
            paddingTop: theme.spacing.unit * 12
        }
    },
    paddedBottom: {
        paddingBottom: theme.spacing.unit * 5,
        [theme.mixins.atMedia('md')]: {
            paddingBottom: theme.spacing.unit * 8
        },
        [theme.mixins.atMedia('lg')]: {
            paddingBottom: theme.spacing.unit * 12
        }
    },
    section: {
        composes: [
            '$paddedTop',
            '$paddedBottom',
        ]
    },
    sectionNarrow: {
        padding: theme.spacing.getSpacing(3, 0),
        [theme.mixins.atMedia('md')]: {
            padding: theme.spacing.getSpacing(6, 0),
        },
        [theme.mixins.atMedia('lg')]: {
            padding: theme.spacing.getSpacing(10, 0),
        }
    },

    withBackground: {
        padding: theme.spacing.getSpacing(8, 0),
        [theme.mixins.atMedia('md')]: {
            padding: theme.spacing.getSpacing(12, 0),
        },
        [theme.mixins.atMedia('lg')]: {
            padding: theme.spacing.getSpacing(20, 0),
        }
    },

    bg: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'top right',
        transform: 'translateX(-50%)',
        top: 0,
    },
    bgMain: {
        composes: '$bg',
        backgroundImage: `url(${require('./img/bg/1_bgr.svg')})`,
        top: -100,
        height: 'calc(900px - 50vw)',
        [theme.mixins.atMedia('md')]: {
            backgroundPosition: 'top center',
            top: -200,
            height: 950,
        },
        [theme.mixins.atMedia('lg')]: {
            top: -230,
            height: 900
        }
    },
    bgClient: {
        composes: '$bg',
        top: -100,
        backgroundSize: '100%',
        backgroundImage: `url(${require('./img/bg/2_bgr.svg')})`,
    },
    bgWallet: {
        composes: '$bg',
        backgroundSize: '100%',
        top: -150,
        // height: '50%',
        backgroundImage: `url(${require('./img/bg/3_bgr.svg')})`,
    },
    bgDex: {
        composes: '$bg',
        backgroundImage: `url(${require('./img/bg/3_bgr.svg')})`,
    },

    backgroundColor: {
        background: theme.palette.gray[50]
    },
    backgroundGradient: {
        backgroundImage: `linear-gradient(45deg, rgba(255,255,255,0) 25%, ${theme.palette.gray[50]})`
    },

    centered: {
        textAlign: 'center'
    },
    marginSmall: {
        marginBottom: theme.spacing.unit
    },
    movedDown: {
        marginBottom: -theme.spacing.unit * 15
    },
    footerDivider: {
        height: 1,
        background: theme.palette.gray[500],
        zIndex: 1
    }
})