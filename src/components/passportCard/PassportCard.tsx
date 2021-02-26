import { ReactElement } from 'react';
import { IPassportCardProps } from './IPassportCardProps';
import './PassportCard.scss';
import { QRCode } from 'react-qr-svg';

// TODO(darrenhui484): Don't destructure the object param.
function PassportCard({
    countryFrom,
    countryTo,
    date,
    seat,
    title,
    description,
    qrCodeValue,
}: IPassportCardProps): ReactElement {
    return (
        <div className="Passport-card font-aktiv-grotesk">
            <div className="Passport-card-top-half">
                <div>
                    <QRCode value={qrCodeValue} level="L" bgColor="#536c28" fgColor="#faf2e9" />
                    <div>
                        <div className="Passport-card-section-text">
                            <div className="Passport-card-font-xsmall">SEAT</div>
                            <div>{seat}</div>
                        </div>

                        <div className="Passport-card-section-text">
                            <div className="Passport-card-font-xsmall">DATE</div>
                            <div>{date}</div>
                        </div>
                    </div>
                </div>
                <div className="Passport-card-top-half-right">
                    <div className="Passport-card-font-xsmall">FROM</div>
                    <div className="Passport-card-font-large font-vcr-osd-mono">{countryFrom}</div>
                    <div className="Passport-card-font-xsmall">TO</div>
                    <div className="Passport-card-font-large font-vcr-osd-mono">{countryTo}</div>
                </div>
            </div>

            <div className="Passport-card-description-title">
                <div className="Passport-card-description-title-heading Passport-card-font-medium-plus font-vcr-osd-mono">
                    {title}
                </div>
                <div className="Passport-card-font-xsmall">/ GATE</div>
            </div>

            <div className="Passport-card-description Passport-card-font-small">{description}</div>
        </div>
    );
}

export default PassportCard;
