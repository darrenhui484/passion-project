import { ReactElement } from 'react';
import SurveyArrow from './surveyArrow/SurveyArrow';
import './SurveyNavMenu.scss';

interface ISurveyNavMenuProps {
    onClickBackHandler(): void;
    onClickForwardHandler(): void;
    questionNumber: number;
}

function SurveyNavMenu({
    onClickBackHandler,
    onClickForwardHandler,
    questionNumber,
}: ISurveyNavMenuProps): ReactElement {
    return (
        <div className="Survey-nav-menu">
            <div className="Survey-nav-menu-question font-aktiv-grotesk">{'0' + questionNumber.toString()}</div>
            <div className="Survey-nav-menu-theme"></div>
            <div className="Survey-nav-menu-back-container">
                <div className="Survey-nav-menu-back" onClick={onClickBackHandler}>
                    <SurveyArrow />
                </div>
                <div className="Survey-nav-menu-back-text">GO BACK</div>
            </div>
            <div className="Survey-nav-menu-forward-container">
                <div className="Survey-nav-menu-forward" onClick={onClickForwardHandler}>
                    <SurveyArrow />
                </div>
                <div className="Survey-nav-menu-forward-text">GO NEXT</div>
            </div>
        </div>
    );
}

export default SurveyNavMenu;
