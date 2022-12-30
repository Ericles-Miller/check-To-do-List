import { useState } from 'react';
import './global.css';
import { Header } from './components/Header';
import styles from './app.module.css';
import { CreateWork } from './components/CreateWork';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>

      <Header></Header>
      <body className={styles.showWorks} >
        <CreateWork></CreateWork>
      </body>
      
    
    </div>
  )
}

export default App
