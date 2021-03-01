import { Component, ReactElement } from 'react';
import { IPassportCardProps } from '../passportCard/IPassportCardProps';
import PassportCard from '../../components/passportCard/PassportCard';
import './PassportCardFilter.scss';
import Arrow from '../arrow/Arrow';
import SelectSearch, { fuzzySearch, SelectedOptionValue } from 'react-select-search';

/* TODO: These are just a placeholder for now. We should have an enum mapping to actual value later.*/
const THEME_LIST = ['SUSTAINABILITY', 'DEVELOPING COUNTRY', 'SAFE SPACE', 'EDUCATION'];
const LOCATION_LIST = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'USA'];
const LOCATION_ARROW_ID = 'locationArrow';
const THEME_ARROW_ID = 'themeArrow';

const NO_FILTER = 'NO_FILTER';
const tempLocationArr: any[] = [{ name: 'NONE', value: NO_FILTER }];
const tempThemeArr: any[] = [{ name: 'NONE', value: NO_FILTER }];
const LOCATION_OPTIONS = LOCATION_LIST.reduce((arr, location) => {
    const obj = { value: location, name: location };
    arr.push(obj);
    return arr;
}, tempLocationArr);
const THEME_OPTIONS = THEME_LIST.reduce((arr, theme) => {
    const obj = { value: theme, name: theme };
    arr.push(obj);
    return arr;
}, tempThemeArr);

interface PassportCardFilterProps {
    passportPropsList: IPassportCardProps[];
}

interface PassportCardFilterState {
    filteredPassportCardProps: IPassportCardProps[];
}

export class PassportCardFilter extends Component<PassportCardFilterProps, PassportCardFilterState> {
    private readonly passportCardPropsList: IPassportCardProps[];
    // TODO: Make these be some sort of theme/location enum/interface we make.
    private filteredTheme: string;
    private filteredLocation: string;

    constructor(passportCardFilterProps: PassportCardFilterProps) {
        super(passportCardFilterProps);
        this.passportCardPropsList = passportCardFilterProps.passportPropsList;
        this.filteredTheme = NO_FILTER;
        this.filteredLocation = NO_FILTER;

        this.state = {
            filteredPassportCardProps: this.passportCardPropsList,
        };
    }

    onThemeFilterSelected(selectedTheme: SelectedOptionValue | SelectedOptionValue[]): void {
        this.filteredTheme = selectedTheme.toString();
        this.updateFilteredCards();
    }

    onLocationFilterSelected(selectedTheme: SelectedOptionValue | SelectedOptionValue[]): void {
        this.filteredLocation = selectedTheme.toString();
        this.updateFilteredCards();
    }

    updateArrow(arrowId: string, selected: boolean): void {
        const arrow = document.getElementById(arrowId);
        console.log(arrow);
        if (selected) {
            arrow?.classList.add('selected');
        } else {
            arrow?.classList.remove('selected');
        }
    }

    updateFilteredCards(): void {
        const filteredPassportCardProps = this.passportCardPropsList.filter((passportCardProps) => {
            if (
                (this.filteredTheme !== NO_FILTER && passportCardProps.title != this.filteredTheme) ||
                (this.filteredLocation !== NO_FILTER &&
                    passportCardProps.countryFrom !== this.filteredLocation &&
                    passportCardProps.countryTo !== this.filteredLocation)
            ) {
                return false;
            }
            return true;
        });
        this.setState({ filteredPassportCardProps });
    }

    render(): ReactElement {
        return (
            <div className="PassportCardFilter">
                <div className="PassportCardFilter-filter-items-container">
                    <div
                        className="PassportCardFilter-filter-item-container"
                        onFocus={this.updateArrow.bind(this, THEME_ARROW_ID, true)}
                        onBlur={this.updateArrow.bind(this, THEME_ARROW_ID, false)}
                    >
                        <SelectSearch
                            search
                            options={THEME_OPTIONS}
                            onChange={this.onThemeFilterSelected.bind(this)}
                            filterOptions={fuzzySearch}
                            placeholder="THEME"
                        />
                        <div id={THEME_ARROW_ID} className="PassportCardFilter-filter-item-icon">
                            <Arrow />
                        </div>
                    </div>
                    <div
                        className="PassportCardFilter-filter-item-container"
                        onFocus={this.updateArrow.bind(this, LOCATION_ARROW_ID, true)}
                        onBlur={this.updateArrow.bind(this, LOCATION_ARROW_ID, false)}
                    >
                        <SelectSearch
                            search
                            options={LOCATION_OPTIONS}
                            onChange={this.onLocationFilterSelected.bind(this)}
                            filterOptions={fuzzySearch}
                            placeholder="LOCATION"
                        />
                        <div id={LOCATION_ARROW_ID} className="PassportCardFilter-filter-item-icon">
                            <Arrow />
                        </div>
                    </div>
                </div>
                {/* Delete this bottom part and make it in the parent */}
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
