import React from 'react';
import styles from './MessageForm.module.css';
import { useState } from "react";


export const MessageForm = (props) => {


    const [message, setMessage] = useState('');


    function onSubmit(event) {
        event.preventDefault();
        console.log('1');
        if (message !== '') {
            props.setMessageList([...props.messageList, { autor: 'Автор 1', message: message }]);
        }
        setMessage('');
    }

    function onChange(event) {
        setMessage(event.target.value);
    }


    return (
        <div className={styles.container}>
            <form onSubmit={onSubmit}>
                <input className={styles.input}
                    onChange={onChange} value={message} type="text" name="message" />


                <button type="submit" className={styles.send}>
                    Отправить
                </button>
            </form>

        </div>
    )
} 