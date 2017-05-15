// @flow
import React from 'react';
import styles from './root.scss';

import ambrogio from 'images/ambrogio.png';

function cliackHandler(e:string) {
    console.log('click');
}

/**
 * My first component, the Root component!
 */
const Root = () => (
    <div className={styles.root}>

        <img className={styles.ambrogio} src={ambrogio} alt="Ambrogio" />

        <h1 className={styles.h1}>My name is Ambrogio,</h1>

        <h2 className={styles.h2}>May I help you?</h2>

        <button onClick={cliackHandler.bind(this)} >Click me!</button>

    </div>
);

cliackHandler(2);

export default Root;