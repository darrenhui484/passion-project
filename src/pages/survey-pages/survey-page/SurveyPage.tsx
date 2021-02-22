import { ReactElement, useState } from 'react';
import { Route } from 'react-router-dom';
import './SurveyPage.scss';
import SurveyThemeSelectionPage from '../survey-theme-selection-page/SurveyThemeSelectionPage';
import SurveyFormPage from '../survey-form-page/SurveyFormPage';

function SurveyPage(): ReactElement {
    const [{ theme }, setFormState] = useState({ theme: '' });

    function themeSelectedHandler(theme: string) {
        setFormState({ theme: theme });
    }

    return (
        <div className="Survey-page">
            <button className="Survey-page-exit-btn">X</button>
            {/* <SurveyThemeSelectionPage themeSelectedHandler={themeSelectedHandler}></SurveyThemeSelectionPage> */}
            <SurveyFormPage />
        </div>
    );
}

export default SurveyPage;
