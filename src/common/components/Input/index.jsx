import React, { PureComponent } from 'react';

import cn from 'classnames';

import injectSheet from 'react-jss';
import styles from './styles';



class Input extends PureComponent {

    focus = () => this.input.focus()
    blur = () => this.input.blur()


    render() {
        const {
            classes,
            className: classNameProp,
            disabled,
            invalid,
            theme, // eslint-disable-line
            sheet, // eslint-disable-line
            tagName,
            type,
            ...rest
        } = this.props;


        const className = cn(
            classes.root,
            {
                [classes.invalid]: invalid,
                [classes.disabled]: disabled,
            },
            classNameProp
        )

        return (
            <tagName
                type={tagName === 'input' ? type : undefined}
                ref={el => this.input = el}
                className={className}
                {...rest}
            />
        )
    }
}


Input.defaultProps = {
    // backgroundColor: 'gray-300',
    // color: 'primary-900',
    tagName: "input",
    type: "text",
    className: '',
    invalid: false
}


export default injectSheet(styles)(Input);