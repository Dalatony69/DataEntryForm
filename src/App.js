import './App.css';
import ControlBar from './Components/ControlBar';
import DataEntry from './Components/DataEntry';
import { HashRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="Container"> 
            <div className='ControlBarHolder'>
              <ControlBar/>
            </div>
            <div className='DataEntryHolder'>
              <DataEntry/>
            </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
