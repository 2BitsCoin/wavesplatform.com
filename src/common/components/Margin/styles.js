const directions = ['top', 'right', 'bottom', 'left'];


function capitalize(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


const createClassesForSide = theme => side => ({
    [`margin-${side}-05`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 0.5,

        [theme.mixins.atMedia('md')]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 1,
        }
    },
    [`margin-${side}-1`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 1,

        [theme.mixins.atMedia('md')]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 2,
        }
    },
    [`margin-${side}-2`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 2,

        [theme.mixins.atMedia('md')]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 4,
        }
    },
    [`margin-${side}-3`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 3,

        [theme.mixins.atMedia('md')]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 6,
        }
    },
    [`margin-${side}-4`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 4,

        [theme.mixins.atMedia('md')]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 8,
        }
    },
    [`margin-${side}-5`]: {
        [`margin${capitalize(side)}`]: theme.spacing.unit * 5,

        [theme.mixins.atMedia('md')]: {
            [`margin${capitalize(side)}`]: theme.spacing.unit * 10,
        }
    },
})



export default theme => {
    const stylesCreator = createClassesForSide(theme);
    let styles = {};

    directions.forEach(side => styles = {
        ...styles,
        ...stylesCreator(side),
    });

    styles['inline-block'] = {
        display: 'inline-block'
    };

    return styles;
}