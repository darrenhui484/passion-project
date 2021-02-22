import { ReactElement, useState } from 'react';
import './SurveyFormPage.scss';
import SurveyArrow from '../../../components/surveyArrow/SurveyArrow';

function SurveyFormPage(): ReactElement {
    const [questionIndex, setQuestionIndex] = useState(0);

    const questions = ['WHERE ARE YOU FROM?', 'QUESTION 2', 'QUESTION 3'];

    return (
        <div className="Survey-form-page">
            <div className="Survey-form-page-question-container">
                <div className="Survey-form-page-question">{questions[questionIndex]}</div>
                <div className="Survey-form-page-question-img"></div>
            </div>
            <div className="Survey-form-page-nav-menu-container">
                <div className="Survey-form-page-nav-menu-question font-aktiv-grotesk">01</div>
                <div className="Survey-form-page-nav-menu-theme"></div>
                <div className="Survey-form-page-nav-menu-back-container">
                    <div className="Survey-form-page-nav-menu-back">
                        <SurveyArrow />
                    </div>
                    <div className="Survey-form-page-nav-menu-back-text">GO FORWARD</div>
                </div>
                <div className="Survey-form-page-nav-menu-forward-container">
                    <div className="Survey-form-page-nav-menu-forward">
                        <SurveyArrow />
                    </div>
                    <div className="Survey-form-page-nav-menu-forward-text">GO NEXT</div>
                </div>
            </div>
            <div className="Survey-form-page-input-container"></div>
            <div className="Survey-form-page-progress-container"></div>
        </div>
    );
}

export default SurveyFormPage;
