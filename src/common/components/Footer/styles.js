import flexCentered from '../../styles/flexCentered';


export default theme => {
    const BACKGROUND = "#172947"
    return {
        root: {
            position: 'relative',
            marginTop: theme.spacing.unit * 8
        },

        // text
        textGray: {
            color: theme.palette.gray[500]
        },
        textDarkGray: {
            color: theme.palette.gray[700]
        },

        footer: {
            padding: theme.spacing.getSpacing(6, 0, 4)
        },
        row: {
            alignItems: 'center'
        },

        background: {
            background: BACKGROUND,
            transformOrigin: 'left top'
        },
        backgroundWrapper: {
            position: 'absolute',
            top: 0,
            right: 0,
            left: 0,
            bottom: 0
        },
        background2: {
            composes: '$background',
            left: '100%',
        },

        // blocks
        social: {
            marginBottom: theme.spacing.unit * 4,
        },
        nav: {
            marginBottom: theme.spacing.unit * 3
        },
        language: {
            marginBottom: theme.spacing.unit,
            textAlign: 'center',
        },
        copyright: {
            marginBottom: theme.spacing.unit * 2,
            textAlign: 'center'
        },

        logo: flexCentered,
        logoLink: {
            opacity: 0.5,
            transition: theme.transitions.create('opacity'),
            '&:hover': {
                opacity: 1
            }
        },

        navWrapper: {
            textAlign: 'center',
            '&:after': {
                content: '""',
                display: 'block',
                clear: 'both'
            }
        },

        [theme.mixins.atMedia('sm')]: {
            root: {
                marginTop: theme.spacing.unit * 13
            },
        },

        [theme.mixins.atMedia('md')]: {
            root: {
                marginTop: theme.spacing.unit * 15
            },
            footer: {
                padding: theme.spacing.getSpacing(6, 0, 6)
            },
            social: {
                order: 1,
                margin: 0
            },
            nav: {
                order: 2,
                margin: 0
            },
            logo: {
                order: 3,
                margin: 0
            },
            language: {
                textAlign: 'left',
                order: 4,
                marginTop: theme.spacing.unit * 4,
            },
            copyright: {
                order: 5,
                textAlign: 'right',
                marginTop: theme.spacing.unit * 4,
            },
            navWrapper: {
                float: 'right',
            },
        },

        [theme.mixins.atMedia('lg')]: {
            root: {
                marginTop: theme.spacing.unit * 25
            },
        }
    }
}