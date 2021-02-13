import { ReactElement } from 'react';
import './Airplane.scss';

function Airplane(): ReactElement {
    return (
        <svg className="Airplane" viewBox="0 0 803.61 446.92">
            <path
                d="M283.32,365.48l26.36,149.89s13.65,94.72,110.68,95.14,589.44-3.2,589.44-3.2,80.06-6.89,76.73-73.45-97.14-68.07-97.14-68.07l-181.15.27s-42.78.25-65.74-46.08S636.05,209.83,636.05,209.83s-23.79-52.77-52.53-45.52-22.73,47.18-22.73,47.18l27.92,236.39L415.64,458.23l-33.7-104s-17.19-56.06-61-49.68S283.32,365.48,283.32,365.48Z"
                transform="translate(-283.02 -163.63)"
            />
        </svg>
    );
}

export default Airplane;
