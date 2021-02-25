import { ReactElement } from 'react';
import './SurveyArrow.scss';

interface ISurveyArrowProps {
    style?: React.CSSProperties;
}

function SurveyArrow({ style }: ISurveyArrowProps): ReactElement {
    return (
        <svg viewBox="0 0 81 78" className="Survey-arrow" style={style}>
            <path d="M47.41,26.79,33.59,39.27,47.41,51.21" />
        </svg>
    );
}

export default SurveyArrow;
