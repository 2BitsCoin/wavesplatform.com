import React from 'react';
import PropTypes from 'prop-types';

import cn from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';




const Typography = ({
    classes,
    className: classNameProp,
    style,
    cut,
    type,
    tagName,
    tagMap,
    children,
    align,
    inverted,
    dimmed,
    noMargin
}) => {
    const Tag = tagName || tagMap[type];

    const className = cn(
        classes[type],
        {
            [classes[`align-${String(align)}`]]: align !== Typography.defaultProps.align,
            [classes.noMargin]: noMargin,
            [classes.inverted]: inverted && !dimmed,
            [classes.dimmed]: dimmed,
            [classes.cut]: cut,
            // [classes.colored]: color
            // [classes[`margin-${String(type)}`]]: margin === true,
            // [classes[`margin-${String(type)}-${String(margin)}`]]: margin && margin !== true
        },
        classNameProp
    );

    return (
        <Tag className={className} style={style}>
            {children}
        </Tag>
    )
}


Typography.defaultProps = {
    type: 'body',
    tagName: '',
    tagMap: {
        'display4': 'h1',
        'display3': 'h2',
        'display2': 'h3',
        'display1': 'h4',
        'body': 'div',
        'body2': 'div',
        'quote': 'div',
        'numeral': 'div'
    },
    className: '',
    align: 'auto',
}

const types = [
    'display4',
    'display3',
    'display2',
    'display1',
    'body',
    'body2',
    'quote',
    'numeral'
]

Typography.propTypes = {
    type: PropTypes.oneOf(types).isRequired,
    cut: PropTypes.oneOfType([PropTypes.bool, PropTypes.number]),
    inverted: PropTypes.bool,
    dimmed: PropTypes.bool,
    // margin: PropTypes.oneOf([true, ...types])
}



export default injectSheet(styles)(Typography);