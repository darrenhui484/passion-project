import { Component, ReactElement } from 'react';
import Arrow from '../arrow/Arrow';
import SelectSearch, { fuzzySearch, SelectSearchOption } from 'react-select-search';
import './Filter.scss';

interface FilterProps {
    options: FilterSelectOptions[];
    onChange?: (title: string, value: string) => void;
}

interface FilterSelectOptions {
    title: string;
    options: SelectSearchOption[];
}

export class Filter extends Component<FilterProps> {
    private readonly filterItems: ReactElement[];

    public static NO_FILTER = 'NO_FILTER';

    constructor(filterProps: FilterProps) {
        super(filterProps);

        this.filterItems = filterProps.options.map((filterProp, i) => {
            const filterArrowId = `filterProp.title-${i}`;
            return (
                <div
                    key={filterArrowId}
                    className="Filter-filter-item-container"
                    onFocus={this.updateArrow.bind(this, filterArrowId, true)}
                    onBlur={this.updateArrow.bind(this, filterArrowId, false)}
                >
                    <SelectSearch
                        search
                        options={filterProp.options}
                        onChange={this.filterValueChange.bind(this, filterProp.title)}
                        filterOptions={fuzzySearch}
                        placeholder={filterProp.title}
                    />
                    <div id={filterArrowId} className="Filter-filter-item-icon">
                        <Arrow />
                    </div>
                </div>
            );
        });
    }

    filterValueChange(title: string, value: SelectSearchOption | SelectSearchOption[]): void {
        console.log(title, value);
        if (this.props.onChange) {
            this.props.onChange(title, value.toString());
        }
    }

    updateArrow(arrowId: string, selected: boolean): void {
        const arrow = document.getElementById(arrowId);
        if (selected) {
            arrow?.classList.add('selected');
        } else {
            arrow?.classList.remove('selected');
        }
    }

    render(): ReactElement {
        return (
            <div className="Filter">
                <div className="Filter-filter-items-container">{this.filterItems}</div>
            </div>
        );
    }
}
