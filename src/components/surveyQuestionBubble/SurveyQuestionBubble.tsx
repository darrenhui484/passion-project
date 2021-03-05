import { ReactElement } from 'react';
import './SurveyQuestionBubble.scss';

function SurveyQuestionBubble(): ReactElement {
    return (
        <>
            <div className="Survey-question-bubble-text">Q</div>
            <svg viewBox="0 0 81 78">
                <g>
                    <path
                        className="Survey-question-bubble-cls-1"
                        d="M26.5,55.5a3,3,0,0,1-3-3V46.36a.89.89,0,0,1-.48-.13L10.09,39.11a1,1,0,0,1-.39-1.36,1,1,0,0,1,.39-.39L23,30.24a.89.89,0,0,1,.48-.13V22.5a3,3,0,0,1,3-3h38a3,3,0,0,1,3,3v30a3,3,0,0,1-3,3Z"
                    />
                </g>
            </svg>
        </>
    );
}

export default SurveyQuestionBubble;
