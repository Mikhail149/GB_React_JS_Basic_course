import styles from './App.module.css';
import { ButtonHead } from "./components";
import { Switch, Route } from 'react-router-dom'
import { Profile } from './routes/Profile'
import { Chats } from './routes/Chats'
import { Home } from './routes/Home'

function App() {

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
            <Chats />
          </Route>
          <Route path='/profile' component={Profile} />
        </Switch>
      </main>
    </>
  );
};
export default App;
