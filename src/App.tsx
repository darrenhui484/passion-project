import { ReactElement } from 'react';
import './App.css';
import DreamPage from './pages/dreams/DreamPage';
import { Route, BrowserRouter as Router } from 'react-router-dom';

function App(): ReactElement {
    return (
        <div className="App">
            <Router>
                <Route path="/" component={DreamPage}></Route>
            </Router>
        </div>
    );
}

export default App;
