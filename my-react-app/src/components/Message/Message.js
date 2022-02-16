import React from 'react';
import styles from './Message.module.css';
import { Redirect, useParams } from "react-router-dom";

export const Message = (props) => {
    const { chatId } = useParams();

    if (!props.chatsList.find(({ id }) => id === chatId)) {
        return <Redirect to='/chats' />
    }



    return (
        <div className={styles.Messages_contaner}>
            {props.text.map((message, index) =>
                <div key={'id' + index} className={styles.container}>
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