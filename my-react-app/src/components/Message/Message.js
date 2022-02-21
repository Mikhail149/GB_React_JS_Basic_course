import React from 'react';
import styles from './Message.module.css';
import { Redirect, useParams } from "react-router-dom";
import { useSelector } from 'react-redux';
import { getChatsFromReduser } from '../../store/chats/selectors'
import { getChatMessages } from '../../store/messages/selectors'

export const Message = () => {
    const { chatId } = useParams();

    const messagesState = useSelector(getChatMessages(chatId));
    const chatListState = useSelector(getChatsFromReduser);

    if (!chatListState.find(({ id }) => id === chatId)) {
        return <Redirect to='/chats' />
    }

    if (messagesState) {
        return (
            <div className={styles.Messages_contaner}>
                {messagesState.map((message, index) =>
                    <div key={'id' + index} className={styles.container}>
                        <p className={styles.autor}>
                            {message.autor}:
                        </p>

                        <p>
                            {message.text}
                        </p>
                    </div>
                )
                }
            </div >
        );
    } else {
        return (
            <div className={styles.Messages_contaner}>
            </div >)


    }


}