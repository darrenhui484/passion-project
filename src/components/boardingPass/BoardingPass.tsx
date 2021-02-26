import { ReactElement } from 'react';
import PassportCard from '../passportCard/PassportCard';
import './BoardingPass.scss';
import { IBoardingPassProps } from './IBoardingPassProps';

// TODO(timcheung): Make this take in an IBoardingPassProps.
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
                <div className="Boarding-pass-left-number-container Boarding-pass-left-number-container-selected">
                    <div className="Boarding-pass-left-number">0{i + 1}</div>
                </div>,
            );
        } else {
            questionNumberContent.push(
                <div className="Boarding-pass-left-number-container">
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
                    <div className="Boarding-pass-left-side-left-side"></div>
                    <div className="Boarding-pass-left-side-main-question">{mainQuestion}</div>
                </div>
                <div className="Boarding-pass-left-side-middle-section">
                    <div className="Boarding-pass-left-side-left-side">
                        <div className="Boarding-pass-left-side-country-container">
                            <div className="Boarding-pass-left-side-country-title">FROM</div>
                            <div className="Boarding-pass-left-side-country-place">{fromCityCountry}</div>
                        </div>
                        <div className="Boarding-pass-left-side-country-container">
                            <div className="Boarding-pass-left-side-country-title">TO</div>
                            <div className="Boarding-pass-left-side-country-place">{toCityCountry}</div>
                        </div>
                    </div>
                    <div className="Boarding-pass-left-side-main-answer">{mainAnswer}</div>
                </div>
                <div className="Boarding-pass-left-side-bottom-section">
                    <div className="Boarding-pass-left-side-left-side">
                        <div className="Boarding-pass-left-side-question-two">{secondQuestion}</div>
                        <div className="Boarding-pass-left-side-answer-two">{secondAnswer}</div>
                    </div>
                    <div className="Boarding-pass-left-side-stamp-container">
                        <div className="Boarding-pass-left-side-date">{passportCardProps.date}</div>
                        <div className="Boarding-pass-left-boarding-pass-text">BOARDING PASS</div>
                    </div>
                </div>
                <div className="Boarding-pass-left-numbers-container">{questionNumberContent}</div>
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
