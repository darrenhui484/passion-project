import { ReactElement } from 'react';
import './SurveyScale.scss';

function SurveyScale(): ReactElement {
    return (
        <svg viewBox="0 0 409 134">
            <g>
                <path className="Survey-scale" d="M178.49,35.9C104.94,40.36,52.58,66.6,23.69,85.57" />
                <path
                    className="Survey-scale"
                    d="M385.18,86.46c-23.56-15.85-74.91-43.6-152.42-49.94-.85-.07-1.88-.14-3.06-.2"
                />
            </g>
        </svg>
    );
}

export default SurveyScale;
