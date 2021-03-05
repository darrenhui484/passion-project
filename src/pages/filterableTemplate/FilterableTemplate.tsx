import { Component, ReactElement } from 'react';
import { Filter } from '../../components/filter/Filter';
import { IFilterSelectOptions } from '../../components/filter/IFilterSelectOptions';
import './FilterableTemplate.scss';

interface FilterableTemplateProps {
    titleTop: string;
    titleBottom: string;
    subtext: string;
    filterOptions: IFilterSelectOptions[];
    onFilterChange?: (title: string, value: string) => void;
}

export default class FilterableTemplate extends Component<FilterableTemplateProps> {
    constructor(props: FilterableTemplateProps) {
        super(props);
    }

    render(): ReactElement {
        window.onbeforeunload = () => window.scrollTo(0, 0);

        return (
            <div className="Filterable-template font-aktiv-grotesk">
                <div className="Filterable-template-content-container">
                    <div className="Filterable-template-header-container">
                        <div className="Filterable-template-title-container">
                            <div className="Filterable-template-title-boarding-text font-saol-display">BOARDING</div>
                            <div className="Filterable-template-title-bottom-container">
                                <div className="Filterable-template-title-bottom-left-section">
                                    Us, dreamers stand together. We inspire one another and follow the beat of our own
                                    heart.
                                </div>
                                <div className="Filterable-template-title-bottom-right-section font-saol-display">
                                    PASSES
                                </div>
                            </div>
                        </div>
                        <div className="Filterable-template-filter-container">
                            <Filter options={this.props.filterOptions} onChange={this.props.onFilterChange} />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
