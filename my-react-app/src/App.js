import styles from './App.module.css';
import { Message, MessageForm, CatsList } from "./components";
import { useState, useEffect } from "react";

const messageBot = { autor: 'Бот', message: 'Автоматическое сообщение' }


function App() {

  const chatsListinitialState = [
    {
      name: 'Чат 1',
      id: 'idChat1'
    },
    {
      name: 'Чат 2',
      id: 'idChat2'
    },
    {
      name: 'Чат 3',
      id: 'idChat4'
    }
  ]

  const [chatsList, setchatsList] = useState(chatsListinitialState);

  const [messageList, setMessageList] = useState([]);

  useEffect(() => {
    if (messageList.length > 0 && messageList[messageList.length - 1].autor !== messageBot.autor) {
      const clearId = setTimeout(() => setMessageList([...messageList, messageBot]), 1000);
      return () => {
        clearTimeout(clearId);
      }
    }
  }, [messageList]);

  return (
    <div className={styles.container}>

      <CatsList chatsList={chatsList}></CatsList>

      <div className={styles.container_Message}>

        <Message text={messageList}></Message>

        <MessageForm messageList={messageList} setMessageList={setMessageList}></MessageForm>

      </div>

    </div >

  );

};

export default App;
