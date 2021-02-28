import React, { ReactElement } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PassportCard from '../../components/passportCard/PassportCard';
import { PassportCardFilter } from '../../components/passportCardFilter/PassportCardFilter';
import './BoardingPassesPage.scss';

function generateDummyData() {
    const passportProps = {
        countryFrom: 'USA',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'DEVELOPING COUNTRY',
        description: 'asdfi ajsdfoi jaweofija woeifj aoei fjao ewi fjs',
        qrCodeValue: 'test',
    };

    const passportProps2 = {
        countryFrom: 'USA',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'DEVELOPING COUNTRY',
        description: 'asdfi ajsdfoi jaweofija woeifj aoei fjao ewi fjs',
        qrCodeValue: 'test',
    };

    const passportProps3 = {
        countryFrom: 'USA',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'DEVELOPING COUNTRY',
        description: 'asdfi ajsdfoi jaweofija woeifj aoei fjao ewi fjs',
        qrCodeValue: 'test',
    };

    const passportProps4 = {
        countryFrom: 'USA',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'DEVELOPING COUNTRY',
        description: 'asdfi ajsdfoi jaweofija woeifj aoei fjao ewi fjs',
        qrCodeValue: 'test',
    };

    const passportProps5 = {
        countryFrom: 'USA',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'DEVELOPING COUNTRY',
        description: 'asdfi ajsdfoi jaweofija woeifj aoei fjao ewi fjs',
        qrCodeValue: 'test',
    };

    return [passportProps, passportProps2, passportProps3, passportProps4, passportProps5];
}

const passportPropsList = generateDummyData();

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
                        <PassportCardFilter passportPropsList={passportPropsList} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BoardingPassesPage;
