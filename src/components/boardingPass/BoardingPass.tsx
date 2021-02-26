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

function BoardingPass(): ReactElement {
    return (
        <div className="Boarding-pass">
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
