import { ReactElement } from 'react';
import './App.css';
import DreamPage from './pages/dreams/DreamPage';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import SurveyPage from './pages/survey-pages/survey-page/SurveyPage';
import TestPage from './pages/test-page/TestPage';
import BoardingPassesPage from './pages/boardingPasses/BoardingPassesPage';
import StoriesPage from './pages/stories-list/StoriesPage';

function App(): ReactElement {
    return (
        <ParallaxProvider>
            <div className="App">
                <Route exact path="/" component={TestPage}></Route>
                <Route path="/survey" component={SurveyPage}></Route>
                <Route path="/boarding-passes" component={BoardingPassesPage}></Route>
                <Route path="/stories" component={StoriesPage}></Route>
            </div>
        </ParallaxProvider>
    );
}

export default App;
