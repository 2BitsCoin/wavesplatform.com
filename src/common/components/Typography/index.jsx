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
    noMargin
}) => {
    const Tag = tagName || tagMap[type];

    const className = cn(
        classes[type],
        {
            [classes[`align-${String(align)}`]]: align !== Typography.defaultProps.align,
            [classes.noMargin]: noMargin,
            [classes.inverted]: inverted,
            // [classes.colored]: color
            // [classes[`margin-${String(type)}`]]: margin === true,
            // [classes[`margin-${String(type)}-${String(margin)}`]]: margin && margin !== true
        },
        classNameProp
    );

    // cut paragraph (padded right or left to make it shorter)
    const cutDirection = align === 'right' ? 'Left' : 'Right';
    const styleObj = cut ? { ['padding' + cutDirection]: `${cut === true ? 20 : cut}%` } : {}

    return (
        <Tag className={className} style={{ ...styleObj, style }}>
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
    // margin: PropTypes.oneOf([true, ...types])
}



export default injectSheet(styles)(Typography);