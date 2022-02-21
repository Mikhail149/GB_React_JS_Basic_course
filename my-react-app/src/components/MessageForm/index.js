import React from 'react';
import styles from './MessageForm.module.css';
import { useState } from "react";
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TrapFocus from '@mui/material/Unstable_TrapFocus';
import { styled } from '@mui/system';
import { useSelector, useDispatch } from 'react-redux';
import { newMessageAction } from '../../store/messages/actions'
import { useParams } from "react-router-dom";
import { getUserFromProfile } from '../../store/profile/selector';

const CustomButton = styled(Button)((props) => {
    return `
    border-radius: 10px;
    `
})

export const MessageForm = () => {

    const dispatch = useDispatch();
    const user = useSelector(getUserFromProfile);;
    const [message, setMessage] = useState('');
    const { chatId } = useParams();

    function sendMessage(message, autor, chatId) {
        if (message !== '') {
            const messageId = chatId + 'mess' + Date.now();
            dispatch(newMessageAction(message, autor, messageId, chatId))
            setMessage('');
        }
    }

    function onSubmit(event) {
        event.preventDefault();
        sendMessage(message, user, chatId);
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