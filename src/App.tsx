import { ReactElement } from 'react';
import './App.css';
import DreamPage from './pages/dreams/DreamPage';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import SurveyPage from './pages/survey-pages/survey-page/SurveyPage';

function App(): ReactElement {
    return (
        <ParallaxProvider>
            <div className="App">
                <Route exact path="/" component={DreamPage}></Route>
                <Route path="/survey" component={SurveyPage}></Route>
            </div>
        </ParallaxProvider>
    );
}

export default App;
