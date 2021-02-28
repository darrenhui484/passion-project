import { Component, ReactElement } from 'react';
import { IPassportCardProps } from '../passportCard/IPassportCardProps';
import PassportCard from '../../components/passportCard/PassportCard';
import './PassportCardFilter.scss';

interface PassportCardFilterProps {
    passportPropsList: IPassportCardProps[];
}

interface PassportCardFilterState {
    filteredPassportCardProps: IPassportCardProps[];
}

export class PassportCardFilter extends Component<PassportCardFilterProps, PassportCardFilterState> {
    private readonly passportCardPropsList: IPassportCardProps[];

    constructor(passportCardFilterProps: PassportCardFilterProps) {
        super(passportCardFilterProps);
        this.passportCardPropsList = passportCardFilterProps.passportPropsList;
        this.state = { filteredPassportCardProps: this.passportCardPropsList };
    }

    render(): ReactElement {
        return (
            <div className="PassportCardFilter">
                <div className="PassportCardFilter-filter-container">
                    <div className="PassportCardFilter-filter-item">FILTER BY:</div>
                    <div className="PassportCardFilter-filter-item">LATEST</div>
                    <div className="PassportCardFilter-filter-item">THEME</div>
                    <div className="PassportCardFilter-filter-item">LOCATION</div>
                </div>
                <div className="PassportCardFilter-card-container">
                    {this.state.filteredPassportCardProps.map((passportProps, i) => (
                        <div className="BoardingPasses-page-passport-item" key={i}>
                            <PassportCard {...passportProps} />
                        </div>
                    ))}
                </div>
            </div>
        );
    }
}
