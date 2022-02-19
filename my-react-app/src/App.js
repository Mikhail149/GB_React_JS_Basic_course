import styles from './App.module.css';
import { ButtonHead } from "./components";
import { useState, useEffect } from "react";
import { Switch, Route } from 'react-router-dom'
import { Profile } from './routes/Profile'
import { Chats } from './routes/Chats'
import { Home } from './routes/Home'

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
          <Route exact path='/' component={Home} />

          <Route path='/chats' >
            <Chats chatsList={chatsList} messageList={messageList} setMessageList={setMessageList} />
          </Route>

          <Route path='/profile' component={Profile} />



        </Switch>
      </main>
    </>

  );

};

export default App;
