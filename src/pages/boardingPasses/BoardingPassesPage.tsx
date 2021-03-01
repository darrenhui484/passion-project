import React, { Component, ReactElement } from 'react';
import { Filter } from '../../components/filter/Filter';
import { createSearchSelectOptions } from '../../components/filter/helpers';
import Navbar from '../../components/navbar/Navbar';
import { IPassportCardProps } from '../../components/passportCard/IPassportCardProps';
import PassportCard from '../../components/passportCard/PassportCard';
import './BoardingPassesPage.scss';

const THEME_LIST = ['SUSTAINABILITY', 'DEVELOPING COUNTRY', 'SAFE SPACE', 'EDUCATION'];
const LOCATION_LIST = ['Afghanistan', 'Albania', 'Algeria', 'American Samoa', 'Andorra', 'Angola', 'USA'];
const THEME_TITLE = 'THEME';
const LOCATION_TITLE = 'LOCATION';

function generateDummyData() {
    const passportProps = {
        countryFrom: 'USA',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'DEVELOPING COUNTRY',
        description:
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
        qrCodeValue: 'test',
    };

    const passportProps2 = {
        countryFrom: 'ALB',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'DEVELOPING COUNTRY',
        description:
            'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,',
        qrCodeValue: 'test',
    };

    const passportProps3 = {
        countryFrom: 'USA',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'SUSTAINABILITY',
        description:
            'quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?',
        qrCodeValue: 'test',
    };

    const passportProps4 = {
        countryFrom: 'AFG',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'DEVELOPING COUNTRY',
        description:
            'ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        qrCodeValue: 'test',
    };

    const passportProps5 = {
        countryFrom: 'USA',
        countryTo: 'AUS',
        date: '01.01.21',
        seat: 'PASSION',
        title: 'DEVELOPING COUNTRY',
        description:
            '"At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus.',
        qrCodeValue: 'test',
    };

    return [passportProps, passportProps2, passportProps3, passportProps4, passportProps5];
}

const passportPropsList = generateDummyData();

interface BoardingPassPageState {
    filteredPassportCardProps: IPassportCardProps[];
}

export default class BoardingPassPage extends Component<Record<string, never>, BoardingPassPageState> {
    constructor(props: Record<string, never>) {
        super(props);
        this.state = { filteredPassportCardProps: passportPropsList };
    }

    filterItemChanged(title: string, value: string): void {
        console.log('from boarding passes page', title, value);
    }

    render(): ReactElement {
        window.onbeforeunload = () => window.scrollTo(0, 0);
        const themeOptions = createSearchSelectOptions(THEME_TITLE, THEME_LIST);
        const locationOptions = createSearchSelectOptions(LOCATION_TITLE, LOCATION_LIST);
        const filterOptions = [
            { title: THEME_TITLE, options: themeOptions },
            { title: LOCATION_TITLE, options: locationOptions },
        ];

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
                        <div className="BoardingPasses-page-filter-container">
                            <Filter options={filterOptions} onChange={this.filterItemChanged.bind(this)} />
                        </div>
                        <div className="BoardingPasses-page-card-container">
                            {this.state.filteredPassportCardProps.map((passportProps, i) => (
                                <div className="BoardingPasses-page-passport-item" key={i}>
                                    <PassportCard {...passportProps} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
