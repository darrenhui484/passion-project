import { ReactElement } from 'react';
import './TestPage.scss';
import { RellaxWrapper } from 'react-rellax-wrapper';

function TestPage(): ReactElement {
    return (
        <div className="Test-page">
            <div className="container">
                <RellaxWrapper speed={0} zIndex={3}>
                    <div className="item-1"></div>
                </RellaxWrapper>
                <RellaxWrapper speed={5} zIndex={2}>
                    <div className="item-2"></div>
                </RellaxWrapper>
            </div>
        </div>
    );
}

export default TestPage;
