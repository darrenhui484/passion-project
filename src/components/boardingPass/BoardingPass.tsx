import { ReactElement } from 'react';
import PassportCard from '../passportCard/PassportCard';
import './BoardingPass.scss';
import { IBoardingPassProps } from './IBoardingPassProps';

function BoardingPass({
    fromCityCountry,
    toCityCountry,
    mainQuestion,
    mainAnswer,
    secondQuestion,
    secondAnswer,
    questionCount,
    currentQuestionNumber,
    passportCardProps,
}: IBoardingPassProps): ReactElement {
    const questionNumberContent = [];
    for (let i = 0; i < questionCount; i++) {
        // TODO: This is the same thing, except the currentQuestionNumber has the selected class, clean it up
        if (i === currentQuestionNumber) {
            questionNumberContent.push(
                <div
                    key={i}
                    className="Boarding-pass-left-number-container Boarding-pass-left-number-container-selected"
                >
                    <div className="Boarding-pass-left-number">0{i + 1}</div>
                </div>,
            );
        } else {
            questionNumberContent.push(
                <div key={i} className="Boarding-pass-left-number-container">
                    <div className="Boarding-pass-left-number">0{i + 1}</div>
                </div>,
            );
        }
    }

    return (
        <div className="Boarding-pass">
            <div className="Boarding-pass-left-side">
                <div className="Boarding-pass-left-side-top-horizontal-divider"></div>
                <div className="Boarding-pass-left-side-middle-vertical-divider"></div>
                <div className="Boarding-pass-left-side-top-section">
                    <div className="Boarding-pass-left-side-left-section"></div>
                    <div className="Boarding-pass-left-side-main-question font-vcr-osd-mono">{mainQuestion}</div>
                </div>
                <div className="Boarding-pass-left-side-middle-section">
                    <div className="Boarding-pass-left-side-left-section">
                        <div className="Boarding-pass-left-side-country-container">
                            <div className="Boarding-pass-left-side-country-title font-aktiv-grotesk">FROM</div>
                            <div className="Boarding-pass-left-side-country-place font-vcr-osd-mono">
                                {fromCityCountry}
                            </div>
                        </div>
                        <div className="Boarding-pass-left-side-country-container">
                            <div className="Boarding-pass-left-side-country-title font-aktiv-grotesk">TO</div>
                            <div className="Boarding-pass-left-side-country-place font-vcr-osd-mono">
                                {toCityCountry}
                            </div>
                        </div>
                    </div>
                    <div className="Boarding-pass-left-side-main-answer font-aktiv-grotesk">{mainAnswer}</div>
                </div>
                <div className="Boarding-pass-left-side-bottom-section">
                    <div className="Boarding-pass-left-side-left-section Boarding-pass-left-side-left-question">
                        <div className="Boarding-pass-left-side-question-two-container">
                            <div className="Boarding-pass-left-side-question-two font-aktiv-grotesk">
                                {secondQuestion}
                            </div>
                            <div className="Boarding-pass-left-side-answer-two font-aktiv-grotesk">{secondAnswer}</div>
                        </div>
                    </div>
                    <div className="Boarding-pass-left-side-stamp-container font-aktiv-grotesk">
                        <div className="Boarding-pass-left-side-date">{passportCardProps.date}</div>
                        <div className="Boarding-pass-left-boarding-pass-text">BOARDING PASS</div>
                    </div>
                </div>
                <div className="Boarding-pass-left-numbers-container font-vcr-osd-mono">{questionNumberContent}</div>
            </div>
            <div className="Boarding-pass-right-side">
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
        </div>
    );
}

export default BoardingPass;
