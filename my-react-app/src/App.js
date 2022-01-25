import './App.css';
import { Message } from "./components";

function App() {
  const message = "Текст (константа)"

  return (
    <Message>{message}</Message>
  );

};

export default App;
