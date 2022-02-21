import styles from './Chats.module.css';
import { Message, MessageForm, ChatsList } from "../../components";
import { Switch, Route } from 'react-router-dom'

export const Chats = () => {

  return (
    <div className={styles.container}>
      <ChatsList />
      <Switch>
        <Route path='/chats/:chatId'>
          <div className={styles.container_Message}>
            <Message />
            <MessageForm />
          </div>
        </Route>

        <Route>
          <h1>Выберите чат</h1>
        </Route>
      </Switch>
    </div >
  )
}