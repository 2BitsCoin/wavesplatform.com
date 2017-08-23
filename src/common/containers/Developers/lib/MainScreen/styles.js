import table from './img/table.svg';


const styles = theme => ({
    root: {},
    imageWrapper: {
        position: 'relative',
        paddingTop: '67%',
        overflow: 'visible',
    },
    image: {
        width: '110%',
        height: '110%',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,

        background: `url(${table}) no-repeat`,
        backgroundSize: '100%',
    },
    [theme.mixins.atMedia('md')]: {
        image: {
            width: '130%',
            height: '140%',
            position: 'absolute',
            zIndex: -1,
            top: -70,
            left: 100,
        },
    }
})

export default styles;