import './App.css';
import ControlBar from './Components/ControlBar';
import DataEntry from './Components/DataEntry';
import { BrowserRouter as Router } from 'react-router-dom';

function App() {
  return (
    <div className="App" basename={process.env.PUBLIC_URL}>
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
