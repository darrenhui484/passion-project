import React, { ReactElement } from 'react';
import Navbar from '../../components/navbar/Navbar';
import './BoardingPassesPage.scss';

function BoardingPassesPage(): ReactElement {
    window.onbeforeunload = () => window.scrollTo(0, 0);

    return (
        <div className="BoardingPasses-page font-aktiv-grotesk">
            <Navbar />

            <div className="BoardingPasses-page-content-container">
                <div className="BoardingPasses-page-header-container">
                    <div className="BoardingPasses-page-title-container">
                        <div className="BoardingPasses-page-title-boarding-text font-saol-display">BOARDING</div>
                        <div className="BoardingPasses-page-title-bottom-container">
                            <div className="BoardingPasses-page-title-bottom-left-section">
                                Us, dreamers stand together. We inspire one another and follow the beat of our own
                                heart.
                            </div>
                            <div className="BoardingPasses-page-title-bottom-right-section font-saol-display">
                                PASSES
                            </div>
                        </div>
                    </div>
                    <div className="BoardingPasses-filter-container">
                        <div className="BoardingPasses-filter-item">FILTER BY:</div>
                        <div className="BoardingPasses-filter-item">LATEST</div>
                        <div className="BoardingPasses-filter-item">THEME</div>
                        <div className="BoardingPasses-filter-item">LOCATION</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardingPassesPage;
