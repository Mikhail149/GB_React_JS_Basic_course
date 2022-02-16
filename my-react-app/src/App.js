import styles from './App.module.css';
import { Message, MessageForm, CatsList, ButtonHead } from "./components";
import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'

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
    <>
      <header className={styles.head}>
        <div className={styles.headButtons}>
          <ButtonHead Link='/'>Домашняя страница</ButtonHead>
          <ButtonHead Link='/chats'>Чаты</ButtonHead>
          <ButtonHead Link='/profile'>Профиль</ButtonHead>
        </div>
      </header>

      <main>
        <Switch>
          <Route exact path='/'>
            <p>Домашняя страница</p>
          </Route>

          <Route path='/chats'>

            <div className={styles.container}>
              <CatsList chatsList={chatsList}></CatsList>
              <Switch>
                <Route path='/chats/:chatId'>
                  <div className={styles.container_Message}>
                    <Message text={messageList} chatsList={chatsList}></Message>
                    <MessageForm messageList={messageList} setMessageList={setMessageList}></MessageForm>
                  </div>
                </Route>

                <Route>
                  <h1>Выберите чат</h1>
                </Route>
              </Switch>
            </div >

          </Route>

        </Switch>
      </main>
    </>

  );

};

export default App;
