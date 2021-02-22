import { ReactElement, useState } from 'react';
import './SurveyThemeSelectionPage.scss';
import SurveyCircle from '../../../components/surveyCircle/SurveyCircle';

interface SurveyThemeSelectionPageProps {
    themeSelectedHandler(theme: string): void;
}

function SurveyThemeSelectionPage({ themeSelectedHandler }: SurveyThemeSelectionPageProps): ReactElement {
    const choices = ['PASSION', 'INSPIRATION', 'VISION'];

    const [currentChoice, setCurrentChoice] = useState(choices[1]);
    const [prevChoice, setPrevChoice] = useState(choices[1]);

    function determinePositionClass() {
        if (prevChoice === choices[0] && currentChoice === choices[1]) {
            return 'Survey-page-left-to-center-selected';
        } else if (prevChoice === choices[2] && currentChoice === choices[1]) {
            return 'Survey-page-right-to-center-selected';
        } else if (currentChoice === choices[0]) {
            return 'Survey-page-left-selected';
        } else if (currentChoice === choices[2]) {
            return 'Survey-page-right-selected';
        } else {
            // default apply no class, center will be selected
        }
    }

    function handleOnClick(choice: string) {
        if (currentChoice === choice) {
            themeSelectedHandler(choice);
        } else {
            setPrevChoice(currentChoice);
            setCurrentChoice(choice);
        }
    }

    return (
        <div className="Survey-theme-selection-page">
            <div className="Survey-page-top-container">
                <SurveyCircle />
            </div>
            <div className="Survey-page-choices-container">
                <div className="Survey-page-choices-title font-aktiv-grotesk">CHOOSE A THEME</div>
                <div className={'Survey-page-choices font-saol-display ' + determinePositionClass()}>
                    <div className="Survey-page-choices-item-1" onClick={() => handleOnClick(choices[0])}>
                        {choices[0]}
                    </div>
                    <div className="Survey-page-choices-item-2" onClick={() => handleOnClick(choices[1])}>
                        {choices[1]}
                    </div>
                    <div className="Survey-page-choices-item-3" onClick={() => handleOnClick(choices[2])}>
                        {choices[2]}
                    </div>
                </div>
            </div>
            <div className="Survey-page-circle-bottom-container">
                <SurveyCircle />
            </div>
        </div>
    );
}

export default SurveyThemeSelectionPage;
