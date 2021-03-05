import { CSSProperties, ReactElement, useState } from 'react';
import SurveyQuestionBubble from '../surveyQuestionBubble/SurveyQuestionBubble';
import './SurveyQuestionSlider.scss';

function SurveyQuestionSlider(): ReactElement {
    const heightStart = 1;
    const heightEnd = 469;
    const height = heightEnd - heightStart;
    const verticalLineXPosition = 65;
    const tickLength = 25;

    const numberOfQuestions = 6;

    const [questionIndex, setQuestionIndex] = useState(0);

    function generateQuestionStyle(i: number): CSSProperties {
        const offset = -9;
        const questionNumberStyle: CSSProperties = {
            position: 'absolute',
            top: i * (heightStart + height / (numberOfQuestions + 1)) + offset + 'px',
            right: 2 * tickLength + 'px',
        };

        return questionNumberStyle;
    }

    function generateTickStyle(i: number): CSSProperties {
        const tickStyle: CSSProperties = {
            position: 'absolute',
            width: tickLength + 'px',
            top: i * (heightStart + height / (numberOfQuestions + 1)) + 'px',
            left: verticalLineXPosition - tickLength - 1 + 'px',
        };

        return tickStyle;
    }

    function generateQuestionBubbleStyle(i: number): CSSProperties {
        const questionBubbleStyle: CSSProperties = {
            position: 'absolute',
            // width: '50px',
            top: '0px',
            right: '0px',
        };
        return questionBubbleStyle;
    }

    return (
        <div className="Survey-question-slider">
            <div style={generateQuestionBubbleStyle(questionIndex)}>
                <SurveyQuestionBubble />
            </div>
            <div>
                <div className="Survey-question-slider-numbers">
                    {[...Array(numberOfQuestions + 1)].map((e, i) => {
                        if (i != 0) {
                            return (
                                <>
                                    <div className="Survey-question-slider-tick" style={generateTickStyle(i)} />
                                    <div style={generateQuestionStyle(i)} key={i}>
                                        0{i}
                                    </div>
                                </>
                            );
                        } else {
                            return <></>;
                        }
                    })}
                </div>
                <svg height="471" width="80">
                    <line x1="0" y1={heightEnd} x2="80" y2={heightEnd} />
                    <line x1={verticalLineXPosition} y1={heightStart} x2={verticalLineXPosition} y2={heightEnd} />
                    <line x1="0" y1={heightStart} x2="80" y2={heightStart} />
                </svg>
            </div>
        </div>
    );
}

export default SurveyQuestionSlider;
