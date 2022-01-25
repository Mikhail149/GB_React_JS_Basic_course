import React from 'react';
import styles from './Message.module.css';

export const Message = (props) => {
    return (
        <div className={styles.container}>
            <p className={styles.text}>
                {props.children}
            </p>
        </div>
    );
}