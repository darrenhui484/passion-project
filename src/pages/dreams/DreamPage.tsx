import { ReactElement } from 'react';
import Navbar from '../../components/navbar/Navbar';
import PassportCardSlider from '../../components/passportCardSlider/PassportCardSlider';
import './DreamPage.scss';
import Arrow from '../../components/arrow/Arrow';

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

function DreamPage(): ReactElement {
    return (
        <div className="Dream-page font-aktiv-grotesk">
            <Navbar />
            <div className="Dream-page-title-container">
                <div className="Dream-page-text-section-1">
                    <div className="Dream-page-text-section-1-title font-saol-display">
                        <i>Dreaming</i> is the first step to <i>believing</i>
                    </div>
                    <div className="Dream-page-text-section-1-description Dream-page-font-medium">
                        Taking a moment to dream of a life without limitations is something we often take for granted,
                        disregard or even find it challenging to imagine. This is because all too often our beliefs and
                        potential have been shaped by our upbringing and social expectations. So, the opportunity to
                        dream can seem like an unrealistic fantasy. However, dreaming is the first step to believing. It
                        is the first step to falling in love with the feeling of excitement and possibilities. Yet,
                        dreaming alone can be scary and isolating.
                    </div>
                </div>
                <div className="Dream-page-title font-saol-display">
                    <div className="Dream-page-title-1">A COLLECTION</div>
                    <div className="Dream-page-title-2">OF DREAMS</div>
                </div>

                <div className="Dream-page-departures">
                    <div className="Dream-page-departures-text">DEPARTURES</div>
                    <div className="Dream-page-departures-arrow-container">
                        <div className="Dream-page-departures-arrow">
                            <Arrow />
                        </div>
                    </div>
                </div>
                <div className="Dream-page-book-flight">
                    <div className="Dream-page-book-flight-arrow-container">
                        <div className="Dream-page-book-flight-arrow">
                            <Arrow />
                        </div>
                    </div>
                    <div className="Dream-page-book-flight-title">
                        BOOK
                        <br />
                        YOUR FLIGHT
                    </div>
                    <div className="Dream-page-book-flight-description">
                        Everything starts with an inspiration, a passion or a vision. So, book your flight to anywhere
                        in the world. Where will you be?
                    </div>
                </div>
                <div className="Dream-page-text-section-2 Dream-page-font-medium">
                    So, here we aim to create a community of dreamers driven by either an inspiration, a passion or
                    vision for change. By writing your own dreams and reading other people’s dreaming destination, you
                    realise that you aren’t alone. Every half year, your boarding pass will appear in your email to
                    remind yourself - am I marching to the beat of my own heart? Is this still my dream? Remember
                    dreaming is such an important part to reimagining and reshaping our future.
                </div>
                <div></div>
            </div>
            <div className="Dream-page-boarding-gates-container">
                <div className="Dream-page-boarding-gates-title font-saol-display">Boarding Gates</div>
                <div className="Dream-page-boarding-gates-view-gates-btn-container">
                    <div className="Dream-page-boarding-gates-view-gates-btn">
                        <div className="Dream-page-boarding-gates-view-gates-btn-text">VIEW ALL GATES</div>
                        <div className="Dream-page-boarding-gates-view-gates-btn-arrow-container">
                            <div className="Dream-page-boarding-gates-view-gates-btn-arrow">
                                <Arrow />
                            </div>
                        </div>
                    </div>
                </div>

                <PassportCardSlider passportCardPropsList={generateDummyData()} />
            </div>
        </div>
    );
}

export default DreamPage;
