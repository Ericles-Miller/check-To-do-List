import './global.css';
import { Header } from './components/Header';

import {CreateContent} from './components/CreateContent';

function App() {
  return (
    <div>
      <Header></Header>
      <body>
        <CreateContent />
      </body>   
    </div>
  )
}

export default App
