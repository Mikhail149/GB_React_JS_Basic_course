import React from 'react';
import styles from './Message.module.css';

export const Message = (props) => {
    return (
        <div className={styles.Messages_contaner}>
            {props.text.map((message) =>
                <div className={styles.container}>
                    <p className={styles.autor}>
                        {message.autor}:
                    </p>

                    <p>
                        {message.message}
                    </p>
                </div>
            )
            }
        </div >
    );
}