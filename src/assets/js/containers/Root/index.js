// @flow
import React, {Component} from 'react';
import PropTypes from 'prop-types';

// Styles
import styles from './root.scss';

// Components
import Button from 'components/Button';

// Assets
import ambrogio from 'images/ambrogio.png';

/**
 * My first component, the Root component!
 */
class Root extends Component {

    render() {
        return (
            <div className={styles.root}>

                <img className={styles.ambrogio} src={ambrogio} alt="Ambrogio" />

                <h1 className={styles.h1}>My name is Ambrogio,</h1>

                <h2 className={styles.h2}>May I help you?</h2>

                <Button
                    label="Click me!"
                    clickCallback={this.buttonClickHandler}
                />

            </div>
        );
    }

    /**
     * Log a descriptor and the click event object
     * @public
     * @param {SyntheticEvent} e The react `SyntheticEvent`
     */
    buttonClickHandler(e) {
        console.log('Button click handler', e);
    }

}

export default Root;