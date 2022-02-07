import React from 'react';
import styles from './MessageForm.module.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import { styled } from '@mui/system';

const CustomButton = styled(Button)((props) => {
    console.log(props);
    return `
    border-radius: 10px;
    `
})



export const MessageForm = (props) => {


    const [message, setMessage] = useState('');
    const user = 'Автор 1';

    function sendMessage(message, autor = user) {
        if (message !== '') {
            props.setMessageList([...props.messageList, { autor: autor, message: message }]);
            setMessage('');
        }
    }

    function onSubmit(event) {
        event.preventDefault();
        sendMessage(message, 'Автор 1');

    }

    function onChange(event) {
        setMessage(event.target.value);
    }




    return (
        <div className={styles.container}>
            <form className={styles.containerForm} onSubmit={onSubmit}>
                <TrapFocus open>
                    <input tabIndex={-1} value={message} onChange={onChange} placeholder="Введите сообщение" type='text' className={styles.input}></input>
                </TrapFocus>

                <CustomButton type="submit" variant="contained" size="large" endIcon={<SendIcon />}>Отправить</CustomButton>

            </form>

        </div >
    )
}