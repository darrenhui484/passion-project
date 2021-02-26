import { ReactElement } from 'react';
import BoardingPass from '../../components/boardingPass/BoardingPass';
import './TestPage.scss';

function TestPage(): ReactElement {
    return (
        <div className="Test-page">
            <BoardingPass />
        </div>
    );
}

export default TestPage;
