// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Style
import button from './button.scss';

/**
 * Simple button with a click callback
 */
const Button = ({label, clickCallback}) => (
    <button
        className={button.root}
        onClick={clickCallback}
    >
        {label}
    </button>
);

Button.propTypes = {
    /** Shown label */
    label: PropTypes.string,
    /** On click callback */
    clickCallback: PropTypes.func
};

Button.defaultProps = {
    label: 'Default label',
    clickCallback: e => console.log('default label', e)
};

export default Button;