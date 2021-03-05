import { ReactElement, useState } from 'react';
import './SurveyFormPage.scss';
import SurveyScale from '../../../components/surveyScale/SurveyScale';
import SurveyNavMenu from '../../../components/surveyNavMenu/SurveyNavMenu';
import SurveyQuestionSlider from '../../../components/surveyQuestionSlider/SurveyQuestionSlider';

function SurveyFormPage(): ReactElement {
    const [questionIndex, setQuestionIndex] = useState(0);

    const questions = [
        'WHERE ARE YOU FROM?',
        'WHERE WOULD YOU RATHER BE?',
        'WHAT IS ONE THING YOU WOULD LIKE TO SEE CHANGE IN THE WORLD? WHY?',
        'HOW HAVE YOU APPLIED THIS NEED FOR CHANGE IN YOUR EVERYDAY LIFE',
        'WHAT IS YOUR MOONSHOT GOAL',
    ];

    function onClickForwardHandler() {
        if (questionIndex < questions.length - 1) {
            setQuestionIndex(questionIndex + 1);
        }
    }

    function onClickBackHandler() {
        if (questionIndex > 0) {
            setQuestionIndex(questionIndex - 1);
        }
    }

    return (
        <div className="Survey-form-page">
            <div className="Survey-form-page-question-container">
                <div className="Survey-form-page-question">{questions[questionIndex]}</div>
                <div className="Survey-form-page-question-scale">
                    <SurveyScale />
                </div>
            </div>
            <div className="Survey-form-page-bottom-container">
                <SurveyNavMenu
                    questionNumber={questionIndex + 1}
                    onClickBackHandler={onClickBackHandler}
                    onClickForwardHandler={onClickForwardHandler}
                />
                <div className="Survey-form-page-input-container">
                    <input />
                </div>
                <div className="Survey-form-page-progress-container font-aktiv-grotesk">
                    <SurveyQuestionSlider />
                </div>
            </div>
        </div>
    );
}

export default SurveyFormPage;
