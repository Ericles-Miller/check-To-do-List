import { useState } from 'react';
import './global.css';
import { Header } from './components/Header';
import styles from './app.module.css';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Header></Header>
    </div>
  )
}

export default App
