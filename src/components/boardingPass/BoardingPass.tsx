import { ReactElement } from 'react';
import PassportCard from '../passportCard/PassportCard';
import './BoardingPass.scss';

const passportCardProps = {
    countryFrom: 'USA',
    countryTo: 'AUS',
    date: '01.01.21',
    seat: 'PASSION',
    title: 'DEVELOPING COUNTRY',
    description: 'asdfi ajsdfoi jaweofija woeifj aoei fjao ewi fjs',
    qrCodeValue: 'test',
};

// TODO(timcheung): Make this take in an IBoardingPassProps.
function BoardingPass(): ReactElement {
    return (
        <div className="Boarding-pass">
            <div className="Boarding-pass-left-side">
                <div className="Boarding-pass-left-side-top-horizontal-divider"></div>
                <div className="Boarding-pass-left-side-middle-vertical-divider"></div>
                <div className="Boarding-pass-left-side-top-section">
                    <div className="Boarding-pass-left-side-top-section-left-side"></div>
                    <div className="Boarding-pass-left-side-main-question">
                        WHAT IS THE ONE THING YOU WOULD LIKE TO SEE CHANGE IN THE WORLD? WHY?
                    </div>
                </div>
                <div className="Boarding-pass-left-side-from-title">FROM</div>
                <div className="Boarding-pass-left-side-from-place">SYDNEY, AUSTRALIA</div>
                <div className="Boarding-pass-left-side-to-title">TO</div>
                <div className="Boarding-pass-left-side-to-place">PARIS, FRANCE</div>
                <div className="Boarding-pass-left-side-main-answer">
                    I would like to see a world that isn’t driven by greed and profit. I think many of the issues that
                    we see in our world and society today, such as environmental destruction and exploitation, are
                    caused by a small number of powerful and greedy individuals who benefit from it. I would like to see
                    a world where these people and corporations are held accountable for their actions and the damage
                    they have caused.
                </div>
                <div className="Boarding-pass-left-side-question-two">I AM GRATEFUL …</div>
                <div className="Boarding-pass-left-side-answer-two">
                    that I live in a healthy, functioning body and have been brought up in a safe environment where I
                    have the privilege to choose what I want to do in life. I am grateful that I have a small network of
                    supportive people around me who I can be myself with.
                </div>
                <div className="Boarding-pass-left-side-date">26.01.21</div>
                <div className="Boarding-pass-left-boarding-pass-text">BOARDING PASS</div>
                <div className="Boarding-pass-left-question-number"></div>
            </div>
            <PassportCard
                countryFrom={passportCardProps.countryFrom}
                countryTo={passportCardProps.countryTo}
                date={passportCardProps.date}
                seat={passportCardProps.seat}
                title={passportCardProps.title}
                description={passportCardProps.description}
                qrCodeValue={passportCardProps.qrCodeValue}
            />
        </div>
    );
}

export default BoardingPass;
