import './App.css';
import Header from './Components/Header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Keyboards from './Components/Keyboards/Keyboards';
import { Accordion } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Keyboards></Keyboards>
        
    </div>
  );
}

export default App;
