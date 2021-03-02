import React, { Component, ReactElement } from 'react';
import { Filter } from '../../components/filter/Filter';
import { IFilterSelectOptions } from '../../components/filter/IFilterSelectOptions';
import Navbar from '../../components/navbar/Navbar';
import { IStoryCardProps } from '../../components/storyCard/IStoryCardProps';
import FilterableTemplate from '../filterableTemplate/FilterableTemplate';
import { generateFilterSelectOptions } from './FilterOptions';
import './StoriesPage.scss';

const FILTERABLE_PAGE_PROPS = {
    titleTop: 'BOARDING',
    titleBottom: 'PASSES',
    subtext: 'Us, dreamers stand together. We inspire one another and follow the beat of our own heart.',
};

const cardOne: IStoryCardProps = {
    title: 'BODY CONFIDENCE',
    author: 'Olivia Rush',
    imageUrl:
        'https://www.thesprucepets.com/thmb/UCGjJ5v6HgPJJ7OOtS5J3ijUBZ8=/1080x1350/filters:fill(auto,1)/35493166_2113126082300521_5592447779063463936_n-5b69b61946e0fb002562c234.jpg',
};

const cardTwo: IStoryCardProps = {
    title: 'RECLAIMING YOUR BODY',
    author: 'Rachel Holt',
    imageUrl:
        'https://www.thesprucepets.com/thmb/UCGjJ5v6HgPJJ7OOtS5J3ijUBZ8=/1080x1350/filters:fill(auto,1)/35493166_2113126082300521_5592447779063463936_n-5b69b61946e0fb002562c234.jpg',
};

const storyPropsList = [cardOne, cardTwo];

interface StoriesPageState {
    filteredStoryCards: IStoryCardProps[];
}

export default class StoriesPage extends Component<Record<string, never>, StoriesPageState> {
    private readonly storyPropsList: IStoryCardProps[];
    private filteredLatest: string;
    private filteredTopic: string;
    private filteredSpeaker: string;
    private filterOptions: IFilterSelectOptions[];

    constructor(props: Record<string, never>) {
        super(props);

        this.storyPropsList = storyPropsList;
        this.filteredLatest = Filter.NO_FILTER;
        this.filteredTopic = Filter.NO_FILTER;
        this.filteredSpeaker = Filter.NO_FILTER;
        this.filterOptions = generateFilterSelectOptions(storyPropsList);

        this.state = { filteredStoryCards: storyPropsList };
    }

    filterItemChanged(item: string, value: string): void {
        console.log(item, value);
        this.updateStoryCards();
    }

    updateStoryCards(): void {
        console.log('update me!');
    }

    render(): ReactElement {
        window.onbeforeunload = () => window.scrollTo(0, 0);

        return (
            <div className="Story-page font-aktiv-grotesk">
                <Navbar />
                <FilterableTemplate
                    {...FILTERABLE_PAGE_PROPS}
                    filterOptions={this.filterOptions}
                    onFilterChange={this.filterItemChanged.bind(this)}
                />
                <div className="Story-page-card-container">
                    {/* {this.state.filteredPassportCardProps.map((passportProps, i) => (
                        <div className="BoardingPasses-page-passport-item" key={i}>
                            <PassportCard {...passportProps} />
                        </div>
                    ))} */}
                </div>
            </div>
        );
    }
}
