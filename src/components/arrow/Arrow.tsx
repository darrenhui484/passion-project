import { ReactElement } from 'react';
import './Arrow.scss';

function Arrow(): ReactElement {
    return (
        <svg viewBox="0 0 100 100">
            <g className="cls-1">
                <line x1="0" y1="50" x2="80" y2="50" />
                <line x1="30" y1="5" x2="80" y2="50" />
                <line x1="30" y1="95" x2="80" y2="50" />
            </g>
        </svg>
    );
}

export default Arrow;
