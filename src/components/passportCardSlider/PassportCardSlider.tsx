import { ReactElement } from 'react';
import './PassportCardSlider.scss';
import { IPassportCardProps } from '../passportCard/IPassportCardProps';
import PassportCard from '../passportCard/PassportCard';
import ScrollContainer from 'react-indiana-drag-scroll';

interface IPassportCardSliderProps {
    passportCardPropsList: IPassportCardProps[];
}

function PassportCardSlider({ passportCardPropsList }: IPassportCardSliderProps): ReactElement {
    return (
        <ScrollContainer className="Passport-card-slider">
            {passportCardPropsList.map((passportCardProps, i) => (
                <div className="Passport-card-element" key={i}>
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
            ))}
        </ScrollContainer>
    );
}

export default PassportCardSlider;
