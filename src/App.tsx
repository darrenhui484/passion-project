import { ReactElement } from 'react';
import './App.css';
import DreamPage from './pages/dreams/DreamPage';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import { ParallaxProvider } from 'react-scroll-parallax';
import SurveyPage from './pages/survey-pages/survey-page/SurveyPage';
import BoardingPassesPage from './pages/boardingPasses/BoardingPassesPage';
import StoriesPage from './pages/stories-list/StoriesPage';
import StoryPage from './pages/story/StoryPage';
import TestPage from './pages/test-page/TestPage';

function App(): ReactElement {
    return (
        <ParallaxProvider>
            <div className="App">
                <Route exact path="/" component={DreamPage}></Route>
                <Route path="/survey" component={SurveyPage}></Route>
                <Route path="/boarding-passes" component={BoardingPassesPage}></Route>
                <Route path="/stories" component={StoriesPage}></Route>
                <Route path="/story/:storyId" component={StoryPage}></Route>
                <Route path="/test" component={TestPage}></Route>
            </div>
        </ParallaxProvider>
    );
}

export default App;
