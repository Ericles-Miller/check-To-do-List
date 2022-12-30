import { useState } from 'react';
import './global.css';
import { Header } from './components/Header';
import styles from './app.module.css';
import { Tasks } from './components/Tasks';
import {CreateContent} from './components/CreateContent';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Header></Header>
      <body className={styles.showWorks} >
        <CreateContent />
        <Tasks />
      </body>
      
    
    </div>
  )
}

export default App
